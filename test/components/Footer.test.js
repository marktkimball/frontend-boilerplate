import React from 'react'
import { shallow } from 'enzyme'
import Footer from '../../src/components/Footer/index'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../src/constants/filters'
import expect from 'expect'

describe('<Footer />', () => {
  let onClearCompleted = () => {
    return true
  }
  let onShow = () => {
    return true
  }

  const wrapper = shallow(<Footer completedCount={3} activeCount={21} filter={SHOW_ALL} onClearCompleted={onClearCompleted} onShow={onShow} />)
  const oneItemWrapper = shallow(<Footer completedCount={1} activeCount={1} filter={SHOW_ACTIVE} onClearCompleted={onClearCompleted} onShow={onShow} />)
  const noItemWrapper = shallow(<Footer completedCount={0} activeCount={0} filter={SHOW_COMPLETED} onClearCompleted={onClearCompleted} onShow={onShow} />)

  it('renders', () => {
    expect(wrapper).toExist
    expect(wrapper.length).toBe(1)
    expect(wrapper.instance()).toBeA(Footer)
  })

  it('renders as a <footer>', () => {
    expect(wrapper.type()).toBe('footer')
  })

  it('contains a <ul> element', () => {
    expect(wrapper.find('ul').length).toBe(1)
    expect(wrapper.find('ul').hasClass('filters')).toBe(true)
  })

  it('has .normal class on <footer> element', () => {
    expect(wrapper.find('footer').hasClass('normal')).toBe(true)
  })

  it('contains 3 <li> elements within <ul> element', () => {
    expect(wrapper.find('ul').find('li').length).toBe(3)
    expect(wrapper.find('ul').childAt(0).text()).toBe('All')
    expect(wrapper.find('ul').childAt(1).text()).toBe('Active')
    expect(wrapper.find('ul').childAt(2).text()).toBe('Completed')
  })

  it('renders TodoCount section', () => {
    expect(wrapper.find('.count').length).toBe(1)
    expect(wrapper.find('.count').find('strong').length).toBe(1)
  })

  it('displays correct active count in TodoCount', () => {
    expect(wrapper.find('.count').text()).toBe('21 items left')
    expect(oneItemWrapper.find('.count').text()).toBe('1 item left')
    expect(noItemWrapper.find('.count').text()).toBe('No items left')
  })

  it('renders <a> elements in filter links', () => {
    const expectedStyle = { cursor: 'pointer' }

    wrapper.find('ul').forEach(node => {
      expect(node.childAt(0).childAt(0).type()).toBe('a')
      expect(node.childAt(0).childAt(0).prop('style')).toEqual(expectedStyle)
    })
  })

  it('gives .selected class correct filter', () => {
    expect(wrapper.find('ul').childAt(0).childAt(0).hasClass('selected')).toBe(true)
    expect(oneItemWrapper.find('ul').childAt(1).childAt(0).hasClass('selected')).toBe(true)
    expect(noItemWrapper.find('ul').childAt(2).childAt(0).hasClass('selected')).toBe(true)
  })

  it('handles onClick events on filter links', () => {
    const onClickSpy = expect.createSpy()
    const onClickWrapper = shallow(<Footer completedCount={3} activeCount={21} filter={SHOW_ALL} onShow={onClickSpy} onClearCompleted={onClearCompleted} />)

    expect(onClickSpy.calls.length).toBe(0)
    onClickWrapper.find('ul').childAt(1).childAt(0).simulate('click')
    expect(onClickSpy.calls.length).toBe(1)
  })

  it('renders clear completed button', () => {
    expect(wrapper.find('button').length).toBe(1)
    expect(wrapper.find('button').hasClass('clearCompleted')).toBe(true)
    expect(wrapper.find('button').text()).toEqual('Clear completed')
  })

  it('does not render clear completed button if no items are completed', () => {
    expect(noItemWrapper.find('button').length).toBe(0)
  })

  it('handles onClick events on button', () => {
    const onClickSpy = expect.createSpy()
    const onClickWrapper = shallow(<Footer completedCount={3} activeCount={21} filter={SHOW_ALL} onClearCompleted={onClickSpy} onShow={onShow} />)

    expect(onClickSpy.calls.length).toBe(0)
    onClickWrapper.find('button').simulate('click')
    expect(onClickSpy.calls.length).toBe(1)
  })
})

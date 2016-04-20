import React from 'react'
import { shallow } from 'enzyme'
import MainSection from '../../src/components/MainSection/index'
import Footer from '../../src/components/Footer/index'
import TodoItem from '../../src/components/TodoItem/index'
import * as TodoActions from '../../src/actions/todos'
import expect from 'expect'

describe('<MainSection />', () => {
  const todos = [{
    text: 'Use Redux',
    completed: false,
    id: 0
  }],
    completedTodos = [{
      text: 'Use Redux',
      completed: true,
      id: 0
    }],
    noTodos = []
  const wrapper = shallow(<MainSection todos={todos} actions={TodoActions} />)
  const noTodosWrapper = shallow(<MainSection todos={noTodos} actions={TodoActions} />)
  const completedTodosWrapper = shallow(<MainSection todos={completedTodos} actions={TodoActions} />)

  it('renders', () => {
    expect(wrapper).toExist
    expect(wrapper.length).toBe(1)
    expect(wrapper.instance()).toBeA(MainSection)
  })

  it('renders as a <section> with .main class', () => {
    expect(wrapper.type()).toBe('section')
    expect(wrapper.hasClass('main')).toBe(true)
  })

  it('renders <input> element correctly', () => {
    expect(noTodosWrapper.find('input').length).toBe(0)
    expect(wrapper.find('input').length).toBe(1)
    expect(wrapper.find('input').type()).toEqual('input')
    expect(wrapper.find('input').hasClass('toggleAll')).toBe(true)
  })

  it('renders <input> element with correct properties', () => {
    expect(wrapper.find('input').prop('type')).toEqual('checkbox')
    expect(wrapper.find('input').prop('checked')).toEqual(false)
    expect(completedTodosWrapper.find('input').prop('checked')).toEqual(true)
  })

  it('handles onChange event on <input> element', () => {
    const onChangeActions = {
      completeAll: () => {
        return true
      }
    }
    const onChangeSpy = expect.spyOn(onChangeActions, 'completeAll')
    const onChangeSpyWrapper = shallow(<MainSection todos={todos} actions={onChangeActions} />)

    onChangeSpyWrapper.find('input').simulate('change')
    expect(onChangeSpy.calls.length).toBe(1)
    onChangeSpy.restore()
  })

  it('renders <ul> element with .normal class', () => {
    expect(wrapper.find('ul').hasClass('normal')).toBe(true)
  })
})

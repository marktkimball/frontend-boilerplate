import React from 'react'
import { shallow } from 'enzyme'
import Header from '../../src/components/Header/index'
import TodoTextInput from '../../src/components/TodoTextInput/index'
import { addTodo } from '../../src/actions/todos'
import expect from 'expect'

describe('<Header />', () => {
  const wrapper = shallow(<Header addTodo={addTodo} />)

  it('renders', () => {
    expect(wrapper).toExist
    expect(wrapper.length).toBe(1)
    expect(wrapper.instance()).toBeA(Header)
  })

  it('renders as a <header>', () => {
    expect(wrapper.type()).toBe('header')
  })

  it('contains <h1> element', () => {
    expect(wrapper.find('h1').length).toBe(1)
    expect(wrapper.find('h1').text()).toEqual('Todos')
  })

  it('renders <TodoTextInput /> child component', () => {
    const expectedProps = ['newTodo', 'onSave', 'placeholder']

    expect(wrapper.find(TodoTextInput).length).toBe(1)
    expect(Object.keys(wrapper.find(TodoTextInput).props())).toEqual(expectedProps)
  })
})

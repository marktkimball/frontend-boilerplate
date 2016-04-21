import React from 'react'
import { shallow } from 'enzyme'
import MainSection from '../../src/components/MainSection/index'
import Footer from '../../src/components/Footer/index'
import TodoItem from '../../src/components/TodoItem/index'
import * as TodoActions from '../../src/actions/todos'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../src/constants/filters'
import expect from 'expect'

describe('<MainSection />', () => {
  const todos = [{
    text: 'Use Redux',
    completed: false,
    id: 0
  },
  {
    text: 'React is awesome',
    completed: false,
    id: 1
  }],
    completedTodos = [{
      text: 'Use Redux',
      completed: true,
      id: 0
    }],
    noTodos = []
  const wrapper = shallow(<MainSection todos={todos} actions={TodoActions} filter={SHOW_ALL} />)
  const noTodosWrapper = shallow(<MainSection todos={noTodos} actions={TodoActions} filter={SHOW_ALL} />)
  const completedTodosWrapper = shallow(<MainSection todos={completedTodos} actions={TodoActions} filter={SHOW_ACTIVE} />)

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
      },
      deleteTodo: () => {
        return false
      },
      completeTodo: () => {
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
    expect(wrapper.find('ul').length).toBe(1)
    expect(wrapper.find('ul').hasClass('normal')).toBe(true)
  })

  it('renders TodoItem if todos are present and depending on filter', () => {
    expect(wrapper.find('ul').find(TodoItem).length).toBe(2)
    expect(noTodosWrapper.find('ul').find(TodoItem).length).toBe(0)
    completedTodosWrapper.setState({filter: SHOW_ACTIVE})
    expect(completedTodosWrapper.find('ul').find(TodoItem).length).toBe(0)
  })

  it('gives TodoItem component correct props', () => {
    const expectedProps = ['todo', 'addTodo', 'deleteTodo', 'editTodo', 'completeTodo', 'completeAll', 'clearCompleted']
    expect(Object.keys(wrapper.find('ul').find(TodoItem).at(0).props())).toEqual(expectedProps)
  })

  it('renders Footer component if todos exist', () => {
    expect(wrapper.find(Footer).length).toBe(1)
    expect(noTodosWrapper.find(Footer).length).toBe(0)
  })

  it('gives Footer component correct props', () => {
    const expectedProps = ['completedCount', 'activeCount', 'filter', 'onClearCompleted', 'onShow']
    expect(Object.keys(wrapper.find(Footer).at(0).props())).toEqual(expectedProps)
  })

  it('gives completedCount to Footer component', () => {
    expect(wrapper.find(Footer).prop('completedCount')).toEqual(0)
    expect(completedTodosWrapper.find(Footer).prop('completedCount')).toEqual(1)
  })
})

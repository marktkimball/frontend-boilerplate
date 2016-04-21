import React from 'react'
import { shallow } from 'enzyme'
import TodoItem from '../../src/components/TodoItem/index'
import TodoTextInput from '../../src/components/TodoTextInput/index'
import * as TodoActions from '../../src/actions/todos'
import expect from 'expect'

describe('<TodoItem />', () => {
  const todo = {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
  const completedTodo = {
    text: 'Use Redux',
    completed: true,
    id: 0
  }

  const wrapper = shallow(<TodoItem todo={todo} {...TodoActions} />)
  const completedTodoWrapper = shallow(<TodoItem todo={completedTodo} {...TodoActions} />)

  it('renders', () => {
    expect(wrapper).toExist
    expect(wrapper.length).toBe(1)
    expect(wrapper.instance()).toBeA(TodoItem)
  })

  it('renders as an <li> with .normal class if todo is not completed', () => {
    expect(wrapper.type()).toBe('li')
    expect(wrapper.hasClass('normal')).toBe(true)
  })

  it('renders as <li> with .completed class if todo is completed', () => {
    expect(completedTodoWrapper.type()).toBe('li')
    expect(completedTodoWrapper.hasClass('completed')).toBe(true)
  })

  it('sets this.state.editing to false by default', () => {
    expect(wrapper.state('editing')).toBe(false)
  })

  it('renders sub-element as a <div> when not editing todo', () => {
    expect(wrapper.childAt(0).type()).toEqual('div')
    expect(wrapper.childAt(0).hasClass('view')).toBe(true)
  })

  it('renders input checkbox when not editing todo', () => {
    expect(wrapper.childAt(0).childAt(0).type()).toEqual('input')
    expect(wrapper.find('input').hasClass('toggle')).toBe(true)
    expect(wrapper.find('input').prop('type')).toEqual('checkbox')
    expect(wrapper.find('input').prop('checked')).toEqual(false)
    expect(completedTodoWrapper.find('input').prop('checked')).toEqual(true)
  })

  it('handles onChange event in input checkbox when not editing todo', () => {
    const onChangeActions = {
      completeTodo: () => {
        return true
      }
    }
    const onChangeSpy = expect.spyOn(onChangeActions, 'completeTodo')
    const onChangeSpyWrapper = shallow(<TodoItem todo={todo} addTodo={TodoActions.addTodo} deleteTodo={TodoActions.deleteTodo} editTodo={TodoActions.editTodo} completeTodo={onChangeActions.completeTodo} completeAll={TodoActions.completeAll} clearCompleted={TodoActions.clearCompleted} />)
    onChangeSpyWrapper.find('input').simulate('change')
    expect(onChangeSpy.calls.length).toBe(1)
    onChangeSpy.restore()
  })

  it('renders <label> element for this.props.todo.text', () => {
    expect(wrapper.find('label').length).toBe(1)
    expect(wrapper.find('label').text()).toEqual(todo.text)
  })

  it('handles double click event on <label> element', () => {
    const onDoubleClickSpy = expect.spyOn(TodoItem.prototype, 'handleDoubleClick')
    const onDoubleClickWrapper = shallow(<TodoItem todo={todo} {...TodoActions} />)
    onDoubleClickWrapper.find('label').simulate('doubleClick')
    expect(onDoubleClickSpy.calls.length).toBe(1)
    onDoubleClickSpy.restore()
  })

  it('renders a <button> element when not editing todo', () => {
    expect(wrapper.find('button').length).toBe(1)
    expect(wrapper.find('button').hasClass('destroy')).toBe(true)
  })

  it('handles click event on <button> element', () => {
    const onClickActions = {
      deleteTodo: () => {
        return true
      }
    }
    const onClickSpy = expect.spyOn(onClickActions, 'deleteTodo')
    const onClickSpyWrapper = shallow(<TodoItem todo={todo} addTodo={TodoActions.addTodo} deleteTodo={onClickActions.deleteTodo} editTodo={TodoActions.editTodo} completeTodo={TodoActions.completeTodo} completeAll={TodoActions.completeAll} clearCompleted={TodoActions.clearCompleted} />)
    onClickSpyWrapper.find('button').simulate('click')
    expect(onClickSpy.calls.length).toBe(1)
  })

  it('renders sub-element as <TodoTextInput /> component when editing todo', () => {
    wrapper.setState({ editing: true })
    expect(wrapper.find(TodoTextInput).length).toBe(1)
  })

  it('gives <TodoTextInput /> component correct props', () => {
    const expectedProps = ['text', 'editing', 'onSave']
    wrapper.setState({ editing: true })
    expect(Object.keys(wrapper.find(TodoTextInput).props())).toEqual(expectedProps)
  })
})

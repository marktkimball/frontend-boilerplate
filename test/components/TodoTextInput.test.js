import React from 'react'
import { shallow } from 'enzyme'
import TodoTextInput from '../../src/components/TodoTextInput/index'
import expect from 'expect'

describe('<TodoTextInput />', () => {
  let handleSave = text => {
    return text
  }
  const text = 'Use Redux',
    newTodo = 'Here is a new todo being added!',
    placeholder = 'What needs to be done?'

  const newTodoWrapper = shallow(<TodoTextInput editing={false} onSave={handleSave} placeholder={placeholder} newTodo={true} />)
  const editingTodoWrapper = shallow(<TodoTextInput editing={true} onSave={handleSave} text={text} />)

  it('renders', () => {
    expect(newTodoWrapper).toExist
    expect(newTodoWrapper.length).toBe(1)
    expect(newTodoWrapper.instance()).toBeA(TodoTextInput)
  })

  it('renders as a text <input> element', () => {
    expect(newTodoWrapper.type()).toBe('input')
    expect(newTodoWrapper.prop('type')).toEqual('text')
  })

  it('displays with the correct class name', () => {
    expect(newTodoWrapper.hasClass('new')).toBe(true)
    expect(editingTodoWrapper.hasClass('edit')).toBe(true)
  })

  it('renders the <input> element with correct properties', () => {
    expect(newTodoWrapper.prop('autoFocus')).toEqual('true')
    expect(newTodoWrapper.prop('placeholder')).toEqual(placeholder)
    expect(newTodoWrapper.prop('value')).toEqual('')
    expect(editingTodoWrapper.prop('autoFocus')).toEqual('true')
    expect(editingTodoWrapper.prop('placeholder')).toBe(undefined)
    expect(editingTodoWrapper.prop('value')).toEqual(text)
  })

  it('has correct event functions on <input> element', () => {
    expect(newTodoWrapper.prop('onBlur')).toNotBe(undefined)
    expect(newTodoWrapper.prop('onChange')).toNotBe(undefined)
    expect(newTodoWrapper.prop('onKeyDown')).toNotBe(undefined)
  })

  it('handles onBlur event', () => {
    const onBlurSpy = expect.spyOn(TodoTextInput.prototype, 'handleBlur')
    const onBlurWrapper = shallow(<TodoTextInput editing={true} onSave={handleSave} text={text}  />)
    onBlurWrapper.simulate('blur')
    expect(onBlurSpy.calls.length).toBe(1)
    onBlurSpy.restore()
  })

  it('handles onChange event', () => {
    const onChangeSpy = expect.spyOn(TodoTextInput.prototype, 'handleChange')
    const onChangeWrapper = shallow(<TodoTextInput editing={true} onSave={handleSave} text={text}  />)
    onChangeWrapper.simulate('change')
    expect(onChangeSpy.calls.length).toBe(1)
    onChangeSpy.restore()
  })

  it('handles onKeyDown event', () => {
    const onKeyDownSpy = expect.spyOn(TodoTextInput.prototype, 'handleSubmit')
    const onKeyDownWrapper = shallow(<TodoTextInput editing={true} onSave={handleSave} text={text}  />)
    onKeyDownWrapper.simulate('keydown')
    expect(onKeyDownSpy.calls.length).toBe(1)
    onKeyDownSpy.restore()
  })
})

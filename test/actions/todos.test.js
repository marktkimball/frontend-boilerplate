
import expect from 'expect';
import * as todo from '../../src/actions/todos';

describe('todo actions', () => {
  it('add todo', () => {
    const payload = 'go get stuff done';
    expect(todo.addTodo(payload)).toEqual({ type: 'add todo', payload });
  });

  it('delete todo', () => {
    const payload = 0;
    expect(todo.deleteTodo(payload)).toEqual({ type: 'delete todo', payload });
  });

  it('edit todo', () => {
    const payload = { id: 0, text: 'go get other stuff done'};
    expect(todo.editTodo(payload)).toEqual({ type: 'edit todo', payload });
  });

  it('complete todo', () => {
    const payload = 0;
    expect(todo.completeTodo(payload)).toEqual({ type: 'complete todo', payload });
  });

  it('complete all', () => {
    let payload;
    expect(todo.completeAll()).toEqual({ type: 'complete all', payload });
  });

  it('clear complete', () => {
    let payload;
    expect(todo.clearCompleted()).toEqual({ type: 'clear complete', payload });
  });
});

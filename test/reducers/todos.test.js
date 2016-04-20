
import expect from 'expect';
import reducer from '../../src/reducers/todos';

describe('todo reducer', () => {
  it('initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual([{
        text: 'Use Redux',
        completed: false,
        id: 0
      }]);
  });

  it('add todo', () => {
    const action = { type: 'add todo', payload: 'Do some stuff' };
    expect(reducer(undefined, action)).toEqual([{
      text: 'Do some stuff',
      completed: false,
      id: 1
    },{
      text: 'Use Redux',
      completed: false,
      id: 0
    }])
  });

  it('delete todo', () => {
    const action = { type: 'delete todo', payload: 0 };
    expect(reducer(undefined, action)).toEqual([]);
  });

  it('edit todo', () => {
    const action = { type: 'edit todo', payload: { id: 1, text: 'Do some other stuff' }};
    expect(reducer([{
      text: 'Do some stuff',
      completed: false,
      id: 1
    },{
      text: 'Use Redux',
      completed: false,
      id: 0
    }], action)).toEqual([{
      completed: false,
      id: 1,
      text: 'Do some other stuff',
    },{
      completed: false,
      id: 0,
      text: 'Use Redux',
    }])
  });

  it('complete todo', () => {
    const action = { type: 'complete todo', payload: 0 };
    expect(reducer(undefined, action)).toEqual([{
      completed: true,
      id: 0,
      text: 'Use Redux',
    }]);
  });

  it('complete all - when all false', () => {
    const action = { type: 'complete all', payload: undefined };
    expect(reducer([{
      text: 'Do some other stuff',
      completed: false,
      id: 2
    },{
      text: 'Do some stuff',
      completed: false,
      id: 1
    },{
      text: 'Use Redux',
      completed: false,
      id: 0
    }], action)).toEqual([{
      text: 'Do some other stuff',
      completed: true,
      id: 2
    },{
      text: 'Do some stuff',
      completed: true,
      id: 1
    },{
      text: 'Use Redux',
      completed: true,
      id: 0
    }]);
  });

  it('complete all - when some true', () => {
    const action = { type: 'complete all', payload: undefined };
    expect(reducer([{
      text: 'Do some other stuff',
      completed: true,
      id: 2
    },{
      text: 'Do some stuff',
      completed: false,
      id: 1
    },{
      text: 'Use Redux',
      completed: false,
      id: 0
    }], action)).toEqual([{
      text: 'Do some other stuff',
      completed: true,
      id: 2
    },{
      text: 'Do some stuff',
      completed: true,
      id: 1
    },{
      text: 'Use Redux',
      completed: true,
      id: 0
    }]);
  });

  it('uncomplete all', () => {
    const action = { type: 'complete all', payload: undefined };
    expect(reducer([{
      text: 'Do some other stuff',
      completed: true,
      id: 2
    },{
      text: 'Do some stuff',
      completed: true,
      id: 1
    },{
      text: 'Use Redux',
      completed: true,
      id: 0
    }], action)).toEqual([{
      text: 'Do some other stuff',
      completed: false,
      id: 2
    },{
      text: 'Do some stuff',
      completed: false,
      id: 1
    },{
      text: 'Use Redux',
      completed: false,
      id: 0
    }]);
  });

  it('clear complete', () => {
    const action = { type: 'clear complete', payload: undefined };
    expect(reducer([{
      text: 'Do some other stuff',
      completed: false,
      id: 2
    },{
      text: 'Do some stuff',
      completed: true,
      id: 1
    },{
      text: 'Use Redux',
      completed: true,
      id: 0
    }], action)).toEqual([{
      text: 'Do some other stuff',
      completed: false,
      id: 2
    }]);
  });
});

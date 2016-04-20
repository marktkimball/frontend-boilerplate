
import expect, { spyOn } from 'expect';
import logger from '../../src/middleware/logger';


const createFakeStore = fakeData => ({
  getState() {
    return fakeData
  }
});

const dispatchWithStoreOf = (storeData, action) => {
  let dispatched = null
  const dispatch = logger(createFakeStore(storeData))(actionAttempt => dispatched = actionAttempt);
  dispatch(action);
  return dispatched;
}

describe('middleware', () => {
  it('should log the action', () => {
    const spy = spyOn(console, 'log');
    const action = { type: 'add todos', payload: 'do something' };
    dispatchWithStoreOf({}, action);
    expect(spy).toHaveBeenCalledWith(action);
    spy.restore();
  });

});

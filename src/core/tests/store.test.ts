import { createStore, NaNValidator } from '@core';

describe('store test', () => {
  const INIT_STATE = 'INIT_STATE';
  const NEXT_STATE = 'NEXT_STATE';

  const REDUCER = jest.fn(x => x.value);
  const ACTION = jest.fn();
  ACTION.mockReturnValue({
    name: 'action_name',
    value: NEXT_STATE,
  });

  test('reducer should be called once for every dispatch call', () => {
    const store = createStore(INIT_STATE, REDUCER);
    store.dispatch(ACTION());

    expect(REDUCER.mock.calls.length).toEqual(1);

    store.dispatch(ACTION());
    store.dispatch(ACTION());

    expect(REDUCER.mock.calls.length).toEqual(3);
  });

  test('getStore() return new state after dispatch has been called', () => {
    const store = createStore(INIT_STATE, REDUCER);
    expect(store.getState()).toEqual(INIT_STATE);

    store.dispatch(ACTION());
    expect(store.getState()).toEqual(NEXT_STATE);
  });

  test('all listeners should be called every time dispatch was called', () => {
    const store = createStore(INIT_STATE, REDUCER);
    const LISTENER = jest.fn(x => x);

    store.subscribe(LISTENER);
    expect(LISTENER.mock.calls.length).toEqual(0);

    store.dispatch(ACTION());
    expect(LISTENER.mock.calls.length).toEqual(1);
  });

  describe('test store validators', () => {
    test('NaNValidator catch all action with {value: NaN}', () => {
      const ACTION_NAN_VALUE = {
        name: 'ACTION_NAME',
        value: NaN,
      };
      const LISTENER = jest.fn(x => x);

      const store = createStore(INIT_STATE, REDUCER, [NaNValidator]);

      store.subscribe(LISTENER);

      store.dispatch(ACTION_NAN_VALUE);
      expect(LISTENER.mock.calls[0][0].from).toEqual(ACTION_NAN_VALUE.name);
    });
  });
});

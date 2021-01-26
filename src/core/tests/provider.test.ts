import { View, Provider, Store, createStore } from '@core';

describe('test provider', () => {
  let STORE: Store<string>;
  beforeEach(() => {
    STORE = createStore<string>('', action => action.value);
  });

  test('call render every time store updated', () => {
    const renderHandler = jest.fn();
    const initHandler = jest.fn();

    class SomeProvider extends Provider<string, unknown> {
      init() {
        initHandler();
      }
      render() {
        renderHandler();
      }
    }

    new SomeProvider(STORE);

    expect(renderHandler.mock.calls.length).toEqual(0);
    expect(initHandler.mock.calls.length).toEqual(1);

    STORE.dispatch({
      name: 'type',
      value: '',
    });

    expect(renderHandler.mock.calls.length).toEqual(1);
    expect(initHandler.mock.calls.length).toEqual(1);
  });

  test('init root View if it was not provided explicitly', () => {
    class SomeProvider extends Provider<string, unknown> {
      init() {}
      render() {}
    }
    const provider = new SomeProvider(STORE);

    expect(provider.root).toBeInstanceOf(View);
    expect(provider.root.nativeElement).toBeInstanceOf(HTMLDivElement);
  });
});

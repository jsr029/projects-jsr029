import store from './store';

describe('Redux Store', () => {
  test('store should be initialized', () => {
    expect(store).toBeDefined();
  });

  test('store should have a dispatch method', () => {
    expect(typeof store.dispatch).toBe('function');
  });

  test('store should have a getState method', () => {
    expect(typeof store.getState).toBe('function');
  });
});
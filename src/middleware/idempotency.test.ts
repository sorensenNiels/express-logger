import { assert } from 'chai';
import { ERROR_MSG_NOT_INITIALIZED, getSharedIdempotencyService, idempotency } from './idempotency';

describe('Idempotency middleware', () => {
  it('returns an error if not initialized', () => {
    try {
      getSharedIdempotencyService();
      assert.fail('Expecting error to be thrown because the middleware has not been called.');
    } catch (err: any) {
      assert.equal(err.message, ERROR_MSG_NOT_INITIALIZED);
      assert.ok(err);
    }
  });

  it('returns valid function and instantiate idempotency service', () => {
    const middleware = idempotency();
    assert.isFunction(middleware);
    const service = getSharedIdempotencyService();
    assert.ok(service);
  });
});

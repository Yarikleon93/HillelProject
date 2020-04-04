import {
  createResolved,
  createRejected,
  createResolvedOrRejected,
  delay
} from './s22e01-create.js';

describe('Creating promises', () => {
  describe('createResolved', () => {
    it('should return a promise which resolves with provided value', () => {
      const value = Symbol('value');
      return expect(createResolved(value)).resolves.toBe(value);
    });
  });
  describe('createRejected', () => {
    it('should return a promise which is rejected with provided error', () => {
      const error = Symbol('error');
      return expect(createRejected(error)).rejects.toBe(error);
    });
  });
  describe('createResolvedOrRejected', () => {
    it('should return a promise which is resolved when "true" is provided as a parameter', () => {
      return expect(createResolvedOrRejected(true)).resolves.not.toThrow();
    });
    it('should return a promise which is rejected when "false" is provided as a parameter', () => {
      return expect(createResolvedOrRejected(false)).rejects.toBeUndefined();
    });
  });

  describe('delay', () => {
    beforeEach(() => jest.useFakeTimers());
    afterEach(() => jest.useRealTimers());

    it('should return a promise', () => {
      expect(delay(100)).toEqual(expect.any(Promise));
    });

    it('delay(100) should be resolved between 80ms and 120ms', async () => {
      const spy = jest.fn();
      delay(100).then(spy);  // <= resolve after 100ms

      jest.advanceTimersByTime(80);  // <= advance less than 100ms
      await Promise.resolve();  // let any pending callbacks in PromiseJobs run
      expect(spy).not.toHaveBeenCalled();

      jest.advanceTimersByTime(40);  // <= advance the rest of the time
      await Promise.resolve();  // let any pending callbacks in PromiseJobs run
      expect(spy).toHaveBeenCalled();
    });

  });

});
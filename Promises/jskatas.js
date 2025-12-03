function callPromiseAsFunction() { 
  Promise();
}
assert.throws(callPromiseAsFunction);

function promiseWithoutParams() {
  new promise(() => {});
}
assert.throws(promiseWithoutParams);


const notAFunction = () => {};
assert.throws(() => { new promise(notAFunction); });

const promise = new Promise((resolve) => resolve());
assert.equal(await promise, undefined);

const promise = new Promise((resolve, reject) => reject());
await assert.rejects(promise);

const promise = Promise.resolve();
assert.doesNotReject(promise);
assert.deepEqual(await promise, void 0);

const promise = Promise.resolve('quick resolve');
assert.doesNotReject(promise);
assert.equal(await promise, 'quick resolve');

const promise = Promise.reject();
await assert.rejects(promise);

const promise = Promise.reject(Error('quick reject'));
await assert.rejects(promise, Error('quick reject'));

class MyPromise extends Promise {}

const promise = new MyPromise(resolve => resolve());
assert.equal(await promise, undefined);

class ResolvingPromise extends Promise {
  constructor(...args) {
      super(...args);
  }
}

assert.equal(await new ResolvingPromise(resolve => resolve()), undefined);

const promise = Promise.all([
  new Promise(resolve => resolve(1)),new Promise(resolve => resolve(2)),new Promise(resolve => resolve(3))
]);
await assert.doesNotReject(promise);
assert.deepEqual(await promise, [1, 2,3]);


const promise = Promise.all([
  Promise.resolve(),
  Promise.reject(),
  
]);
await assert.rejects(promise);


const lateRejectedPromise = new Promise((resolve, reject) => setTimeout(reject, 100));
const earlyResolvingPromise = new Promise(resolve => resolve('1st :)'));
const promise = Promise.race([earlyResolvingPromise]);
assert.doesNotReject(promise);
assert.deepEqual(await promise, '1st :)');
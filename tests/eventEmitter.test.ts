import assert from 'assert';
import { eventEmitter, EventEmitterHandler } from '../src';

describe('eventEmitter', () => {
  it('emit payload and handler receive the payload', () => {
    // tsdxのLintではなぜか下記のコードではエラーが出るので、
    // any型をやむを得ず使用する。
    // const caller: [number, string][] = [];
    const caller: any[] = [];
    const event = eventEmitter<string>();
    event.on(value => caller.push([1, value]));
    event.on(value => caller.push([2, value]));
    const payload = 'payload value';
    event.emit(payload);
    assert.deepStrictEqual(caller, [
      [1, payload],
      [2, payload],
    ]);
  });
  it('unregister handler', () => {
    // tsdxのLintではなぜか下記のコードではエラーが出るので、
    // any型をやむを得ず使用する。
    // const caller: [number, string][] = [];
    const caller: any[] = [];
    const event = eventEmitter<string>();
    const handler: EventEmitterHandler<string> = value =>
      caller.push([1, value]);
    event.on(handler);
    event.emit('payload 1');
    assert.deepStrictEqual(caller, [[1, 'payload 1']]);
    event.off(handler);
    event.emit('payload 2');
    assert.deepStrictEqual(caller, [[1, 'payload 1']]);
  });
  it('unregister all handler', () => {
    // tsdxのLintではなぜか下記のコードではエラーが出るので、
    // any型をやむを得ず使用する。
    // const caller: [number, string][] = [];
    const caller: any[] = [];
    const event = eventEmitter<string>();
    const handler1: EventEmitterHandler<string> = value =>
      caller.push([1, value]);
    const handler2: EventEmitterHandler<string> = value =>
      caller.push([2, value]);
    event.on(handler1);
    event.on(handler2);
    event.emit('payload');
    assert.deepStrictEqual(caller, [
      [1, 'payload'],
      [2, 'payload'],
    ]);
    event.offAll();
    event.emit('payload 2');
    assert.deepStrictEqual(caller, [
      [1, 'payload'],
      [2, 'payload'],
    ]);
  });
});

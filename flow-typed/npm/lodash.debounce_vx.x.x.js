// flow-typed signature: c47bb1081e861a8ff23818dbd290be10
// flow-typed version: module/lodash.debounce_v4.0.8/flow_v0.141.0


declare module 'lodash.debounce' {
  declare type DebounceOptions = {
    // Specify invoking on the leading edge of the timeout.
    leading?: boolean,
    // The maximum time func is allowed to be delayed before it's invoked.
    maxWait?: number,
    // Specify invoking on the trailing edge of the timeout.
    trailing?: boolean,
    ...
  };

  declare type Cancelable = {
    cancel: () => void,
    flush: () => mixed,
    ...
  };

  declare function debounce<F: (...any[]) => any>(
    // The function to debounce.
    func: F,
    // The number of milliseconds to delay.
    wait?: number,
    options?: DebounceOptions
  ): F & Cancelable;

  declare module.exports: typeof debounce;
}

// flow-typed signature: d49794b4e0974eb92d7d6de51a885791
// flow-typed version: npm/debug_v4.x.x/flow_v0.122.0

declare module 'debug' {
  declare var debug: debug$Debug & {
    debug: debug$Debug,
    default: debug$Debug
  };

  declare interface debug$Debug {
    (namespace: string): debug$Debugger;
    coerce: (val: any) => any;
    disable: () => string;
    enable: (namespaces: string) => void;
    enabled: (namespaces: string) => boolean;
    log: (...args: any[]) => any;
    names: RegExp[];
    skips: RegExp[];
    formatters: debug$Formatters;
  }

  declare type debug$IDebug = debug$Debug;

  declare interface debug$Formatters {
    [formatter: string]: (v: any) => string;
  }

  declare type debug$IDebugger = debug$Debugger;

  declare interface debug$Debugger {
    (formatter: any, ...args: any[]): void;
    enabled: boolean;
    log: (...args: any[]) => any;
    namespace: string;
    destroy: () => boolean;
    extend: (namespace: string, delimiter?: string) => debug$Debugger;
  }

  declare module.exports: typeof debug;
}

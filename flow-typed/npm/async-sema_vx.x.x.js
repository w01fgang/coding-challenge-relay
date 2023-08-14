// flow-typed signature: 5ef8f95886e8a611dbbe1e6916574c2a
// flow-typed version: flow-typed/async-sema_v3.1.1/flow_v0.142.0


declare module 'async-sema' {
  declare export class Sema {
    constructor(
      nr: number,
      x?: {
        initFn?: () => any,
        pauseFn?: () => void,
        resumeFn?: () => void,
        capacity?: number,
      ...
      }
    ): this;
    tryAcquire(): any | void;
    acquire(): Promise < any >;
    release(token ?: any): void;
    drain(): Promise < any[] >;
    nrWaiting(): number;
  }
  declare export function RateLimit(
    rps: number,
    x?: {
      timeUnit?: number,
      uniformDistribution?: boolean,
      ...
    }
  ): () => Promise<void>;
}

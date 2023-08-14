// flow-typed signature: f53e4d9480cc9aef7fe5876187f2e967
// flow-typed version: <<STUB>>/request_v2.88.2/flow_v0.142.0

declare module 'request' {
  import type { Stream, Readable } from 'stream';
  import type { http$Agent, http$AgentOptions } from 'http';
  import type { Agent, AgentOptions } from 'https';
  import type { Socket } from 'net';
  import type { Url } from 'url';

  declare interface request$RequestAPI<
    TRequest: request$Request,
    TOptions: request$CoreOptions,
    TUriUrlOptions
    > {
    defaults(
      options: TOptions
    ): request$RequestAPI<TRequest, TOptions, request$RequiredUriUrl>;
    defaults(
      options: request$RequiredUriUrl & TOptions
    ): request$DefaultUriUrlRequestApi<
      TRequest,
      TOptions,
      request$OptionalUriUrl>;
    (
      uri: string,
      options?: TOptions,
      callback?: request$RequestCallback
    ): TRequest;
    (uri: string, callback?: request$RequestCallback): TRequest;
    (
      options: TUriUrlOptions & TOptions,
      callback?: request$RequestCallback
    ): TRequest;
    get(
      uri: string,
      options?: TOptions,
      callback?: request$RequestCallback
    ): TRequest;
    get(uri: string, callback?: request$RequestCallback): TRequest;
    get(
      options: TUriUrlOptions & TOptions,
      callback?: request$RequestCallback
    ): TRequest;
    post(
      uri: string,
      options?: TOptions,
      callback?: request$RequestCallback
    ): TRequest;
    post(uri: string, callback?: request$RequestCallback): TRequest;
    post(
      options: TUriUrlOptions & TOptions,
      callback?: request$RequestCallback
    ): TRequest;
    put(
      uri: string,
      options?: TOptions,
      callback?: request$RequestCallback
    ): TRequest;
    put(uri: string, callback?: request$RequestCallback): TRequest;
    put(
      options: TUriUrlOptions & TOptions,
      callback?: request$RequestCallback
    ): TRequest;
    head(
      uri: string,
      options?: TOptions,
      callback?: request$RequestCallback
    ): TRequest;
    head(uri: string, callback?: request$RequestCallback): TRequest;
    head(
      options: TUriUrlOptions & TOptions,
      callback?: request$RequestCallback
    ): TRequest;
    patch(
      uri: string,
      options?: TOptions,
      callback?: request$RequestCallback
    ): TRequest;
    patch(uri: string, callback?: request$RequestCallback): TRequest;
    patch(
      options: TUriUrlOptions & TOptions,
      callback?: request$RequestCallback
    ): TRequest;
    del(
      uri: string,
      options?: TOptions,
      callback?: request$RequestCallback
    ): TRequest;
    del(uri: string, callback?: request$RequestCallback): TRequest;
    del(
      options: TUriUrlOptions & TOptions,
      callback?: request$RequestCallback
    ): TRequest;
    delete(
      uri: string,
      options?: TOptions,
      callback?: request$RequestCallback
    ): TRequest;
    delete(uri: string, callback?: request$RequestCallback): TRequest;
    delete(
      options: TUriUrlOptions & TOptions,
      callback?: request$RequestCallback
    ): TRequest;
    initParams(
      uri: string,
      options?: TOptions,
      callback?: request$RequestCallback
    ): request$RequiredUriUrl & TOptions;
    initParams(
      uriOrOpts: string | (request$RequiredUriUrl & TOptions),
      callback?: request$RequestCallback
    ): request$RequiredUriUrl & TOptions;
    forever(agentOptions: any, optionsArg: any): TRequest;
    jar(store?: any): request$CookieJar;
    cookie(str: string): request$Cookie | void;
    debug: boolean;
  }

  declare type request$DefaultUriUrlRequestApi<
    TRequest: request$Request,
    TOptions: request$CoreOptions,
    TUriUrlOptions
    > = {
      defaults(
        options: TOptions
      ): request$DefaultUriUrlRequestApi<
        TRequest,
        TOptions,
        request$OptionalUriUrl>,
      (callback?: request$RequestCallback): TRequest,
      get(
        uri: string,
        options?: TOptions,
        callback?: request$RequestCallback
      ): TRequest,
      get(uri: string, callback?: request$RequestCallback): TRequest,
      get(
        options: TUriUrlOptions & TOptions,
        callback?: request$RequestCallback
      ): TRequest,
      get(callback?: request$RequestCallback): TRequest,
      post(
        uri: string,
        options?: TOptions,
        callback?: request$RequestCallback
      ): TRequest,
      post(uri: string, callback?: request$RequestCallback): TRequest,
      post(
        options: TUriUrlOptions & TOptions,
        callback?: request$RequestCallback
      ): TRequest,
      post(callback?: request$RequestCallback): TRequest,
      put(
        uri: string,
        options?: TOptions,
        callback?: request$RequestCallback
      ): TRequest,
      put(uri: string, callback?: request$RequestCallback): TRequest,
      put(
        options: TUriUrlOptions & TOptions,
        callback?: request$RequestCallback
      ): TRequest,
      put(callback?: request$RequestCallback): TRequest,
      head(
        uri: string,
        options?: TOptions,
        callback?: request$RequestCallback
      ): TRequest,
      head(uri: string, callback?: request$RequestCallback): TRequest,
      head(
        options: TUriUrlOptions & TOptions,
        callback?: request$RequestCallback
      ): TRequest,
      head(callback?: request$RequestCallback): TRequest,
      patch(
        uri: string,
        options?: TOptions,
        callback?: request$RequestCallback
      ): TRequest,
      patch(uri: string, callback?: request$RequestCallback): TRequest,
      patch(
        options: TUriUrlOptions & TOptions,
        callback?: request$RequestCallback
      ): TRequest,
      patch(callback?: request$RequestCallback): TRequest,
      del(
        uri: string,
        options?: TOptions,
        callback?: request$RequestCallback
      ): TRequest,
      del(uri: string, callback?: request$RequestCallback): TRequest,
      del(
        options: TUriUrlOptions & TOptions,
        callback?: request$RequestCallback
      ): TRequest,
      del(callback?: request$RequestCallback): TRequest,
      delete(
        uri: string,
        options?: TOptions,
        callback?: request$RequestCallback
      ): TRequest,
      delete(uri: string, callback?: request$RequestCallback): TRequest,
      delete(
        options: TUriUrlOptions & TOptions,
        callback?: request$RequestCallback
      ): TRequest,
      delete(callback?: request$RequestCallback): TRequest,
  ...
    } & request$RequestAPI<TRequest, TOptions, TUriUrlOptions>;

  declare interface request$CoreOptions {
    baseUrl?: string | void;
    callback?: request$RequestCallback | void;
    jar?: request$CookieJar | boolean | void;
    formData?: {
      [key: string]: any,
    ...
    } | void;
    form?: | {
      [key: string]: any,
        ...
    }
    | string
    | void;
    auth?: request$AuthOptions | void;
    oauth?: request$OAuthOptions | void;
    aws?: request$AWSOptions | void;
    hawk?: request$HawkOptions | void;
    qs?: any;
    qsStringifyOptions?: any;
    qsParseOptions?: any;
    json?: any;
    jsonReviver?: ((key: string, value: any) => any) | void;
    jsonReplacer?: ((key: string, value: any) => any) | void;
    multipart?: request$RequestPart[] | request$Multipart | void;
    agent?: http$Agent | Agent | void;
    agentOptions?: http$AgentOptions | AgentOptions | void;
    agentClass?: any;
    forever?: any;
    host?: string | void;
    port?: number | void;
    method?: string | void;
    headers?: request$Headers | void;
    body?: any;
    family?: 4 | 6 | void;
    followRedirect?: | boolean
    | ((response: http$IncomingMessage) => boolean)
    | void;
    followAllRedirects?: boolean | void;
    followOriginalHttpMethod?: boolean | void;
    maxRedirects?: number | void;
    removeRefererHeader?: boolean | void;
    encoding?: string | null | void;
    pool?: request$PoolOptions | void;
    timeout?: number | void;
    localAddress?: string | void;
    proxy?: any;
    tunnel?: boolean | void;
    strictSSL?: boolean | void;
    rejectUnauthorized?: boolean | void;
    time?: boolean | void;
    gzip?: boolean | void;
    preambleCRLF?: boolean | void;
    postambleCRLF?: boolean | void;
    withCredentials?: boolean | void;
    key?: Buffer | void;
    cert?: Buffer | void;
    passphrase?: string | void;
    ca?: string | Buffer | string[] | Buffer[] | void;
    har?: request$HttpArchiveRequest | void;
    useQuerystring?: boolean | void;
  }

  declare interface request$UriOptions {
    uri: string | Url;
  }

  declare interface request$UrlOptions {
    url: string | Url;
  }

  declare type request$RequiredUriUrl = request$UriOptions | request$UrlOptions;

  declare type request$OptionalUriUrl = request$RequiredUriUrl | { ... };

  declare type request$OptionsWithUri = request$UriOptions & request$CoreOptions;

  declare type request$OptionsWithUrl = request$UrlOptions & request$CoreOptions;

  declare type request$Options = request$OptionsWithUri | request$OptionsWithUrl;

  declare type request$MultipartBody = string | Buffer | ArrayBuffer | Uint8Array;

  declare type request$RequestCallback = (
    error: any,
    response: request$Response,
    body: any
  ) => void;

  declare interface request$HttpArchiveRequest {
    url?: string | void;
    method?: string | void;
    headers?: request$NameValuePair[] | void;
    postData?: {
      mimeType?: string | void,
      params?: request$NameValuePair[] | void,
    ...
    } | void;
  }

  declare interface request$ExtraPoolOptions {
    maxSockets?: number | void;
  }

  declare type request$PoolOptions =
    | false
    | ({
      [key: string]: http$Agent | Agent,
      ...
    } & request$ExtraPoolOptions)
    | request$ExtraPoolOptions;

  declare interface request$NameValuePair {
    name: string;
    value: string;
  }

  declare interface request$Multipart {
    chunked?: boolean | void;
    data?: Array<{
      "content-type"?: string | void,
      body: request$MultipartBody,
      ...
    }> | void;
  }

  declare interface request$RequestPart {
    headers?: request$Headers | void;
    body: any;
  }

  declare type request$Request = {
    readable: boolean,
    writable: boolean,
    explicitMethod?: true | void,
    debug(...args: any[]): void,
    pipeDest(dest: any): void,
    qs(q: { [key: string]: any }, clobber?: boolean): request$Request,
    form(): $FlowFixMe,
    form(form: any): request$Request,
    multipart(multipart: request$RequestPart[]): request$Request,
    json(val: any): request$Request,
    aws(opts: request$AWSOptions, now?: boolean): request$Request,
    hawk(opts: request$HawkOptions): void,
    auth(
      username: string,
      password: string,
      sendImmediately?: boolean,
      bearer?: string
    ): request$Request,
    oauth(oauth: request$OAuthOptions): request$Request,
    jar(jar: request$CookieJar): request$Request,
    on(event: string, listener: (...args: any[]) => void): request$Request,
    on(event: "request", listener: (req: http$ClientRequest) => void): request$Request,
    on(event: "response", listener: (resp: request$Response) => void): request$Request,
    on(event: "data", listener: (data: Buffer | string) => void): request$Request,
    on(event: "error", listener: (e: Error) => void): request$Request,
    on(
      event: "complete",
      listener: (resp: request$Response, body?: string | Buffer) => void
    ): request$Request,
    on(event: "pipe", listener: (src: Readable) => void): request$Request,
    on(event: "socket", listener: (src: Socket) => void): request$Request,
    write(buffer: Buffer | string, cb?: (err?: Error) => void): boolean,
    write(str: string, encoding?: string, cb?: (err?: Error) => void): boolean,
    end(cb?: () => void): void,
    end(chunk: string | Buffer, cb?: () => void): void,
    end(str: string, encoding?: string, cb?: () => void): void,
    pause(): void,
    resume(): void,
    abort(): void,
    destroy(): void,
    toJSON(): request$RequestAsJSON,
    host?: string | void,
    port?: number | void,
    followAllRedirects?: boolean | void,
    followOriginalHttpMethod?: boolean | void,
    maxRedirects?: number | void,
    removeRefererHeader?: boolean | void,
    encoding?: string | null | void,
    timeout?: number | void,
    localAddress?: string | void,
    strictSSL?: boolean | void,
    rejectUnauthorized?: boolean | void,
    time?: boolean | void,
    gzip?: boolean | void,
    preambleCRLF?: boolean | void,
    postambleCRLF?: boolean | void,
    withCredentials?: boolean | void,
    key?: Buffer | void,
    cert?: Buffer | void,
    passphrase?: string | void,
    ca?: string | Buffer | string[] | Buffer[] | void,
    har?: request$HttpArchiveRequest | void,
    headers: request$Headers,
    method: string,
    pool: request$PoolOptions,
    dests: Readable[],
    callback?: request$RequestCallback | void,
    uri: Url & {
      href: string,
      pathname: string,
      ...
    },
    proxy: null | string | Url,
    tunnel: boolean,
    setHost: boolean,
    path: string,
    agent: false | http$Agent | Agent,
    body: Buffer | Buffer[] | string | string[] | Readable,
    timing?: boolean | void,
    src?: Readable | void,
    href: string,
    startTime?: number | void,
    startTimeNow?: number | void,
    timings?: {
      socket: number,
      lookup: number,
      connect: number,
      response: number,
      end: number,
      ...
    } | void,
    elapsedTime?: number | void,
    response?: request$Response | void,
    ...
  } & Stream;

  declare type request$Response = {
    statusCode: number,
    statusMessage: string,
    request: request$Request,
    body: any,
    caseless: $FlowFixMe,
    toJSON(): request$ResponseAsJSON,
    timingStart?: number | void,
    elapsedTime?: number | void,
    timings?: {
      socket: number,
      lookup: number,
      connect: number,
      response: number,
      end: number,
      ...
    } | void,
    timingPhases?: {
      wait: number,
      dns: number,
      tcp: number,
      firstByte: number,
      download: number,
      total: number,
      ...
    } | void,
    ...
  } & http$IncomingMessage;

  declare type request$ResponseRequest = request$Request;

  declare type request$RequestResponse = request$Response;

  declare interface request$Headers {
    [key: string]: any;
  }

  declare interface request$AuthOptions {
    user?: string | void;
    username?: string | void;
    pass?: string | void;
    password?: string | void;
    sendImmediately?: boolean | void;
    bearer?: string | (() => string) | void;
  }

  declare interface request$OAuthOptions {
    callback?: string | void;
    consumer_key?: string | void;
    consumer_secret?: string | void;
    token?: string | void;
    token_secret?: string | void;
    transport_method?: "body" | "header" | "query" | void;
    verifier?: string | void;
    body_hash?: true | string | void;
  }

  declare interface request$HawkOptions {
    credentials: any;
  }

  declare interface request$AWSOptions {
    secret: string;
    bucket?: string | void;
  }

  declare interface request$RequestAsJSON {
    uri: Url;
    method: string;
    headers: request$Headers;
  }

  declare interface request$ResponseAsJSON {
    statusCode: number;
    body: any;
    headers: request$Headers;
    request: request$RequestAsJSON;
  }

  declare type request$Cookie = $FlowFixMe;

  declare interface request$CookieJar {
    setCookie(
      cookieOrStr: request$Cookie | string,
      uri: string | Url,
      options?: $FlowFixMe
    ): void;
    getCookieString(uri: string | Url): string;
    getCookies(uri: string | Url): request$Cookie[];
  }
  declare var request: request$RequestAPI<
    request$Request,
    request$CoreOptions,
    request$RequiredUriUrl
  >;
  declare module.exports: typeof request;
}

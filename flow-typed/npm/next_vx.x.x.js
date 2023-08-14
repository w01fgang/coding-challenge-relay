
import { UrlObject, URLFormatOptions } from 'url';
import { ServerResponse, IncomingMessage } from 'http';
declare type ParsedUrlQuery = { [key: string]: any };

declare module "next" {
  declare type NextApp = {
    prepare(): Promise<void>;
    getRequestHandler(): any;
    render(req: any, res: any, pathname: string, query: any): any;
    renderToHTML(req: any, res: any, pathname: string, query: string): string;
    renderError(err: Error, req: any, res: any, pathname: any, query: any): any;
    renderErrorToHTML(err: Error, req: any, res: any, pathname: string, query: any): string;
  };
  declare module.exports: (...opts: any) => NextApp
}

declare module "next/head" {
  declare module.exports: Class<React$Component<any, any>>;
}

declare module "next/app" {
  import type { AppInitialProps, AppContextType, AppPropsType } from "next/next-server/lib/utils";
  import type { Router } from "next/router";

  declare export type AppContext = AppContextType<Router>;

  declare export type AppProps<P = { ... }> = AppPropsType<Router, P>;

  declare export function Container(p: any): any;

  declare export function createUrl(
    router: Router
  ): {
    +query: ParsedUrlQuery,
    +pathname: string,
    +asPath: string,
    back: () => void,
    push: (url: string, as?: string | void) => Promise<boolean>,
    pushTo: (href: string, as?: string | void) => Promise<boolean>,
    replace: (url: string, as?: string | void) => Promise<boolean>,
    replaceTo: (href: string, as?: string | void) => Promise<boolean>,
    ...
  };
  declare export type NextWebVitalsMetric = {|
    id: string;
    startTime: number;
    value: number;
  |} & ({|
    label: 'web-vital';
    name: 'FCP' | 'LCP' | 'CLS' | 'FID' | 'TTFB';
  |} | {|
    label: 'custom';
    name: 'Next.js-hydration' | 'Next.js-route-change-to-render' | 'Next.js-render';
  |});

  declare export default class App<P = { ... }, CP = { ... }, S = { ... }>
    mixins React$Component<P & AppProps<CP>, S> {
    static origGetInitialProps(x: AppContext): Promise<AppInitialProps>;
    static getInitialProps(x: AppContext): Promise<AppInitialProps>;
    componentDidCatch(error: Error, _errorInfo: ErrorInfo): void;
    render(): React$Node;
  }
}

declare module "next/dynamic" {
  declare module.exports: (dynamicOptions: any, options: any) => React$ComponentType<any>;
}

declare module "next/router" {
  declare type Handler = (...evts: any[]) => void;

  declare export type MittEmitter = {
    on(type: string, handler: Handler): void;
    off(type: string, handler: Handler): void;
    emit(type: string, ...evts: any[]): void;
  };

  declare export type AppInitialProps = {
    pageProps: any;
  };

  declare export type AppTreeType = React$ComponentType<AppInitialProps & {
    [name: string]: any;
  }>;

  declare export interface NextPageContext {
    /**
     * Error object if encountered during rendering
     */
    err?: Error & {
        statusCode?: number;
    } | null;
    /**
     * `HTTP` request object.
     */
    req?: IncomingMessage;
    /**
     * `HTTP` response object.
     */
    res?: ServerResponse;
    /**
     * Path section of `URL`.
     */
    pathname: string;
    /**
     * Query string section of `URL` parsed as an object.
     */
    query: ParsedUrlQuery;
    /**
     * `String` of the actual path including query.
     */
    asPath?: string;
    /**
     * `Component` the tree of the App to use if needing to render separately
     */
    AppTree: AppTreeType;
  }

  declare type Url = UrlObject | string;

  declare export type BaseRouter = {
    route: string,
    pathname: string,
    query: ParsedUrlQuery,
    asPath: string,
    ...
  };

  declare export type NextRouter = BaseRouter & {
    push(url: Url, as?: Url, options?: { ... }): Promise<boolean>,
    replace(url: Url, as?: Url, options?: { ... }): Promise<boolean>,
    reload(): void,
    back(): void,
    beforePopState(cb: BeforePopStateCallback): void,
    prefetch(url: string): Promise<void>,
    events: MittEmitter,
  }

  declare type RouteInfo = {
    Component: React$ComponentType,
    props?: any,
    err?: Error,
    error?: any,
    ...
  };

  declare type Subscription = (data: RouteInfo, App?: React$ComponentType) => void;

  declare type BeforePopStateCallback = (state: any) => boolean;

  declare type ComponentLoadCancel = (() => void) | null;

  declare export function useRouter(): NextRouter;

  declare export function withRouter<P: {...}, Component: React$ComponentType<P>>(
    WrappedComponent: Component,
  ): React$ComponentType<
    $Diff<React$ElementConfig<Component>, { router: NextRouter, ... }>
  >;

  declare export default class Router {
    route: string;
    pathname: string;
    query: ParsedUrlQuery;
    asPath: string;
    components: {
      [pathname: string]: RouteInfo,
      ...
    };
    sub: Subscription;
    clc: ComponentLoadCancel;
    pageLoader: any;
    _bps: BeforePopStateCallback | void;
    events: MittEmitter;
    _wrapApp: (App: React$ComponentType) => any;
    historyId: number;
    static events: MittEmitter;
    constructor(
      pathname: string,
      query: ParsedUrlQuery,
      as: string,
      x: {
        subscription: Subscription,
        initialProps: any,
        pageLoader: any,
        Component: React$ComponentType,
        App: React$ComponentType,
        wrapApp: (App: React$ComponentType) => any,
        err?: Error,
        ...
      }
    ): this;
    static _rewriteUrlForNextExport(url: string): string;
    onPopState: (e: PopStateEvent) => void;
    static update(route: string, mod: any): void;
    static reload(): void;
    static back(): void;
    static push(url: Url, as?: Url, options?: { ... }): Promise<boolean>;
    static replace(url: Url, as?: Url, options?: { ... }): Promise<boolean>;
    static change(method: string, _url: Url, _as: Url, options: any): Promise<boolean>;
    static changeState(method: string, url: string, as: string, options?: { ... }): void;
    static getRouteInfo(
      route: string,
      pathname: string,
      query: any,
      as: string,
      shallow?: boolean
    ): Promise<RouteInfo>;
    static set(
      route: string,
      pathname: string,
      query: any,
      as: string,
      data: RouteInfo
    ): void;
    static beforePopState(cb: BeforePopStateCallback): void;
    static onlyAHashChange(as: string): boolean;
    static scrollToHash(as: string): void;
    static urlIsNew(asPath: string): boolean;
    static prefetch(url: string): Promise<void>;
    static fetchComponent(route: string): Promise<ComponentType>;
    static getInitialProps(Component: React$ComponentType, ctx: NextPageContext): Promise<any>;
    static abortComponentLoad(as: string): void;
    static notify(data: RouteInfo): void;
  }
}

declare module "next/link" {
  declare module.exports: Class<React$Component<{href: string, prefetch?: bool}, any>>;
}

declare module "next/error" {
  declare export type ErrorProps = {
    statusCode: number,
    title?: string,
  ...
  };
  declare export default class Error<P = { ... }> mixins React.Component < P & ErrorProps > {
    static displayName: string;
    static getInitialProps: typeof _getInitialProps;
    static origGetInitialProps: typeof _getInitialProps;
    render(): React$Node;
  }
}

declare module "next/config" {
  declare module.exports: () => { serverRuntimeConfig: { [key: string]: string }, publicRuntimeConfig: { [key: string]: string } };
}

declare module "next/next-server/lib/utils" {

  /**
   * Types used by both next and next-server
   */
  declare export type NextComponentType<
    C: BaseContext = NextPageContext,
    IP = { ... },
    P = { ... }
  > = React$ComponentType<P> & {
    /**
     * Used for initial page load data population. Data returned from `getInitialProps` is serialized when server rendered.
     * Make sure to return plain `Object` without using `Date`, `Map`, `Set`.
     * @param ctx Context of `page`
     */
    getInitialProps?: (context: C) => IP | Promise<IP>,
    ...
  };
  declare export type Photo = NextComponentType<
    DocumentContext,
    DocumentInitialProps,
    DocumentProps
  > & {
    renderDocument(
      Document: Photo,
      props: DocumentProps
    ): React$ReactElement<>,
    ...
  };
  declare export type AppType = NextComponentType<
    AppContextType<>,
    AppInitialProps,
    AppPropsType<>
  >;
  declare export type AppTreeType = React$ComponentType<
    AppInitialProps & {
      [name: string]: any,
      ...
    }
  >;
  declare export type Enhancer<C> = (Component: C) => C;
  declare export type ComponentsEnhancer =
    | {
        enhanceApp?: Enhancer<AppType>,
        enhanceComponent?: Enhancer<NextComponentType<>>,
        ...
      }
    | Enhancer<NextComponentType<>>;
  declare export type RenderPageResult = {
    html: string,
    head?: Array<React$Node | null>,
    ...
  };
  declare export type RenderPage = (
    options?: ComponentsEnhancer
  ) => RenderPageResult | Promise<RenderPageResult>;
  declare export type BaseContext = {
    res?: ServerResponse,
    [k: string]: any,
    ...
  };
  declare export type NEXT_DATA = {
    props: any,
    page: string,
    query: ParsedUrlQuery,
    buildId: string,
    assetPrefix?: string,
    runtimeConfig?: {
      [key: string]: any,
      ...
    },
    nextExport?: boolean,
    autoExport?: boolean,
    isFallback?: boolean,
    dynamicIds?: string[],
    err?: Error & {
      statusCode?: number,
      ...
    },
    gsp?: boolean,
    gssp?: boolean,
    customServer?: boolean,
    gip?: boolean,
    appGip?: boolean,
    ...
  };
  /**
   * `Next` context
   */
  declare export interface NextPageContext {
    /**
     * Error object if encountered during rendering
     */
    err?:
      | (Error & {
          statusCode?: number,
          ...
        })
      | null;

    /**
     * `HTTP` request object.
     */
    req?: IncomingMessage;

    /**
     * `HTTP` response object.
     */
    res?: ServerResponse;

    /**
     * Path section of `URL`.
     */
    pathname: string;

    /**
     * Query string section of `URL` parsed as an object.
     */
    query: ParsedUrlQuery;

    /**
     * `String` of the actual path including query.
     */
    asPath?: string;

    /**
     * `Component` the tree of the App to use if needing to render separately
     */
    AppTree: AppTreeType;
  }
  declare export type AppContextType<R: NextRouter = NextRouter> = {
    Component: NextComponentType<NextPageContext>,
    AppTree: AppTreeType,
    ctx: NextPageContext,
    router: R,
    ...
  };
  declare export type AppInitialProps = {
    pageProps: any,
    ...
  };
  declare export type AppPropsType<
    R: NextRouter = NextRouter,
    P = { ... }
  > = AppInitialProps & {
    Component: NextComponentType<NextPageContext, any, P>,
    router: R,
    __N_SSG?: boolean,
    __N_SSP?: boolean,
    ...
  };
  declare export type DocumentContext = NextPageContext & {
    renderPage: RenderPage,
    ...
  };
  declare export type DocumentInitialProps = RenderPageResult & {
    styles?: React$ReactElement<>[] | React$ReactFragment,
    ...
  };
  declare export type DocumentProps = DocumentInitialProps & {
    __NEXT_DATA__: NEXT_DATA,
    dangerousAsPath: string,
    ampPath: string,
    inAmpMode: boolean,
    hybridAmp: boolean,
    staticMarkup: boolean,
    isDevelopment: boolean,
    hasCssMode: boolean,
    devFiles: string[],
    files: string[],
    lowPriorityFiles: string[],
    polyfillFiles: string[],
    dynamicImports: ManifestItem[],
    assetPrefix?: string,
    canonicalBase: string,
    htmlProps: any,
    bodyTags: any[],
    headTags: any[],
    ...
  };
  /**
   * Next `API` route request
   */
  declare export type NextApiRequest = IncomingMessage & {
    /**
     * Object of `query` values from url
     */
    query: {
      [key: string]: string | string[],
      ...
    },

    /**
     * Object of `cookies` from header
     */
    cookies: {
      [key: string]: string,
      ...
    },
    body: any,
    env: Env,
    ...
  };
  /**
   * Send body of response
   */
  declare type Send<T> = (body: T) => void;
  /**
   * Next `API` route response
   */
  declare export type NextApiResponse<T = any> = ServerResponse & {
    /**
     * Send data `any` data in response
     */
    send: Send<T>,

    /**
     * Send data `json` data in response
     */
    json: Send<T>,
    status: (statusCode: number) => NextApiResponse<T>,

    /**
     * Set preview data for Next.js' prerender mode
     */
    setPreviewData: (
      data: { [key: string]: any } | string,
      options?: {
        /**
         * Specifies the number (in seconds) for the preview session to last for.
         * The given number will be converted to an integer by rounding down.
         * By default, no maximum age is set and the preview session finishes
         * when the client shuts down (browser is closed).
         */
        maxAge?: number,
        ...
      }
    ) => NextApiResponse<T>,
    clearPreviewData: () => NextApiResponse<T>,
    ...
  };
  /**
   * Next `API` route handler
   */
  declare export type NextApiHandler<T = any> = (
    req: NextApiRequest,
    res: NextApiResponse<T>
  ) => void;
  /**
   * Utils
   */
  declare export function execOnce<
    T: (...args: any[]) => $Call<<R>((...args: any[]) => R) => R, T>
  >(
    fn: T
  ): T;
  declare export function getLocationOrigin(): string;
  declare export function getURL(): string;
  declare export function getDisplayName<P>(Component: React$ComponentType<P>): string;
  declare export function isResSent(res: ServerResponse): boolean;
  declare export function loadGetInitialProps<C: BaseContext, IP, P>(
    App: NextComponentType<C, IP, P>,
    ctx: C
  ): Promise<IP>;
  declare export var urlObjectKeys: string[];
  declare export function formatWithValidation(
    url: UrlObject,
    options?: URLFormatOptions
  ): string;
  declare export var SP: boolean;
  declare export var ST: boolean;
  declare export {};

}

declare module "next/server" {
  declare export type I18NConfig = {
    defaultLocale: string,
    domains?: DomainLocale[],
    localeDetection?: false,
    locales: string[],
  };

  declare export type DomainLocale = {
    defaultLocale: string,
    domain: string,
    http?: true,
    locales?: string[],
  };

  declare type Options = {
    base?: string | URL,
    headers?: {
      [key: string]: string | string[] | void,
    },
    forceLocale?: boolean,
    nextConfig?: {
      basePath?: string,
      i18n?: I18NConfig | null,
      trailingSlash?: boolean,
    },
  };

  declare var Internal: symbol;
  declare export class NextURL {
    [typeof Internal]: {
      basePath: string,
      buildId?: string,
      flightSearchParameters?: { [string]: string; },
      defaultLocale?: string,
      domainLocale?: DomainLocale,
      locale?: string,
      options: Options,
      trailingSlash?: boolean,
      url: URL,
    };

    constructor(input: string | URL, base?: string | URL, opts?: Options): this;
    constructor(input: string | URL, opts?: Options): this;

    analyzeUrl: () => void;
    formatPathname: () => void;
    formatSearch: () => void;

    get buildId(): string | void;
    set buildId(buildId: string | void): void;

    get flightSearchParameters(): { [string]: string; } | void;
    set flightSearchParameters(flightSearchParams: { [string]: string; } | void): void;

    get locale(): string;
    set locale(locale: string): void;

    get defaultLocale(): string | void;
    get domainLocale(): DomainLocale | void;
    get searchParams(): URLSearchParams;

    get host(): string;
    set host(value: string): void;

    get hostname(): string;
    set hostname(value: string): void;

    get port(): string;
    set port(value: string): void;

    get protocol(): string;
    set protocol(value: string): void;

    get href(): string;
    set href(url: string): void;

    get origin(): string;

    get pathname(): string;
    set pathname(value: string): void;

    get hash(): string;
    set hash(value: string): void;

    get search(): string;
    set search(value: string): void;

    get password(): string;
    set password(value: string): void;

    get username(): string;
    set username(value: string): void;

    get basePath(): string;
    set basePath(value: string): void;

    toString(): string;
    toJSON(): string;
    clone(): NextURL;
  }

  declare export type CookieSerializeOptions = {
    domain?: string,
    encode?: (val: string) => string,
    expires?: Date,
    httpOnly?: boolean,
    maxAge?: number,
    path?: string,
    sameSite?: boolean | 'lax' | 'strict' | 'none',
    secure?: boolean,
  };

  declare type GetWithOptionsOutput = {
    value: string | void,
    options: {
      [key: string]: string,
    },
  };

  declare export class Cookies extends Map<string, string> {
    constructor(input?: string | null): this;
    set(key: string, value: mixed, options?: CookieSerializeOptions): this;
  }

  declare export class NextCookies extends Cookies {
    response: Request | Response;
    constructor(response: Request | Response): this;
    get: (key: string) => string | void;
    getWithOptions: (key: string) => GetWithOptionsOutput;
    set: (key: string, value: mixed, options?: CookieSerializeOptions | void) => this;
    delete: (key: string, options?: CookieSerializeOptions) => boolean;
    clear: (options?: CookieSerializeOptions) => void;
  }

  declare export class NextResponse extends Response {
    [typeof INTERNALS]: {
      cookies: NextCookies,
      url?: NextURL,
    };
    constructor(body?: BodyInit | null, init?: ResponseInit): this;
    get cookies(): NextCookies;
    static json(body: any, init?: ResponseInit): NextResponse;
    static redirect(url: string | NextURL | URL, init?: number | ResponseInit): NextResponse;
    static rewrite(destination: string | NextURL | URL, init?: ResponseInit): NextResponse;
    static next(init?: ResponseInit): NextResponse;
  }
  declare export {};
}

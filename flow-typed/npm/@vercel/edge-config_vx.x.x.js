// flow-typed signature: 330740c6ef248cd390078e8048aa4655
// flow-typed version: <<STUB>>/@vercel/edge-config_v0.1.1/flow_v0.142.0

declare module '@vercel/edge-config' {
  /**
   * Parse the edgeConfigId and token from an Edge Config Connection String.
   *
   * Edge Config Connection Strings look like this:
   * https://edge-config.vercel.com/<edgeConfigId>?token=<token>
   * @param text - A potential Edge Config Connection String
   * @returns The id and token parsed from the given Connection String or null if
   * the given text was not a valid Edge Config Connection String.
   */
  declare function parseConnectionString(
    text: string
  ): {
    id: string,
    token: string,
  ...
  } | null;

  /**
   * Edge Config Client
   */
  declare export interface EdgeConfigClient {
    get: <T>(key: string) => Promise<T | void>;
    getAll: <T>(keys?: $Keys<T>[]) => Promise<T | void>;
    has: (key: string) => Promise<boolean>;
    digest: () => Promise<string>;
  }
  /**
   * Creates a deep clone of an object.
   */
  declare function createClient(
    connectionString: string | void
  ): EdgeConfigClient;
  declare var get: $PropertyType<EdgeConfigClient, "get">;
  declare var getAll: $PropertyType<EdgeConfigClient, "getAll">;
  declare var has: $PropertyType<EdgeConfigClient, "has">;
  declare var digest: $PropertyType<EdgeConfigClient, "digest">;
  declare export {
    createClient,
    digest,
    get,
    getAll,
    has,
    parseConnectionString
  };
}

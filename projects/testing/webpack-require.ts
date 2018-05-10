export interface WebpackContextPrototype {
  keys: () => ReadonlyArray<string>;
}
export interface WebpackRequire {
  context: (
    directory: string,
    useSubdirectories?: boolean /* = false */,
    regExp?: RegExp /* = /^\.\// */,
  ) => WebpackContext;
}

export type WebpackContextFunction = (filename: string) => void;
export type WebpackContext = WebpackContextFunction & WebpackContextPrototype;

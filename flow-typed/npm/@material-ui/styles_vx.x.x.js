
declare module "@material-ui/styles/makeStyles" {
  import type { Theme } from "@material-ui/core/styles/createMuiTheme";
  declare type MUIStyleDeclaration =
    | { [key: string]: $Shape<CSSStyleDeclaration> }
    | MUIStyleDeclaration;
  declare type MakeStylesFunction = (theme: Theme) => MUIStyleDeclaration;
  declare type MakeStylesCallback = MUIStyleDeclaration | MakeStylesFunction;
  declare module.exports: (callback: MakeStylesCallback) => (props?: $FlowFixMe) => { [key: string]: string };
}

declare module '@material-ui/core/styles' {
  import type {ComponentType, ElementConfig, ElementRef, ElementType, Ref} from "react";

  import type {Theme} from "@material-ui/core/styles/createMuiTheme"

  declare type CSSProperties = any; // import type {StandardProperties as CSSProperties} from "csstype";

  declare type CSSCreateStyleSheetOptions = {|
    media?: string,
    meta?: string,
    index?: number,
    link?: boolean,
    element?: HTMLStyleElement,
    generateClassName?: Function,
    classNamePrefix?: string,
  |};

  declare type StyleRules = { [string]: CSSProperties };

  declare type StyleRulesCallback = (theme: Theme) => StyleRules;

  declare export type WithStylesOptions = {|
    ...$Exact<CSSCreateStyleSheetOptions>,
    flip?: boolean,
    withTheme?: boolean,
    name?: string
  |};

  declare export type WithStyles = {
    classes: { +[string]: string },
    innerRef: Ref<any> | {current: ElementRef<any> | null}
  };

  declare type WithStylesHOC = {
    classes: void | { +[string]: string },
    innerRef: void | (Ref<any> | {current: ElementRef<any>} | null)
  };

  declare export type MuiWithStyles = (
    stylesOrCreator: StyleRules | StyleRulesCallback,
    options?: WithStylesOptions,
  ) => <WrappedComponent: ComponentType<*>>(
    Component: WrappedComponent
  ) => ComponentType<$Diff<ElementConfig<WrappedComponent>, WithStylesHOC>>;

  declare module.exports: {
    withStyles: MuiWithStyles,
    makeStyles: $Exports<"@material-ui/styles/makeStyles">,
    ThemeProvider: ComponentType<*>,
    createTheme: $Exports < "@material-ui/core/styles/createMuiTheme" >,
    useTheme: () => Theme,
  };
};

declare module '@material-ui/styles/ThemeProvider' {
  declare type ThemeProviderProps = {|
    theme: Theme | (theme: Theme) => Theme,
    children: React$Node,
  |};
  declare export default ComponentType<ThemeProviderProps>;
}

declare module '@material-ui/styles/withStyles' {
  import type { MuiWithStyles } from '@material-ui/core/styles';
  declare export default MuiWithStyles;
}

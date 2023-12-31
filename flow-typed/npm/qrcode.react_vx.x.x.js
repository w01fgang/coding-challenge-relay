// flow-typed signature: af500cd34b0e97df6bfbf671b4f15ed2
// flow-typed version: <<STUB>>/qrcode.react_v3.1.0/flow_v0.142.0

/**
 * This is an autogenerated libdef stub for:
 *
 *   'qrcode.react'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

declare module 'qrcode.react' {
  declare type SVGProps<T> = $FlowFixMe;
  declare type CanvasHTMLAttributes<T> = $FlowFixMe;
  declare type CSSProperties = $FlowFixMe; // import type {StandardProperties as CSSProperties} from "csstype";

  declare type ImageSettings = {
    src: string,
    height: number,
    width: number,
    excavate: boolean,
    x?: number,
    y?: number,
  ...
  };
  declare type QRProps = {
    value: string,
    size?: number,
    level?: string,
    bgColor?: string,
    fgColor?: string,
    style?: CSSProperties,
    includeMargin?: boolean,
    imageSettings?: ImageSettings,
  ...
  };
  declare type QRPropsCanvas = QRProps &
    CanvasHTMLAttributes<HTMLCanvasElement>;
  declare type QRPropsSVG = QRProps & SVGProps<SVGSVGElement>;
  declare function QRCodeCanvas(props: QRPropsCanvas): React$Node;
  declare function QRCodeSVG(props: QRPropsSVG): React$Node;
  declare type RootProps =
    | (QRPropsSVG & {
      renderAs: "svg",
      ...
    })
    | (QRPropsCanvas & {
      renderAs?: "canvas",
      ...
    });
  declare var QRCode: (props: RootProps) => React$Node;
  declare export { QRCodeCanvas, QRCodeSVG, QRCode as default };
}

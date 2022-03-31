// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";
import { link } from "fs";

export type LogoDarksvgIconProps = React.ComponentProps<"img"> & {
  title?: string;
};

export function LogoDarksvgIcon(props: LogoDarksvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <div style={{
      width: "auto",
      height: "auto",
    }}>
      <img
        className={classNames("plasmic-default__svg", className)}
        src={"/plasmic/mavia_sun/images/logoDarksvg2_logo.png"}
        style={{
          width: "auto !important", height: "50px !important", float: "left", right: "10px"
        }}
      />
      <img
        className={classNames("plasmic-default__svg", className)}
        src={"/plasmic/mavia_sun/images/LOGO_orange_rounded.png"}
        style={{
          width: "50px !important", height: "50px !important", float: "right"
        }}
      />
    </div>
  );
}

export default LogoDarksvgIcon;
/* prettier-ignore-end */

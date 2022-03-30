// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogoDarksvgIconProps = React.ComponentProps<"img"> & {
  title?: string;
};

export function LogoDarksvgIcon(props: LogoDarksvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <div style={{
      width: "auto",
      height: "auto",
      position: "relative"
    }}>
      <img
        className={classNames("plasmic-default__svg", className)}
        alt={"https://www.mavia.com/"}
        src={"/plasmic/mavia_sun/images/logoDarksvg2_logo.png"}
        link={"https://www.mavia.com/"}
        style={{
          width: "auto !important", height: "50px !important", float: "left", right: "10px"
        }}
      />
      <img
        className={classNames("plasmic-default__svg", className)}
        alt={"https://www.mavia.com/"}
        src={"/plasmic/mavia_sun/images/LOGO_orange_rounded.png"}
        link={"https://www.mavia.com/"}
        style={{
          width: "50px !important", height: "50px !important", float: "right"
        }}
      />
    </div>
  );
}

export default LogoDarksvgIcon;
/* prettier-ignore-end */

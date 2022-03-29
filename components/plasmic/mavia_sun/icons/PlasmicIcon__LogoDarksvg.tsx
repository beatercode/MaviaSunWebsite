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
    <img
      className={classNames("plasmic-default__svg", className)}
      alt={""}
      src={"/plasmic/mavia_sun/images/LOGO_yellow.jpeg"}
      style={{
        width: "50px !important", height: "50px !important"
      }}
    />
  );
}

export default LogoDarksvgIcon;
/* prettier-ignore-end */

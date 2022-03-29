// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowRightsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowRightsvgIcon(props: ArrowRightsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      className={classNames("plasmic-default__svg", className, "icon")}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      {...restProps}
    >
      {title && <title>Mavia Sun</title>}

      <path
        d={
          "M18.055 10.522V6.016L24.039 12l-5.984 5.984v-4.506H-.039v-2.957h18.094z"
        }
      ></path>
    </svg>
  );
}

export default ArrowRightsvgIcon;
/* prettier-ignore-end */

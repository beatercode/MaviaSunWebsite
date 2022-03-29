// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogoDarksvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogoDarksvgIcon(props: LogoDarksvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 100 26"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>Mavia Sun</title>}

      <path
        d={
          "M25 13c0 6.075-4.925 11-11 11S3 19.075 3 13 7.925 2 14 2s11 4.925 11 11z"
        }
        fill={"#fff"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M13.078 25.532c7.222 0 13.077-5.716 13.077-12.766S20.3 0 13.078 0C5.855 0 0 5.715 0 12.766c0 7.05 5.855 12.766 13.078 12.766zM9.59 6.232l3.472 2.518v.014l3.473-2.507v3.177l-3.473 2.506L9.59 9.423v-3.19zm0 4.263l3.472 2.517v.014l3.473-2.507v-.024l3.778-2.817v8.848l-3.778 2.816v-5.646l-3.473 2.506-3.472-2.517v5.657l-3.779-2.816V7.678l3.779 2.817z"
        }
        fill={"url(#V1g8ncKbIa)"}
      ></path>

      <path
        d={
          "M38.152 10.734v9.096h-2.93V6.128h2.93l4.394 6.024 4.638-6.024h2.685V19.83h-2.93v-9.096l-4.393 5.788-4.394-5.788z"
        }
        fill={"#fff"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M51.438 19.745l6.003-13.617h2.521l6.123 13.617h-3.121l-1.44-3.197H55.88l-1.321 3.197h-3.122zm5.283-5.566l1.8-4.38 2.162 4.38H56.72z"
        }
        fill={"#fff"}
      ></path>

      <path
        d={
          "M70.433 19.745l-5.83-13.788h3.158l4.008 9.509 3.766-9.509h3.28l-5.71 13.788h-2.672zm9.863.085V5.872h3.226V19.83h-3.226z"
        }
        fill={"#fff"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M85.179 19.745l6.074-13.617h2.551L100 19.745h-3.159l-1.457-3.197h-5.71l-1.337 3.197H85.18zm5.345-5.566l1.822-4.38 2.187 4.38h-4.009z"
        }
        fill={"#fff"}
      ></path>

      <defs>
        <radialGradient
          id={"V1g8ncKbIa"}
          cx={"0"}
          cy={"0"}
          r={"1"}
          gradientUnits={"userSpaceOnUse"}
          gradientTransform={"scale(50 12.766) rotate(90 0 1)"}
        >
          <stop stopColor={"#1C54C2"}></stop>

          <stop offset={"1"} stopColor={"#215DD6"}></stop>
        </radialGradient>
      </defs>
    </svg>
  );
}

export default LogoDarksvgIcon;
/* prettier-ignore-end */

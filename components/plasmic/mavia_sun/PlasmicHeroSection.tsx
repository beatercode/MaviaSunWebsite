// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mJU3w7LiKHPBKUALsVD2dj
// Component: gib5IgK6rWAYJZ
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: kodhyUpj2vfND/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_mavia_sun.module.css"; // plasmic-import: mJU3w7LiKHPBKUALsVD2dj/projectcss
import sty from "./PlasmicHeroSection.module.css"; // plasmic-import: gib5IgK6rWAYJZ/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: ZNnQiOQA-EMqaf/icon
import ArrowRightsvgIcon from "./icons/PlasmicIcon__ArrowRightsvg"; // plasmic-import: CzXEhqLtaA5P__/icon

export type PlasmicHeroSection__VariantMembers = {};

export type PlasmicHeroSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeroSection__VariantsArgs;
export const PlasmicHeroSection__VariantProps = new Array<VariantPropType>();

export type PlasmicHeroSection__ArgsType = {};
type ArgPropType = keyof PlasmicHeroSection__ArgsType;
export const PlasmicHeroSection__ArgProps = new Array<ArgPropType>();

export type PlasmicHeroSection__OverridesType = {
  root?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  column?: p.Flex<"div">;
  h2?: p.Flex<"h2">;
  text?: p.Flex<"div">;
  button?: p.Flex<typeof Button>;
  svg?: p.Flex<"svg">;
};

export interface DefaultHeroSectionProps {
  className?: string;
}

function PlasmicHeroSection__RenderFunc(props: {
  variants: PlasmicHeroSection__VariantsArgs;
  args: PlasmicHeroSection__ArgsType;
  overrides: PlasmicHeroSection__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"columns"}
        data-plasmic-override={overrides.columns}
        className={classNames(projectcss.all, sty.columns)}
      >
        <div
          data-plasmic-name={"column"}
          data-plasmic-override={overrides.column}
          className={classNames(projectcss.all, sty.column)}
        >
          <h2
            data-plasmic-name={"h2"}
            data-plasmic-override={overrides.h2}
            className={classNames(
              projectcss.all,
              projectcss.h2,
              projectcss.__wab_text,
              sty.h2
            )}
          >
            {"Go and spread MAVIA"}
          </h2>

          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {"MAVIA's world must be spread around the socials"}
          </div>

          <Button
            data-plasmic-name={"button"}
            data-plasmic-override={overrides.button}
            className={classNames("__wab_instance", sty.button)}
            color={"blue" as const}
            endIcon={
              <ArrowRightsvgIcon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(projectcss.all, sty.svg)}
                role={"img"}
              />
            }
            shape={"rounded" as const}
            showEndIcon={true}
          >
            {"Twitter"}
          </Button>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "columns", "column", "h2", "text", "button", "svg"],
  columns: ["columns", "column", "h2", "text", "button", "svg"],
  column: ["column", "h2", "text", "button", "svg"],
  h2: ["h2"],
  text: ["text"],
  button: ["button", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  columns: "div";
  column: "div";
  h2: "h2";
  text: "div";
  button: typeof Button;
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeroSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeroSection__VariantsArgs;
    args?: PlasmicHeroSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeroSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeroSection__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHeroSection__ArgProps,
      internalVariantPropNames: PlasmicHeroSection__VariantProps
    });

    return PlasmicHeroSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeroSection";
  } else {
    func.displayName = `PlasmicHeroSection.${nodeName}`;
  }
  return func;
}

export const PlasmicHeroSection = Object.assign(
  // Top-level PlasmicHeroSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    column: makeNodeComponent("column"),
    h2: makeNodeComponent("h2"),
    text: makeNodeComponent("text"),
    button: makeNodeComponent("button"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicHeroSection
    internalVariantProps: PlasmicHeroSection__VariantProps,
    internalArgProps: PlasmicHeroSection__ArgProps
  }
);

export default PlasmicHeroSection;
/* prettier-ignore-end */
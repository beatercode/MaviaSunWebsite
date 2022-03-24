// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mJU3w7LiKHPBKUALsVD2dj
// Component: vxnSGiRcBqvaI
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
import sty from "./PlasmicBlogPosts.module.css"; // plasmic-import: vxnSGiRcBqvaI/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: ZNnQiOQA-EMqaf/icon
import ArrowRightsvgIcon from "./icons/PlasmicIcon__ArrowRightsvg"; // plasmic-import: CzXEhqLtaA5P__/icon

export type PlasmicBlogPosts__VariantMembers = {};

export type PlasmicBlogPosts__VariantsArgs = {};
type VariantPropType = keyof PlasmicBlogPosts__VariantsArgs;
export const PlasmicBlogPosts__VariantProps = new Array<VariantPropType>();

export type PlasmicBlogPosts__ArgsType = {};
type ArgPropType = keyof PlasmicBlogPosts__ArgsType;
export const PlasmicBlogPosts__ArgProps = new Array<ArgPropType>();

export type PlasmicBlogPosts__OverridesType = {
  root?: p.Flex<"section">;
  h2?: p.Flex<"h2">;
};

export interface DefaultBlogPostsProps {
  className?: string;
}

function PlasmicBlogPosts__RenderFunc(props: {
  variants: PlasmicBlogPosts__VariantsArgs;
  args: PlasmicBlogPosts__ArgsType;
  overrides: PlasmicBlogPosts__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <section
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
      <div className={classNames(projectcss.all, sty.column__jI2BB)}>
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
          {"Latest Articles"}
        </h2>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__cXiYs
          )}
        >
          {
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \nLorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          }
        </div>

        <div className={classNames(projectcss.all, sty.columns__zY4Js)}>
          <div className={classNames(projectcss.all, sty.column__bvFe9)}>
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__yNcIq)}
              displayHeight={"230px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/mavia_sun/images/base4Jpg.jpeg",
                fullWidth: 962,
                fullHeight: 618,
                aspectRatio: undefined
              }}
            />

            <div className={classNames(projectcss.all, sty.columns__g6Icr)}>
              <div className={classNames(projectcss.all, sty.column__nZssj)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___9YVa
                  )}
                >
                  {"April 01, 2022"}
                </div>

                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4__spbXs
                  )}
                >
                  {"Mavia è troppo figa raga, fidati lascia stare"}
                </h4>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__fzCK
                  )}
                >
                  {
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ....\n"
                  }
                </div>

                <Button
                  className={classNames("__wab_instance", sty.button__h2W3U)}
                  color={"softBlue" as const}
                  endIcon={
                    <ArrowRightsvgIcon
                      className={classNames(projectcss.all, sty.svg__gqE86)}
                      role={"img"}
                    />
                  }
                  link={"https://twitter.com/MaviaGame" as const}
                  shape={"rounded" as const}
                  showEndIcon={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___4FEHo
                    )}
                  >
                    {"READ MORE"}
                  </div>
                </Button>
              </div>
            </div>
          </div>

          <div className={classNames(projectcss.all, sty.column__icw94)}>
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__krmij)}
              displayHeight={"285px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"100%" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/mavia_sun/images/base1Jpg.jpeg",
                fullWidth: 500,
                fullHeight: 327,
                aspectRatio: undefined
              }}
            />

            <div className={classNames(projectcss.all, sty.columns__h0JXa)}>
              <div className={classNames(projectcss.all, sty.column__ikXfO)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___4GzBm
                  )}
                >
                  {"April 02, 2022"}
                </div>

                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4___0Dsnv
                  )}
                >
                  {
                    "CEO di Mavia indagato per stupro, ancora aperte le indagini"
                  }
                </h4>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__cKMxc
                  )}
                >
                  {
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ....\n"
                  }
                </div>

                <Button
                  className={classNames("__wab_instance", sty.button__f738L)}
                  color={"softBlue" as const}
                  endIcon={
                    <ArrowRightsvgIcon
                      className={classNames(projectcss.all, sty.svg__sXOdV)}
                      role={"img"}
                    />
                  }
                  link={"https://twitter.com/MaviaGame" as const}
                  shape={"rounded" as const}
                  showEndIcon={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__m6R7
                    )}
                  >
                    {"READ MORE"}
                  </div>
                </Button>
              </div>
            </div>
          </div>

          <div className={classNames(projectcss.all, sty.column__gaLuf)}>
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__inm8Y)}
              displayHeight={"230px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"100%" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/mavia_sun/images/base3Jpg.jpeg",
                fullWidth: 960,
                fullHeight: 618,
                aspectRatio: undefined
              }}
            />

            <div className={classNames(projectcss.all, sty.columns__z2MK7)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__hhhXu)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__jyyE7
                  )}
                >
                  {"April 03, 2022"}
                </div>

                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4___6Uggh
                  )}
                >
                  {"Rilasciato nuovo gruppo di Land, troppi soldi"}
                </h4>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ffrYn
                  )}
                >
                  {
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ....\n"
                  }
                </div>

                <Button
                  className={classNames("__wab_instance", sty.button__x7Ltd)}
                  color={"softBlue" as const}
                  endIcon={
                    <ArrowRightsvgIcon
                      className={classNames(projectcss.all, sty.svg___04Lyk)}
                      role={"img"}
                    />
                  }
                  link={"https://twitter.com/MaviaGame" as const}
                  shape={"rounded" as const}
                  showEndIcon={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___6E9Wt
                    )}
                  >
                    {"READ MORE"}
                  </div>
                </Button>
              </p.Stack>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h2"],
  h2: ["h2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "section";
  h2: "h2";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBlogPosts__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBlogPosts__VariantsArgs;
    args?: PlasmicBlogPosts__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBlogPosts__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBlogPosts__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicBlogPosts__ArgProps,
      internalVariantPropNames: PlasmicBlogPosts__VariantProps
    });

    return PlasmicBlogPosts__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBlogPosts";
  } else {
    func.displayName = `PlasmicBlogPosts.${nodeName}`;
  }
  return func;
}

export const PlasmicBlogPosts = Object.assign(
  // Top-level PlasmicBlogPosts renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h2: makeNodeComponent("h2"),

    // Metadata about props expected for PlasmicBlogPosts
    internalVariantProps: PlasmicBlogPosts__VariantProps,
    internalArgProps: PlasmicBlogPosts__ArgProps
  }
);

export default PlasmicBlogPosts;
/* prettier-ignore-end */
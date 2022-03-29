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

import { collection, doc, getDocs, getDoc, snaphot } from 'firebase/firestore'
import { db } from './AppFirebase';
import { Post } from '../../types/Post';

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

import { useScreenVariants as useScreenVariantsohuKUq66Y5Rscr } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: ohuKUq66y5rscr/globalVariant

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

const postArray: Post[] = [];

export const getAllPosts = async () => {
  const querySnapshot = await getDocs(collection(db, "post"));
  querySnapshot.forEach((doc) => {
    var t = new Date(1970, 0, 1);
    t.setSeconds(doc.data().data.seconds);
    postArray.push(
      new Post(
        doc.data().categoria,
        doc.data().titolo,
        doc.data().descrizione,
        doc.data().link_immagine,
        doc.data().link_content,
        t));
  });
  postArray = (postArray.slice().sort((a, b) => b.data - a.data)).slice(0, 3);
}

function PlasmicBlogPosts__RenderFunc(props: {
  variants: PlasmicBlogPosts__VariantsArgs;
  args: PlasmicBlogPosts__ArgsType;
  overrides: PlasmicBlogPosts__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsohuKUq66Y5Rscr()
  });

  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(async () => {
    setLoading(true);
    const data = await getAllPosts();
    setLoading(false);
  }, []);

  if (loading) return (
    <></>
  );

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
        {(hasVariant(globalVariants, "screen", "mediumSize") ? true : true) ? (
          <div className={classNames(projectcss.all, sty.freeBox___2Sa7Z)}>
            <div className={classNames(projectcss.all, sty.freeBox__lnphy)}>
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
                  "We publish everyday, and those are our Latest Articles:"
                }
              </div>
            </div>
          </div>
        ) : null}
        {(hasVariant(globalVariants, "screen", "mediumSize") ? true : true) ? (
          <div className={classNames(projectcss.all, sty.freeBox__tGlGc)}>
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__o1Cf2)}>
                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.columns__kyEMf)}
                  >
                    {
                      postArray.map((post, index) => (
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.column__ai7B5
                          )}
                        >
                          <p.PlasmicImg
                            alt={""}
                            className={classNames(sty.img__tZqVe)}
                            displayHeight={
                              hasVariant(globalVariants, "screen", "mediumSize")
                                ? ("286px" as const)
                                : ("230px" as const)
                            }
                            displayMaxHeight={"none" as const}
                            displayMaxWidth={"100%" as const}
                            displayMinHeight={"0" as const}
                            displayMinWidth={"0" as const}
                            displayWidth={
                              hasVariant(globalVariants, "screen", "mediumSize")
                                ? ("100%" as const)
                                : ("100%" as const)
                            }
                            loading={"lazy" as const}
                            src={{
                              src: post.link_immagine,
                              fullWidth: 962,
                              fullHeight: 618,
                              aspectRatio: undefined
                            }}
                          />

                          <div
                            className={classNames(
                              projectcss.all,
                              sty.columns__kl5Pg
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.column__fLBtl
                              )}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__aryp3
                                )}
                              >
                                {post.data.toLocaleDateString()}
                              </div>

                              <h4
                                className={classNames(
                                  projectcss.all,
                                  projectcss.h4,
                                  projectcss.__wab_text,
                                  sty.h4__jfi8E
                                )}
                              >
                                {
                                  post.titolo
                                }
                              </h4>

                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text___2OqfG
                                )}
                              >
                                {
                                  post.descrizione
                                }
                              </div>

                              <Button
                                className={classNames(
                                  "__wab_instance",
                                  sty.button__cFqLx
                                )}
                                color={"softBlue" as const}
                                endIcon={
                                  <ArrowRightsvgIcon
                                    className={classNames(
                                      projectcss.all,
                                      sty.svg___4BiHy
                                    )}
                                    role={"img"}
                                  />
                                }
                                link={post.link_content as const}
                                shape={"rounded" as const}
                                showEndIcon={true}
                              >
                                <div
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.__wab_text,
                                    sty.text__k6A3B
                                  )}
                                >
                                  {"READ MORE"}
                                </div>
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </p.Stack>
                ) : null}
              </div>
            ) : null}
          </div>
        ) : null}
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

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mJU3w7LiKHPBKUALsVD2dj
// Component: hTwIlTuynqdQp
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
import Header2 from "../../Header2"; // plasmic-import: ptkmiNbGzpy1yv/component
import Button from "../../Button"; // plasmic-import: kodhyUpj2vfND/component
import BlogPosts from "../../BlogPosts"; // plasmic-import: vxnSGiRcBqvaI/component
import BlogPost from "../../BlogPost"; // plasmic-import: GPII4fC9bhF/component
import CtaBlock from "../../CtaBlock"; // plasmic-import: J57A6jCLGpdNw/component
import HeroSection from "../../HeroSection"; // plasmic-import: gib5IgK6rWAYJZ/component
import Footer from "../../Footer"; // plasmic-import: ayAaR3NYyZ-kRT/component

import { useScreenVariants as useScreenVariantsohuKUq66Y5Rscr } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: ohuKUq66y5rscr/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_mavia_sun.module.css"; // plasmic-import: mJU3w7LiKHPBKUALsVD2dj/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: hTwIlTuynqdQp/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: ZNnQiOQA-EMqaf/icon
import ArrowRightsvgIcon from "./icons/PlasmicIcon__ArrowRightsvg"; // plasmic-import: CzXEhqLtaA5P__/icon

export type PlasmicHomepage__VariantMembers = {};

export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  mainHeader?: p.Flex<typeof Header2>;
  h1?: p.Flex<"h1">;
  button?: p.Flex<typeof Button>;
  svg?: p.Flex<"svg">;
  imageBox?: p.Flex<"div">;
  mainArticles?: p.Flex<typeof BlogPosts>;
  blogPost?: p.Flex<typeof BlogPost>;
  features?: p.Flex<"section">;
  container4?: p.Flex<"div">;
  outerRow2?: p.Flex<"div">;
  valusRow1?: p.Flex<"div">;
  valusRow2?: p.Flex<"div">;
  outerRow3?: p.Flex<"div">;
  row4?: p.Flex<"div">;
  team?: p.Flex<"section">;
  ctaBlock?: p.Flex<typeof CtaBlock>;
  heroSection?: p.Flex<typeof HeroSection>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultHomepageProps {}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsohuKUq66Y5Rscr()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        {true ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"root"}
            data-plasmic-override={overrides.root}
            data-plasmic-root={true}
            data-plasmic-for-node={forNode}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.root_reset,
              projectcss.plasmic_default_styles,
              projectcss.plasmic_mixins,
              projectcss.plasmic_tokens,
              sty.root
            )}
          >
            <div className={classNames(projectcss.all, sty.freeBox__pLeWm)}>
              <div className={classNames(projectcss.all, sty.freeBox__rk3Sg)}>
                <Header2
                  data-plasmic-name={"mainHeader"}
                  data-plasmic-override={overrides.mainHeader}
                  className={classNames("__wab_instance", sty.mainHeader)}
                />

                <div className={classNames(projectcss.all, sty.freeBox__unOuN)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__wx1Yk)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__qOhGq)}
                    >
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__n8Py4
                        )}
                      >
                        <h1
                          data-plasmic-name={"h1"}
                          data-plasmic-override={overrides.h1}
                          className={classNames(
                            projectcss.all,
                            projectcss.h1,
                            projectcss.__wab_text,
                            sty.h1
                          )}
                        >
                          {hasVariant(globalVariants, "screen", "mobile") ? (
                            "MAVIA SUN TEAM"
                          ) : hasVariant(globalVariants, "screen", "tablet") ? (
                            <React.Fragment>
                              <React.Fragment>{""}</React.Fragment>
                              <span
                                className={
                                  "plasmic_default__all plasmic_default__span"
                                }
                                style={{ fontWeight: 700 }}
                              >
                                {"Mavia Sun Team"}
                              </span>
                              <React.Fragment>{""}</React.Fragment>
                            </React.Fragment>
                          ) : (
                            "Mavia Sun Team"
                          )}
                        </h1>

                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___9Qpoh
                          )}
                        >
                          {hasVariant(globalVariants, "screen", "mobile")
                            ? "Esplora, Tilta, Shoppa"
                            : "Esplora, Tilta, Shoppa"}
                        </div>

                        <Button
                          data-plasmic-name={"button"}
                          data-plasmic-override={overrides.button}
                          className={classNames("__wab_instance", sty.button)}
                          endIcon={
                            <ArrowRightsvgIcon
                              data-plasmic-name={"svg"}
                              data-plasmic-override={overrides.svg}
                              className={classNames(projectcss.all, sty.svg)}
                              role={"img"}
                            />
                          }
                          shape={"rounded" as const}
                        >
                          {"Get started"}
                        </Button>
                      </p.Stack>
                    </p.Stack>

                    <div
                      className={classNames(projectcss.all, sty.freeBox__hiaeS)}
                    >
                      {true ? (
                        <div
                          data-plasmic-name={"imageBox"}
                          data-plasmic-override={overrides.imageBox}
                          className={classNames(projectcss.all, sty.imageBox)}
                        />
                      ) : null}
                    </div>
                  </p.Stack>
                </div>

                <BlogPosts
                  data-plasmic-name={"mainArticles"}
                  data-plasmic-override={overrides.mainArticles}
                  className={classNames("__wab_instance", sty.mainArticles)}
                />

                <BlogPost
                  data-plasmic-name={"blogPost"}
                  data-plasmic-override={overrides.blogPost}
                  className={classNames("__wab_instance", sty.blogPost)}
                />
              </div>
            </div>

            {true ? (
              <section
                data-plasmic-name={"features"}
                data-plasmic-override={overrides.features}
                className={classNames(projectcss.all, sty.features)}
              >
                <div className={classNames(projectcss.all, sty.column__yLcCd)}>
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2___54HrM
                    )}
                  >
                    {"Main values of our Team"}
                  </h2>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__cj0SM
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "E' il terzo sito web questo web, parlo da solo perchè la mia ragazza sta giocando alla PS4. Viva la F(OMO)"
                      : "Non male persuasystem 2.0. Sembra di parlare con un venditore, però per il resto ha del contenuto molto valido"}
                  </div>

                  <div
                    data-plasmic-name={"container4"}
                    data-plasmic-override={overrides.container4}
                    className={classNames(projectcss.all, sty.container4)}
                  >
                    <div
                      data-plasmic-name={"outerRow2"}
                      data-plasmic-override={overrides.outerRow2}
                      className={classNames(projectcss.all, sty.outerRow2)}
                    >
                      <div
                        data-plasmic-name={"valusRow1"}
                        data-plasmic-override={overrides.valusRow1}
                        className={classNames(projectcss.all, sty.valusRow1)}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.column__vUrFe
                          )}
                        >
                          {true ? (
                            <p.Stack
                              as={"div"}
                              hasGap={true}
                              className={classNames(
                                projectcss.all,
                                sty.freeBox___2CfU
                              )}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  sty.freeBox___5Roiy
                                )}
                              />

                              <h3
                                className={classNames(
                                  projectcss.all,
                                  projectcss.h3,
                                  projectcss.__wab_text,
                                  sty.h3__lYuw4
                                )}
                              >
                                {"New content every day"}
                              </h3>

                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__us0Aj
                                )}
                              >
                                {hasVariant(globalVariants, "screen", "mobile")
                                  ? "Our team is constantly posting new content every day.\nBy the way, BeaterFit best adc euw on WildRift.\nNo matter what."
                                  : "Our team is constantly posting new content every day.\nBy the way, BeaterFit is the best adc euw on Wild Rift.\nNo matter what."}
                              </div>
                            </p.Stack>
                          ) : null}
                        </div>

                        <div
                          className={classNames(
                            projectcss.all,
                            sty.column__kckp1
                          )}
                        >
                          {true ? (
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__bVdM5
                              )}
                            >
                              {(
                                hasVariant(globalVariants, "screen", "mobile")
                                  ? true
                                  : true
                              ) ? (
                                <p.PlasmicImg
                                  alt={""}
                                  className={classNames(sty.img__cer72)}
                                  displayHeight={
                                    hasVariant(
                                      globalVariants,
                                      "screen",
                                      "mobile"
                                    )
                                      ? ("110px" as const)
                                      : ("400px" as const)
                                  }
                                  displayMaxHeight={"none" as const}
                                  displayMaxWidth={"none" as const}
                                  displayMinHeight={"0" as const}
                                  displayMinWidth={"0" as const}
                                  displayWidth={
                                    hasVariant(
                                      globalVariants,
                                      "screen",
                                      "mobile"
                                    )
                                      ? ("110px" as const)
                                      : ("400px" as const)
                                  }
                                  loading={"lazy" as const}
                                  src={{
                                    src: "/plasmic/mavia_sun/images/logoRedpng.png",
                                    fullWidth: 366,
                                    fullHeight: 357,
                                    aspectRatio: undefined
                                  }}
                                  style={"" as const}
                                />
                              ) : null}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div
                        data-plasmic-name={"valusRow2"}
                        data-plasmic-override={overrides.valusRow2}
                        className={classNames(projectcss.all, sty.valusRow2)}
                      >
                        <div
                          data-plasmic-name={"outerRow3"}
                          data-plasmic-override={overrides.outerRow3}
                          className={classNames(projectcss.all, sty.outerRow3)}
                        >
                          <div
                            data-plasmic-name={"row4"}
                            data-plasmic-override={overrides.row4}
                            className={classNames(projectcss.all, sty.row4)}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.column__vc5Cg
                              )}
                            >
                              {(
                                hasVariant(globalVariants, "screen", "mobile")
                                  ? true
                                  : true
                              ) ? (
                                <p.PlasmicImg
                                  alt={""}
                                  className={classNames(sty.img__zutd5)}
                                  displayHeight={
                                    hasVariant(
                                      globalVariants,
                                      "screen",
                                      "mobile"
                                    )
                                      ? ("110px" as const)
                                      : ("400px" as const)
                                  }
                                  displayMaxHeight={"none" as const}
                                  displayMaxWidth={"none" as const}
                                  displayMinHeight={"0" as const}
                                  displayMinWidth={"0" as const}
                                  displayWidth={
                                    hasVariant(
                                      globalVariants,
                                      "screen",
                                      "mobile"
                                    )
                                      ? ("110px" as const)
                                      : ("400px" as const)
                                  }
                                  loading={"lazy" as const}
                                  src={{
                                    src: "/plasmic/mavia_sun/images/logoRedpng.png",
                                    fullWidth: 366,
                                    fullHeight: 357,
                                    aspectRatio: undefined
                                  }}
                                />
                              ) : null}
                            </div>

                            <div
                              className={classNames(
                                projectcss.all,
                                sty.column__fIy1
                              )}
                            >
                              {true ? (
                                <p.Stack
                                  as={"div"}
                                  hasGap={true}
                                  className={classNames(
                                    projectcss.all,
                                    sty.freeBox__zecBi
                                  )}
                                >
                                  <div
                                    className={classNames(
                                      projectcss.all,
                                      sty.freeBox___5S9Rq
                                    )}
                                  />

                                  <h3
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.h3,
                                      projectcss.__wab_text,
                                      sty.h3___2AZs7
                                    )}
                                  >
                                    {"Altre cose per elevarci a best team"}
                                  </h3>

                                  <div
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.__wab_text,
                                      sty.text__yAiD
                                    )}
                                  >
                                    {hasVariant(
                                      globalVariants,
                                      "screen",
                                      "mobile"
                                    )
                                      ? "Cioè. Cazzo. Siamo dei mostri. Un sito di cristo che con il content adatto, non può che farci avere la prima posizione in classifica. \nEasy win."
                                      : "Cioè. Cazzo. Siamo dei mostri. Un sito di cristo che con il content adatto, non può che farci avere la prima posizione in classifica. \nEasy win."}
                                  </div>
                                </p.Stack>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ) : null}

            <section
              data-plasmic-name={"team"}
              data-plasmic-override={overrides.team}
              className={classNames(projectcss.all, sty.team)}
            >
              <div className={classNames(projectcss.all, sty.column__wMsG1)}>
                <h2
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2__eGy6
                  )}
                >
                  {"Team"}
                </h2>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__eiRds
                  )}
                >
                  {
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \nLorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  }
                </div>

                <div className={classNames(projectcss.all, sty.columns__mtKwT)}>
                  <div className={classNames(projectcss.all, sty.column__rc27)}>
                    <div
                      className={classNames(projectcss.all, sty.columns__bgUby)}
                    >
                      <div
                        className={classNames(projectcss.all, sty.column__dWsv)}
                      >
                        <p.PlasmicImg
                          alt={""}
                          className={classNames(sty.img__qztk6)}
                          displayHeight={"175px" as const}
                          displayMaxHeight={"none" as const}
                          displayMaxWidth={"100%" as const}
                          displayMinHeight={"0" as const}
                          displayMinWidth={"0" as const}
                          displayWidth={"auto" as const}
                          loading={"lazy" as const}
                          src={{
                            src: "/plasmic/mavia_sun/images/item4Png.png",
                            fullWidth: 316,
                            fullHeight: 376,
                            aspectRatio: undefined
                          }}
                        />

                        <h5
                          className={classNames(
                            projectcss.all,
                            projectcss.h5,
                            projectcss.__wab_text,
                            sty.h5__gVuiG
                          )}
                        >
                          {hasVariant(globalVariants, "screen", "mobile")
                            ? "Content Guys"
                            : "Content Guys"}
                        </h5>

                        <div
                          before={"" as const}
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__i7O3
                          )}
                        >
                          {
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                          }
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={classNames(projectcss.all, sty.column__fVNc)}>
                    <div
                      className={classNames(projectcss.all, sty.columns__aHqxX)}
                    >
                      <div
                        className={classNames(projectcss.all, sty.column__xjf9)}
                      >
                        <p.PlasmicImg
                          alt={""}
                          className={classNames(sty.img__eC4Kh)}
                          displayHeight={"171px" as const}
                          displayMaxHeight={"none" as const}
                          displayMaxWidth={"100%" as const}
                          displayMinHeight={"0" as const}
                          displayMinWidth={"0" as const}
                          displayWidth={"auto" as const}
                          loading={"lazy" as const}
                          src={{
                            src: "/plasmic/mavia_sun/images/item3Png.png",
                            fullWidth: 402,
                            fullHeight: 380,
                            aspectRatio: undefined
                          }}
                        />

                        <h5
                          className={classNames(
                            projectcss.all,
                            projectcss.h5,
                            projectcss.__wab_text,
                            sty.h5__axaI5
                          )}
                        >
                          {hasVariant(globalVariants, "screen", "mobile")
                            ? "Beater Owner"
                            : "Beater Owner"}
                        </h5>

                        <div
                          before={"" as const}
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___6RMh
                          )}
                        >
                          {
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                          }
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.column__k0Bmz)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.columns__tJg4I)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__qThIs
                        )}
                      >
                        <p.PlasmicImg
                          alt={""}
                          className={classNames(sty.img___8E5H6)}
                          displayHeight={"181px" as const}
                          displayMaxHeight={"none" as const}
                          displayMaxWidth={"100%" as const}
                          displayMinHeight={"0" as const}
                          displayMinWidth={"0" as const}
                          displayWidth={"auto" as const}
                          loading={"lazy" as const}
                          src={{
                            src: "/plasmic/mavia_sun/images/item5Png.png",
                            fullWidth: 462,
                            fullHeight: 462,
                            aspectRatio: undefined
                          }}
                        />

                        <h5
                          className={classNames(
                            projectcss.all,
                            projectcss.h5,
                            projectcss.__wab_text,
                            sty.h5___2KWnd
                          )}
                        >
                          {hasVariant(globalVariants, "screen", "mobile")
                            ? "Scogna Owner"
                            : "Scgona Owner"}
                        </h5>

                        <div
                          before={"" as const}
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__yjmIu
                          )}
                        >
                          {
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {true ? (
              <CtaBlock
                data-plasmic-name={"ctaBlock"}
                data-plasmic-override={overrides.ctaBlock}
                className={classNames("__wab_instance", sty.ctaBlock)}
              />
            ) : null}

            <HeroSection
              data-plasmic-name={"heroSection"}
              data-plasmic-override={overrides.heroSection}
              className={classNames("__wab_instance", sty.heroSection)}
            />

            <Footer
              data-plasmic-name={"footer"}
              data-plasmic-override={overrides.footer}
              className={classNames("__wab_instance", sty.footer)}
            />
          </p.Stack>
        ) : null}
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "mainHeader",
    "h1",
    "button",
    "svg",
    "imageBox",
    "mainArticles",
    "blogPost",
    "features",
    "container4",
    "outerRow2",
    "valusRow1",
    "valusRow2",
    "outerRow3",
    "row4",
    "team",
    "ctaBlock",
    "heroSection",
    "footer"
  ],
  mainHeader: ["mainHeader"],
  h1: ["h1"],
  button: ["button", "svg"],
  svg: ["svg"],
  imageBox: ["imageBox"],
  mainArticles: ["mainArticles"],
  blogPost: ["blogPost"],
  features: [
    "features",
    "container4",
    "outerRow2",
    "valusRow1",
    "valusRow2",
    "outerRow3",
    "row4"
  ],
  container4: [
    "container4",
    "outerRow2",
    "valusRow1",
    "valusRow2",
    "outerRow3",
    "row4"
  ],
  outerRow2: ["outerRow2", "valusRow1", "valusRow2", "outerRow3", "row4"],
  valusRow1: ["valusRow1"],
  valusRow2: ["valusRow2", "outerRow3", "row4"],
  outerRow3: ["outerRow3", "row4"],
  row4: ["row4"],
  team: ["team"],
  ctaBlock: ["ctaBlock"],
  heroSection: ["heroSection"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  mainHeader: typeof Header2;
  h1: "h1";
  button: typeof Button;
  svg: "svg";
  imageBox: "div";
  mainArticles: typeof BlogPosts;
  blogPost: typeof BlogPost;
  features: "section";
  container4: "div";
  outerRow2: "div";
  valusRow1: "div";
  valusRow2: "div";
  outerRow3: "div";
  row4: "div";
  team: "section";
  ctaBlock: typeof CtaBlock;
  heroSection: typeof HeroSection;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomepage__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    mainHeader: makeNodeComponent("mainHeader"),
    h1: makeNodeComponent("h1"),
    button: makeNodeComponent("button"),
    svg: makeNodeComponent("svg"),
    imageBox: makeNodeComponent("imageBox"),
    mainArticles: makeNodeComponent("mainArticles"),
    blogPost: makeNodeComponent("blogPost"),
    features: makeNodeComponent("features"),
    container4: makeNodeComponent("container4"),
    outerRow2: makeNodeComponent("outerRow2"),
    valusRow1: makeNodeComponent("valusRow1"),
    valusRow2: makeNodeComponent("valusRow2"),
    outerRow3: makeNodeComponent("outerRow3"),
    row4: makeNodeComponent("row4"),
    team: makeNodeComponent("team"),
    ctaBlock: makeNodeComponent("ctaBlock"),
    heroSection: makeNodeComponent("heroSection"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */

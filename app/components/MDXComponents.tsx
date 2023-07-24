import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import ExternalLink from "@/components/project/ExternalLink";
import InlineSection from "@/components/project/InlineSection";
import InlineSectionItem from "@/components/project/InlineSectionItem";
import Section from "@/components/project/Section";

import type { MDXComponents } from "mdx/types";

// Repsonsive image component
// TODO: Maybe move to a separate file?
const ResponsiveImage = (props: { src: string; alt: string }) => (
  <Image
    {...props}
    width={600}
    height={400}
    sizes="(min-width: 808px) 50vw, 100vw"
    className="off-width"
    alt={props.alt}
  />
);

// Dynamic Imports. These components are not used on every page
const ModelViewer = dynamic(() => import("@/components/project/ModelViewer"));
const Youtube = dynamic(() => import("@/components/project/Youtube"));
const Video = dynamic(() => import("@/components/project/Video"));
const ImageWithCaption = dynamic(() => import("@/components/project/ImageWithCaption"));
const FigmaEmbed = dynamic(() => import("@/components/widgets/FigmaEmbed"));

// Dynamically import components here
const CustomComponents = {
  // Formatting
  ExternalLink,
  InlineSection,
  Section,
  Link,
  Image,
  // Widgets
  ModelViewer,
  Youtube,
  Video,
  InlineSectionItem,
  ImageWithCaption,
  FigmaEmbed,
};

// Define MDX compatible components here
const CustomMDXComponents = {
  img: ResponsiveImage,
  ...CustomComponents,
} as MDXComponents;

export default CustomMDXComponents;

import dynamic from "next/dynamic";

import Link from "next/link";

import ExternalLink from "@/components/project/ExternalLink";
import InlineSection from "@/components/project/InlineSection";
import InlineSectionItem from "@/components/project/InlineSectionItem";
import Section from "@/components/project/Section";

import ImageZoomable from "@/components/widgets/ImageZoomable";

import type { MDXComponents } from "mdx/types";

// Repsonsive image component
// TODO: Maybe move to a separate file?
const ResponsiveImage = (props: { src: string; alt: string }) => (
  <ImageZoomable
    {...props}
    width={800}
    height={600}
    className="off-width"
    alt={props.alt}
    sizes='(max-width: 1400px) 100vw, (max-width: 900px) 50vw, 33vw'
  />
);

// Dynamic Imports. These components are not used on every page
const ModelViewer = dynamic(() => import("@/components/project/ModelViewer"));
const Youtube = dynamic(() => import("@/components/project/Youtube"));
const Video = dynamic(() => import("@/components/project/Video"));
const ImageWithCaption = dynamic(() => import("@/components/project/ImageWithCaption"));

// Dynamically import components here
const CustomComponents = {
  // Formatting
  ExternalLink,
  InlineSection,
  Section,
  Link,
  ImageZoomable,
  // Widgets
  ModelViewer,
  Youtube,
  Video,
  InlineSectionItem,
  ImageWithCaption,
};

// Define MDX compatible components here
const CustomMDXComponents = {
  img: ResponsiveImage,
  ...CustomComponents,
} as MDXComponents;

export default CustomMDXComponents;

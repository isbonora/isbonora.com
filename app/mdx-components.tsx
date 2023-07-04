import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

const ResponsiveImage = (props) => (
    <div>
        fasdjkfhakjsdhfkj
  <Image
    alt={props.alt}
    sizes="100vw"
    style={{ width: "100%", height: "auto" }}
    {...props}
  />
  </div>
);

const components = {
  img: ResponsiveImage,
};

export default function Post(props) {
  return (
    <MDXProvider components={components}>
      <main {...props} />
    </MDXProvider>
  );
}

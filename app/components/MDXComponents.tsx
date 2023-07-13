import dynamic from 'next/dynamic';
import Image from 'next/image';

// Repsonsive image component
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


const ExternalLink = dynamic(() => import('@/components/project/ExternalLink'));

// Dynamically import components here
const CustomComponents = {
    ExternalLink,
}

// Define MDX compatible components here
const MDXComponents = {
    img: ResponsiveImage,
    ...CustomComponents,
}

export default MDXComponents;
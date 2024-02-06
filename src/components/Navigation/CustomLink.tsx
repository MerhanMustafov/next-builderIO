import Link from 'next/link';

type CustomLinkPropTypes = {
     label: string;
     href: string;
     handleClose: () => void;
};

export default function CustomLink(props: CustomLinkPropTypes) {
     const { label, href, handleClose } = props;
     return (
          <Link href={href} onClick={handleClose}>
               {label || ''}
          </Link>
     );
}

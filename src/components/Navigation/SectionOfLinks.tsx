import { BuilderContent } from "@builder.io/sdk";
import Link from "next/link";
import styles from "./navigation.module.css";

interface RefLinkData {
  refLink: {
    id: string;
    "@type": string;
    model: string;
  };
}

interface IProps {
  links: BuilderContent[];
  show: boolean;
  layer: 1 | 2 | 3 | 4;
  refIds: string[] | null;
  clickedLink: string | null;
  handleRefsExtraction: (nestedLinks: RefLinkData[] | undefined, layer: 2 | 3 | 4) => void;
  closeNavigationDrawer: () => void;
  handleClickedLink: (clickedLink: string) => void;
  handleResetClickedLink: () => void;
}
export default function SectionOfLinks(props: IProps) {
  const {
    links,
    show,
    layer,
    refIds,
    clickedLink,
    handleRefsExtraction,
    closeNavigationDrawer,
    handleClickedLink,
    handleResetClickedLink,
  } = props;

  if (!show) {
    return null;
  }

  const handleNavClickWithNestedLinks = (nestedLinks: RefLinkData[] | undefined, clickedLabel: string) => {
    handleClickedLink(clickedLabel);
    handleRefsExtraction(nestedLinks, (layer + 1) as 2 | 3 | 4);
  };

  const handleNavClickWithoutPath = () => {
    closeNavigationDrawer();
    handleResetClickedLink();
  };

  return (
    <div className={styles.navSection}>
      {links.map((link) => {
        const isActive = link.data?.label === clickedLink;
        // if there is refIds and the current id of the link is not included in the refIds, then return null
        if (refIds && !refIds?.includes(link.id as string)) return null;

        // if the link has nested links, then return a div with the label and call the handleRefsExtraction function when clicked
        const hasNestedLinks = link.data?.nested && link.data?.nested.length > 0;
        if (hasNestedLinks) {
          return (
            <div
              className={`${styles.singleLink} ${isActive ? styles.singleLinkActive : ""}`}
              key={link.id}
              onClick={() => handleNavClickWithNestedLinks(link.data?.nested, link.data?.label as string)}
            >
              <span>{link.data?.label}</span>
            </div>
          );
        }

        // if the link has a path (link.data?.path), then return a Link component
        const href = link.data?.path || undefined;
        if (href) {
          return (
            <div key={link.id}>
              <Link className={styles.singleLink} onClick={handleNavClickWithoutPath} href={href} key={link.id}>
                {link.data?.label}
              </Link>
            </div>
          );
        }

        // if the link has no path and no nested links, then return a div with the label
        return (
          <div
            className={`${styles.singleLink} ${isActive ? styles.singleLinkActive : ""}`}
            key={link.id}
            onClick={() => handleNavClickWithNestedLinks(link.data?.nested, link.data?.label as string)}
          >
            <span>{link.data?.label}</span>
          </div>
        );
      })}
    </div>
  );
}

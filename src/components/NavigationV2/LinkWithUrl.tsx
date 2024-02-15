import { useNavContext } from "./context";
import styles from "./styles.module.css";
import Link from "next/link";

interface IProps {
  label: string;
  url: string;
}

export default function LinkWithUrl(props: IProps) {
  const { label, url } = props;
  const { handleActiveNavClick } = useNavContext();

  return (
    <Link onMouseOver={() => handleActiveNavClick(null)} className={styles["navLink"]} href={url}>
      {label}
    </Link>
  );
}

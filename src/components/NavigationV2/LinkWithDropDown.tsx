import { useNavContext } from "./context";
import styles from "./styles.module.css";
import NavDropDown from "./NavDropDown";

interface IRef {
  ref: {
    "@type": "@builder.io/core:Reference";
    model: "nav-level-1";
    id: "f5f9fd7d2db145519f94d35468830d0d";
  };
}
interface IProps {
  label: string;
  nested: IRef[] | null;
  nextLayer: 1 | 2 | 3;
}

export default function LinkWithDropDown(props: IProps) {
  const { label, nested, nextLayer } = props;
  const { active, handleActiveNavClick, handleRefsExtraction, navData } = useNavContext();

  const isActiveClass = active === label ? styles["active"] : "";

  const handleMouseOver = () => {
    handleActiveNavClick(label);
    handleRefsExtraction(nested, nextLayer);
  };

  return (
    <div onMouseOver={handleMouseOver}>
      <span className={`${styles["navLink"]} ${isActiveClass}`}>{label}</span>
      <NavDropDown label={label} />
    </div>
  );
}

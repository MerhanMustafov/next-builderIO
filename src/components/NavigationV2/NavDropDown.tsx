import styles from "./styles.module.css";
import { MdOutlineClose } from "react-icons/md";
import { useNavContext } from "./context";

interface NavDropDownProps {
  label: string;
}
export default function NavDropDown(props: NavDropDownProps) {
  const { label } = props;
  const { active, handleActiveNavClick, navData, closeNavigationDrawer } = useNavContext();
  const isActive = active === label;
  const nestedLinks = navData[1]?.all?.filter((link) => navData[1].refIds?.includes(link.id as string));

  if (!isActive) {
    return null;
  }

  return (
    <div onMouseLeave={() => handleActiveNavClick(null)} className={styles["dropdown"]}>
      <div className={styles["header"]}>
        <MdOutlineClose onClick={closeNavigationDrawer} className={styles["closeIcon"]} />
      </div>
      <div className={styles["body"]}>
        {nestedLinks?.map((link) => (
          <div key={link.id} className={styles["navLink"]}>
            {link.data?.label}
          </div>
        ))}
      </div>
    </div>
  );
}

import styles from "../styles.module.css";
import { MdOutlineClose } from "react-icons/md";
import { useNavContext } from "../context";

export default function NavNestedTwo() {
  const { navData } = useNavContext();
  const nestedLinks = navData[2]?.all?.filter((link) => navData[2].refIds?.includes(link.id as string));

  if (!nestedLinks || nestedLinks.length < 1) {
    return null;
  }

  return (
    <div className={` ${styles["nestedSecond"]}`}>
      {nestedLinks?.map((link) => (
        <div key={link.id} className={styles["navLink"]}>
          {link.data?.label}
        </div>
      ))}
    </div>
  );
}

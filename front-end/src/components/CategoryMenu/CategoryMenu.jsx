import styles from "./CategoryMenu.module.css";
import { NavLink } from "react-router-dom";
import { CATEGORIES } from "../../constants/categories";

export function CategoryMenu() {
  return (
    <div className={styles.categoryMenu}>
      <ul>
        {CATEGORIES.map((category) => (
          <li key={category.path}>
            <NavLink to={category.path}>{category.categoryName}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

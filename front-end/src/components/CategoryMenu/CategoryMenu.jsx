import styles from "./CategoryMenu.module.css";
import { NavLink, useParams } from "react-router-dom";
import { CATEGORIES } from "../../constants/categories";

export function CategoryMenu() {
  const params = useParams();

  return (
    <div className={styles.categoryMenu}>
      <ul>
        {CATEGORIES.map((category) => (
          <li key={category.path}>
            <NavLink to={`${params.gender}/${category.path}`}>
              {category.categoryName}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

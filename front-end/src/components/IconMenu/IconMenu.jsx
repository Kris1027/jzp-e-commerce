import styles from "./IconMenu.module.css";
import { Link } from "react-router-dom";
import BAG_ICON from "../../assets/Bag.svg";
import HEART_ICON from "../../assets/Heart.svg";

export function IconMenu() {
  const cartItems = 2;

  return (
    <ul className={styles.iconMenu}>
      <li>
        <Link to="/ulubione">
          <img src={HEART_ICON} />
        </Link>
      </li>
      <li>
        <Link to="/koszyk">
          <img src={BAG_ICON} />
          <div className={styles.numberOfProducts}>{cartItems}</div>
        </Link>
      </li>
    </ul>
  );
}

import { Link } from "react-router-dom";
import styles from "../styles/product.module.css";
export default function Product() {
  return (
    <div className={styles.container}>
      <h2 className={styles.jea}>Chooce Your Comfort !</h2>

      <div className={styles.landcont}>
        <div>
          <Link to="/mens">
            <div className={styles.content_left}>
              <div className={styles.over} >
                <img src="src\assets\virat.jpeg" alt="" />
              </div>

              {/* <div className={styles.lett}>
                <h2>FORMAL</h2>
              </div> */}
            </div>
          </Link>
        </div>

        <div>
          <Link to="/kids">
            <div className={styles.content_right}>
              <div className={styles.over} >
                <img src="src\assets\men_product.jpg" alt="" />
              </div>

              {/* <div className={styles.lett}>
                <h2>CASUAL</h2>
              </div> */}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

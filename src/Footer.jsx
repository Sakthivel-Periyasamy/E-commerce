import React from "react";
import styles from "./styles/footer.module.css";
import footer_logo from "./assets/shirt logo.png";
import instagram_icon from "./assets/instagram_icon.png";
import pintester_icon from "./assets/pintester_icon.png";
import whatsapp_icon from "./assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <div className={styles.foot}>
      <div className={styles.footer_logo}>
        <img src={footer_logo} alt="" />
        <p>FASHION SHIRTS</p>
      </div>
      <ul className={styles.footer_links}>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className={styles.footer_social_icon}>
        <div className={styles.footer_icons_container}>
          <img src={instagram_icon} alt="" />
        </div>

        <div className={styles.footer_icons_container}>
          <img src={pintester_icon} alt="" />
        </div>
         <div className={styles.footer_icons_container}>
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className={styles.footer_copyright} >
        <hr />
        <p>Copyright @ 2025 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

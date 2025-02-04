import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [clicked, setClicked] = useState("");
  return (
    <header className={`${styles.header}`}>
      <img className={`${styles.header_img}`} src="/javad.jpg" alt="" />

      <nav className={`${styles.nav}`}>
        <ul>
          <li className={`${styles.nav_item}`}>
            <div className={`${styles.nav_item_container}`}>
              <a
                onClick={() => setClicked("about")}
                style={clicked === "about" ? { color: "red" } : {}}
                href="#about"
              >
                ABOUT ME
              </a>
              <img src="/about.webp" alt="" />
            </div>
          </li>
          <hr className={styles.header_divider} />
          <li className={`${styles.nav_item}`}>
            <div className={`${styles.nav_item_container}`}>
              <a
                onClick={() => setClicked("interests")}
                style={clicked === "interests" ? { color: "red" } : {}}
                href="#interests"
              >
                INTERESTS
              </a>
              <img src="/interests.webp" alt="" />
            </div>
          </li>
          <hr className={styles.header_divider} />
          <li className={`${styles.nav_item}`}>
            <div className={`${styles.nav_item_container}`}>
              <a
                onClick={() => setClicked("skills")}
                style={clicked === "skills" ? { color: "red" } : {}}
                href="#skills"
              >
                skills
              </a>
              <img src="/skills.webp" alt="" />
            </div>
          </li>
          <hr className={styles.header_divider} />
          <li className={`${styles.nav_item}`}>
            <div className={`${styles.nav_item_container}`}>
              <a
                onClick={() => setClicked("edu")}
                style={clicked === "edu" ? { color: "red" } : {}}
                href="#edu"
              >
                EDUCATION
              </a>
              <img src="/edu.webp" alt="" />
            </div>
          </li>
          <hr className={styles.header_divider} />
          <li className={`${styles.nav_item}`}>
            <div className={`${styles.nav_item_container}`}>
              <a
                onClick={() => setClicked("projects")}
                style={clicked === "projects" ? { color: "red" } : {}}
                href="#projects"
              >
                PROJECTS & WORKS
              </a>
              <img src="/works.webp" alt="" />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

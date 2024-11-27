import { useTranslation } from "react-i18next";
import brazil from "../../assets/img/brazil.png";
import en from "../../assets/img/united-states.png";
import es from "../../assets/img/spain.png";
import fr from "../../assets/img/france.png";
import styles from "../Header/styles.module.css";

export const Header = () => {
  const { i18n } = useTranslation();
  return (
    <header className={styles.header}>
      <button className={styles.flag} onClick={() => i18n.changeLanguage("pt")}>
        <img src={brazil} alt="Portguês Brasil" />
      </button>
      <button className={styles.flag} onClick={() => i18n.changeLanguage("en")}>
        <img src={en} alt="Estados Unidos" />
      </button>
      <button className={styles.flag} onClick={() => i18n.changeLanguage("es")}>
        <img src={es} alt="Espanha" />
      </button>
      <button className={styles.flag} onClick={() => i18n.changeLanguage("fr")}>
        <img src={fr} alt="França" />
      </button>
    </header>
  );
};

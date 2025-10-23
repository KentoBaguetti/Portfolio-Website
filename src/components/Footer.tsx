import styles from "../styles/FooterStyling.module.css";

export default function Footer() {
  return (
    <div
      className={`flex flex-row justify-center items-end min-h-80 pb-5 font-extrabold ${styles.footer_background}`}
    >
      <div>Developed by Kentaro Barnes - kentaro.barnes5@gmail.com</div>
    </div>
  );
}

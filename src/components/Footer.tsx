import styles from "../styles/FooterStyling.module.css";

export default function Footer() {
  return (
    <div
      className={`flex flex-row justify-center items-end min-h-80 pb-5 font-extrabold ${styles.footer_background} text-center`}
    >
      <div>Developed by Kentaro Barnes - 2026</div>
    </div>
  );
}

import styles from "../styles/Portfolio.module.css";

export default function TategakiLabel({ text }: { text: string }) {
  return (
    <span className={`${styles.tategaki} font-jp`} aria-hidden="true">
      {text}
    </span>
  );
}

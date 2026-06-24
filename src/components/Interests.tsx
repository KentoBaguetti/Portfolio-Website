import { motion } from "motion/react";
import styles from "../styles/Portfolio.module.css";
import TategakiLabel from "./TategakiLabel";

const groups = [
  {
    title: "Currently",
    items: [
      "BSc. Computer Science Student @ UBC",
      "Software Engineering Intern @ Apple",
      "Prev Software Engineering Intern @ Microsoft, Wello Wallet",
    ],
  },
  {
    title: "Chat to me about",
    items: ["Football", "Snowboarding", "Fishing", "System Design", "Any other coding topics!"],
  },
  {
    title: "A little more about me",
    items: [
      "Most of my experience is in fullstack development",
      "I'm interested in backend and systems engineering",
      "I love being placed into a competitive environment",
      "I enjoy learning new things",
    ],
  },
];

export default function Interests() {
  return (
    <div className={styles.sectionAlt}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className={styles.eyebrowRow}>
          <TategakiLabel text="趣味" />
          <div>
            <motion.h2
              className={`${styles.heading} text-3xl md:text-4xl`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              A bit about me
            </motion.h2>
            <div className={styles.accentBar} />
          </div>
        </div>

        <div className="flex flex-col gap-6 mt-10">
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <h3 className={styles.cardTitle}>{groups[0].title}</h3>
            <ul className={`font-sans text-sm space-y-2 list-disc pl-4 ${styles.bodyMuted}`}>
              {groups[0].items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {groups.slice(1).map((group, index) => (
              <motion.div
                key={group.title}
                className={styles.card}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: 0.1 + index * 0.1, ease: "easeOut" }}
              >
                <h3 className={styles.cardTitle}>{group.title}</h3>
                <ul className={`font-sans text-sm space-y-2 list-disc pl-4 ${styles.bodyMuted}`}>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

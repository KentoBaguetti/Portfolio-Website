import styles from "../styles/Navbar.module.css";
import { useState, useRef, useEffect, useMemo } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [activeButton, setActiveButton] = useState("Home");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const isScrollingRef = useRef(false);

  const tabs = useMemo(() => ["Home", "About", "Experience", "Projects"], []);

  useEffect(() => {
    const updateIndicator = () => {
      const activeElement = tabRefs.current[activeButton];
      if (activeElement && navRef.current) {
        const navRect = navRef.current.getBoundingClientRect();
        const tabRect = activeElement.getBoundingClientRect();
        setIndicatorStyle({
          left: tabRect.left - navRect.left,
          width: tabRect.width,
        });
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeButton]);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const sections = tabs.map((tab) => ({
        id: tab,
        element: document.getElementById(
          tab === "Home" ? "hero" : tab.toLowerCase()
        ),
      }));

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const offsetTop = section.element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveButton(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tabs]);

  const scrollToSection = (tab: string) => {
    isScrollingRef.current = true;
    setActiveButton(tab);

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  };

  return (
    <div className={`${styles.wrapper}`}>
      <div ref={navRef} className={`${styles.navbar}`}>
        <div
          className={styles.bubble_indicator}
          style={{
            left: `${indicatorStyle.left}px`,
            width: `${indicatorStyle.width}px`,
          }}
        />

        <Link to="hero" smooth={true} duration={600}>
          <button
            ref={(el) => {
              tabRefs.current["Home"] = el;
            }}
            className={`${styles.nb_bubble} ${
              activeButton === "Home" ? styles.nb_bubble_active : ""
            }`}
            onClick={() => scrollToSection("Home")}
          >
            Home
          </button>
        </Link>

        <Link to="about" smooth={true} offset={0} duration={600}>
          <button
            ref={(el) => {
              tabRefs.current["About"] = el;
            }}
            className={`${styles.nb_bubble} ${
              activeButton === "About" ? styles.nb_bubble_active : ""
            }`}
            onClick={() => scrollToSection("About")}
          >
            About
          </button>
        </Link>

        <Link to="experience" smooth={true} offset={-90} duration={600}>
          <button
            ref={(el) => {
              tabRefs.current["Experience"] = el;
            }}
            className={`${styles.nb_bubble} ${
              activeButton === "Experience" ? styles.nb_bubble_active : ""
            }`}
            onClick={() => scrollToSection("Experience")}
          >
            Experience
          </button>
        </Link>
        <Link to="projects" smooth={true} offset={0} duration={600}>
          <button
            ref={(el) => {
              tabRefs.current["Projects"] = el;
            }}
            className={`${styles.nb_bubble} ${
              activeButton === "Projects" ? styles.nb_bubble_active : ""
            }`}
            onClick={() => scrollToSection("Projects")}
          >
            Projects
          </button>
        </Link>
      </div>
    </div>
  );
}

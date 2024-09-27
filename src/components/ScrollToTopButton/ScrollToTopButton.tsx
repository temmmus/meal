import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ScrollToTopButton.scss";

export default function ScrollToTopButton() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <button
      className={`scroll-to-top ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      role="button"
    >
      <span className="arrow">↑</span>
    </button>
  );
}

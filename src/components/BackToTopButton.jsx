import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div>
      {visible && (
        <button
          onClick={scrollToTop}
         className="fixed bottom-8 right-8 bg-white text-purple-500 p-4 rounded-full shadow-lg hover:shadow-2xl hover:text-white hover:bg-purple-300 transition duration-300 z-50"

        >
          <IoIosArrowUp className="text-2xl" />
        </button>
      )}
    </div>
  );
}

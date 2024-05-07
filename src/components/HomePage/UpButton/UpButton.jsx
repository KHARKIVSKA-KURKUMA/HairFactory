import { useState, useEffect } from "react";
import { TiArrowUpOutline } from "react-icons/ti";
import { desertStorm } from "../../../utils/colors";
import { Button } from "./UpButton.styled";

const UpButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Button visible={isVisible} onClick={scrollToTop}>
      <TiArrowUpOutline size={28} color={desertStorm} />
    </Button>
  );
};

export default UpButton;

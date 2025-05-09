export const gradientButtonStyle = {
  backgroundImage:
    "linear-gradient(90deg, #3182ce 0%, #4557b8 33%, #634db1 66%, #805ad5 100%)",
  backgroundSize: "200% 100%",
  border: "none",
  outline: "none",
  color: "white",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "md",
  _hover: {
    backgroundImage:
      "linear-gradient(90deg, #2c5282 0%, #3b4c8b 33%, #543fa3 66%, #6b46c1 100%)",
    transform: "scale(1.05)",
    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
  },
  _active: {
    transform: "translateY(0)",
  },
  _focus: {
    boxShadow: "none",
    outline: "none",
    border: "none",
  },
  transition: "all 0.2s",
};

export const deleteButtonStyle = {
  backgroundImage:
    "linear-gradient(90deg, #e53e3e 0%, #c53030 50%, #9b2c2c 100%)",
  backgroundSize: "200% 100%",
  border: "none",
  outline: "none",
  color: "white",
  _hover: {
    backgroundImage:
      "linear-gradient(90deg, #c53030 0%, #9b2c2c 50%, #822727 100%)",
    transform: "scale(1.05)",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
  },
  _active: {
    transform: "translateY(0)",
  },
  _focus: {
    boxShadow: "none",
    outline: "none",
    border: "none",
  },
  transition: "all 0.2s",
};

export const ghostButtonStyle = {
  bg: "transparent",
  color: "white",
  border: "1px solid",
  borderColor: "whiteAlpha.400",
  _hover: {
    bg: "whiteAlpha.200",
    transform: "scale(1.05)",
  },
  transition: "all 0.2s",
};

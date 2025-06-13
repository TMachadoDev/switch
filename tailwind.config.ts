module.exports = {
  theme: {
    extend: {
      keyframes: {
        "switch-animation": {
          "0%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(25%) scale(0.9)" },
          "50%": { transform: "translateX(50%) scale(1.1)" },
          "80%": { transform: "translateX(75%) scale(0.95)" },
          "100%": { transform: "translateX(100%) scale(1)" },
        },
        "switch-animation-reverse": {
          "0%": { transform: "translateX(100%)" },
          "20%": { transform: "translateX(75%) scale(0.9)" },
          "50%": { transform: "translateX(50%) scale(1.1)" },
          "80%": { transform: "translateX(25%) scale(0.95)" },
          "100%": { transform: "translateX(0) scale(1)" },
        },
      },
      animation: {
        "switch-on": "switch-animation 0.6s ease-in-out forwards",
        "switch-off": "switch-animation-reverse 0.6s ease-in-out forwards",
      },
    },
  },
};

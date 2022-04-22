module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      flexBasis: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
      },
      screens: {
        xs: "280px",

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        // 'xs' :  {'min' : '280px', 'max': '639px'},

        // 'sm': {'min': '640px', 'max' : '767px' } ,
        // // => @media (min-width: 640px) { ... }

        // 'md': {'min': '768px', 'max': '1023px'},
        // // => @media (min-width: 768px) { ... }

        // 'lg':  {'min': '1024px', 'max': '1279px'},
        // // => @media (min-width: 1024px) { ... }

        // 'xl': {'min': '1280px', 'max': '1535px'},
        // // => @media (min-width: 1280px) { ... }

        // '2xl': {'min': '1536px'},
        // // => @media (min-width: 1536px) { ... }
      },
      colors: {
        transparent: "transparent",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
        midnightGray: "#808080",
        myNavBar: "#021e39",
        "mygray-rgba": "rgba(184, 184, 184, 0.5)",
        "mypink-rgba": "rgba(211, 204, 202, 0.25)",
      },
      fontSize: {
        xs: ["12px", "18px"],
        sm: ["14px", "20px"],
        md: ["16px", "24px"],
        lg: ["18px", "28px"],
        xl: ["20px", "30px"],

        h6: ["24px", "32px"],
        h5: ["30px", "38px"],
        h4: ["36px", "44px"],
        h3: ["48px", "60px"],
        h2: ["60px", "72px"],
        h1: ["72px", "90px"],
      },
    },
    breakpointsInspector: {
      position: ["bottom", "right"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

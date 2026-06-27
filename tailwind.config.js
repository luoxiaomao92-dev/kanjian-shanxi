export default {
  content: ["./index.html", "./src/**/*.{js,jsx,json}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["var(--font-title)"],
        sans: ["var(--font-body)"]
      },
      colors: {
        paper: "#f8f7f2",
        ink: "#20201d",
        timber: "#9a6946",
        ocher: "#c29443",
        cinnabar: "#b7432f",
        blueprint: "#245f9c"
      }
    }
  },
  plugins: []
};

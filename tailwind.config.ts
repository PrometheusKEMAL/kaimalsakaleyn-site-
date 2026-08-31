import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a", // Deeper, slightly more neutral dark
        "background-secondary": "#121212",
        "card-bg": "#161616",
        "deep-emerald": "#123C2D",
        "primary-emerald": "#1C513D",
        "muted-emerald": "#274F40",
        "antique-gold": "#C1A362",
        "light-gold": "#D8C08A",
        ivory: "#F4F1EA",
        "primary-text": "#E5E5E5", // Softer off-white for reading
        "secondary-text": "#9CA3AF",
        "gold-border": "rgba(193, 163, 98, 0.15)",
      },
      fontFamily: {
        serif: ["Cinzel", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        arabic: ["Noto Naskh Arabic", "Amiri", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.2" }],
        "display-sm": ["clamp(1.25rem, 2vw, 1.75rem)", { lineHeight: "1.3" }],
      },
      spacing: {
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "6": "24px",
        "8": "32px",
        "12": "48px",
        "16": "64px",
        "24": "96px",
        "32": "128px",
        "section": "clamp(3rem, 6vw, 6rem)",
        "section-lg": "clamp(4rem, 8vw, 8rem)",
      },
      borderRadius: {
        card: "6px",
        button: "4px",
        full: "9999px",
        sm: "4px",
        md: "6px",
        lg: "8px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-gold": "linear-gradient(135deg, #C1A362, #D8C08A)",
        "gradient-dark": "linear-gradient(180deg, #0a0a0a, #121212)",
      },
      boxShadow: {
        "subtle": "0 2px 10px rgba(0, 0, 0, 0.2)",
        card: "0 4px 20px rgba(0, 0, 0, 0.3)",
        "card-hover": "0 6px 30px rgba(0, 0, 0, 0.4)",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "fade-in-up": "fadeInUp 0.4s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        }
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#E5E5E5",
            maxWidth: "75ch", // Academic reading width constraint
            a: {
              color: "#C1A362",
              textDecoration: "none",
              "&:hover": {
                color: "#D8C08A",
                textDecoration: "underline",
              },
            },
            h1: {
              color: "#E5E5E5",
              fontFamily: "Cinzel, Georgia, serif",
              fontWeight: "600",
            },
            h2: {
              color: "#E5E5E5",
              fontFamily: "Cinzel, Georgia, serif",
              fontWeight: "600",
              marginTop: "2em",
            },
            h3: {
              color: "#E5E5E5",
              fontFamily: "Cinzel, Georgia, serif",
            },
            h4: {
              color: "#E5E5E5",
            },
            blockquote: {
              color: "#D1D5DB",
              borderLeftColor: "#C1A362",
              fontStyle: "italic",
              paddingLeft: "1.5em",
            },
            strong: {
              color: "#E5E5E5",
            },
            hr: {
              borderColor: "rgba(193, 163, 98, 0.15)",
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};

export default config;

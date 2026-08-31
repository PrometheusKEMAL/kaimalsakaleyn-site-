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
        background: "#080B0A",
        "background-secondary": "#0D1210",
        "card-bg": "#111714",
        "deep-emerald": "#123C2D",
        "primary-emerald": "#1C513D",
        "muted-emerald": "#274F40",
        "antique-gold": "#B89A5B",
        "light-gold": "#D0B778",
        ivory: "#EEE7D8",
        "primary-text": "#F1EEE7",
        "secondary-text": "#A7AAA4",
        "gold-border": "rgba(190, 161, 94, 0.18)",
      },
      fontFamily: {
        serif: ["Cinzel", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        arabic: ["Noto Naskh Arabic", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.2" }],
        "display-sm": ["clamp(1.25rem, 2vw, 1.75rem)", { lineHeight: "1.3" }],
      },
      spacing: {
        "section": "clamp(4rem, 8vw, 8rem)",
        "section-lg": "clamp(5rem, 10vw, 10rem)",
      },
      borderRadius: {
        card: "10px",
        button: "8px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-gold": "linear-gradient(135deg, #B89A5B, #D0B778)",
        "gradient-emerald": "linear-gradient(135deg, #123C2D, #1C513D)",
        "gradient-dark": "linear-gradient(180deg, #080B0A, #0D1210)",
      },
      boxShadow: {
        "gold-glow": "0 0 30px rgba(184, 154, 91, 0.15)",
        "emerald-glow": "0 0 30px rgba(28, 81, 61, 0.25)",
        card: "0 4px 24px rgba(0, 0, 0, 0.3)",
        "card-hover": "0 8px 40px rgba(0, 0, 0, 0.4)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in-down": "fadeInDown 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "scroll-indicator": "scrollIndicator 2s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "border-glow": "borderGlow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        scrollIndicator: {
          "0%, 100%": { opacity: "0.4", transform: "translateY(0)" },
          "50%": { opacity: "1", transform: "translateY(8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        borderGlow: {
          "0%, 100%": { borderColor: "rgba(190, 161, 94, 0.18)" },
          "50%": { borderColor: "rgba(190, 161, 94, 0.4)" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#F1EEE7",
            a: {
              color: "#B89A5B",
              "&:hover": {
                color: "#D0B778",
              },
            },
            h1: {
              color: "#F1EEE7",
              fontFamily: "Cinzel, Georgia, serif",
            },
            h2: {
              color: "#F1EEE7",
              fontFamily: "Cinzel, Georgia, serif",
            },
            h3: {
              color: "#F1EEE7",
              fontFamily: "Cinzel, Georgia, serif",
            },
            h4: {
              color: "#F1EEE7",
            },
            blockquote: {
              color: "#A7AAA4",
              borderLeftColor: "#B89A5B",
            },
            strong: {
              color: "#F1EEE7",
            },
            code: {
              color: "#D0B778",
            },
            hr: {
              borderColor: "rgba(190, 161, 94, 0.18)",
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

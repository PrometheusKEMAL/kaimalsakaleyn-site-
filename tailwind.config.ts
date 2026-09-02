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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "background-secondary": "hsl(var(--background-secondary))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Cinzel", "Georgia", "serif"],
        arabic: ["Noto Naskh Arabic", "Amiri", "serif"],
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "4rem",
      },
      borderRadius: {
        xs: "0.125rem",
        sm: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "hsl(var(--foreground))",
            maxWidth: "70ch", // Optimal reading line length
            a: {
              color: "hsl(var(--primary))",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
            h1: {
              fontFamily: "Cinzel, Georgia, serif",
              fontWeight: "600",
            },
            h2: {
              fontFamily: "Cinzel, Georgia, serif",
              fontWeight: "600",
              marginTop: "2em",
            },
            h3: {
              fontFamily: "Cinzel, Georgia, serif",
              fontWeight: "500",
            },
            h4: {
              fontWeight: "500",
            },
            blockquote: {
              borderLeftColor: "hsl(var(--primary))",
              fontStyle: "italic",
              paddingLeft: "1.5em",
              color: "hsl(var(--muted-foreground))",
            },
            hr: {
              borderColor: "hsl(var(--border))",
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

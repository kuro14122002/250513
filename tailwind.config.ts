import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // --- Màu hệ thống của shadcn/ui (ánh xạ từ biến CSS trong src/index.css) ---
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))', // Thường giống border hoặc một biến thể
        ring: 'hsl(var(--ring))',   // Màu focus ring, sẽ là DSEZA Green

        primary: { // Màu chính của shadcn/ui, sẽ dùng DSEZA Green
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: { // Màu phụ của shadcn/ui
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: { // Màu cảnh báo
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: { // Màu/nền mờ
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: { // Màu nhấn của shadcn/ui
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },

        // --- Các màu DSEZA cụ thể để sử dụng trực tiếp qua class Tailwind ---
        // Đảm bảo các tên này không bị trùng với các key mặc định của Tailwind (như primary, secondary)
        // nếu không muốn ghi đè hoàn toàn chúng mà không qua biến HSL.
        'dseza-green': '#4B7D3F',        // Tương ứng với var(--primary) nếu map đúng
        'dseza-green-dark': '#3A612F',   // Màu này được dùng trong Header.tsx là bg-dseza-primary-dark
        'dseza-green-light': '#5A8C3D',  // Tương ứng với var(--accent) nếu map đúng, hoặc một màu accent riêng
        'dseza-gray-dark': '#222222',
        'dseza-accent-light': '#6faa5f', // Một ví dụ màu accent sáng hơn cho hover trên nền tối

        // Nếu bạn có màu light cụ thể không phải là background mặc định
        // 'custom-light-bg': '#F8F8F8',
        // 'custom-light-text': '#1F2937',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontFamily: {
        sans: ['Roboto', 'Open Sans', 'ui-sans-serif', 'system-ui', /* ...other fallbacks */],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
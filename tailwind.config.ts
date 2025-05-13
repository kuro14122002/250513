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
      padding: '2rem', // Giữ nguyên padding container của shadcn/ui
      screens: {
        '2xl': '1400px' // Giữ nguyên breakpoint của shadcn/ui
      }
    },
    extend: {
      colors: {
        // --- Màu hệ thống của shadcn/ui (nên giữ lại hoặc điều chỉnh cẩn thận) ---
        background: 'hsl(var(--background))', // #F8F8F8 - Nền chính sáng
        foreground: 'hsl(var(--foreground))', // #1F2937 - Chữ chính trên nền sáng

        border: 'hsl(var(--border))',         // #D1D5DB (gray-300) - Viền
        input: 'hsl(var(--input))',           // Tương tự border cho input
        ring: 'hsl(var(--ring))',             // #4B7D3F (DSEZA Primary Green) - Màu focus ring

        destructive: {
          DEFAULT: 'hsl(var(--destructive))', // Màu cảnh báo (thường là đỏ)
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',       // #E5E7EB (gray-200) - Nền mờ
          foreground: 'hsl(var(--muted-foreground))' // #374151 (gray-700) - Chữ trên nền mờ
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',     // #FFFFFF - Nền popover
          foreground: 'hsl(var(--popover-foreground))', // #1F2937 - Chữ trong popover
        },
        card: {
          DEFAULT: 'hsl(var(--card))',         // #FFFFFF - Nền card
          foreground: 'hsl(var(--card-foreground))',   // #1F2937 - Chữ trong card
        },

        // --- Màu DSEZA được tích hợp và điều chỉnh ---
        dseza: {
          primary: {
            DEFAULT: '#4B7D3F', // --primary-color từ DSEZA tĩnh
            dark: '#3A612F',    // --dark-green từ DSEZA tĩnh
            foreground: '#FFFFFF' // Chữ trắng trên nền primary
          },
          'dark-gray': '#222222', // --dark-gray từ DSEZA tĩnh
          accent: { // Có thể dùng màu primary hoặc một biến thể cho accent
            DEFAULT: '#5A8C3D', // Màu accent hiện tại trong file của bạn, gần với DSEZA
            foreground: '#FFFFFF'
          }
        },

        // --- Ánh xạ màu chủ đạo của shadcn/ui sang màu DSEZA ---
        // Điều này giúp các component của shadcn/ui sử dụng màu DSEZA theo mặc định
        primary: {
          DEFAULT: 'hsl(var(--primary))', // Sẽ trỏ đến HSL của #4B7D3F (DSEZA Green)
          foreground: 'hsl(var(--primary-foreground))' // Sẽ trỏ đến HSL của #FFFFFF
        },
        // secondary và accent của shadcn/ui có thể giữ nguyên hoặc điều chỉnh nếu bạn muốn
        // Dưới đây là ví dụ giữ nguyên từ file gốc của bạn, hoặc bạn có thể map chúng
        secondary: {
          DEFAULT: 'hsl(var(--secondary))', // Ví dụ: Tailwind gray-500 làm màu phụ
          foreground: 'hsl(var(--secondary-foreground))' // Chữ trắng trên nền secondary này
        },
        accent: { // shadcn accent, có thể khác với dseza.accent nếu muốn
          DEFAULT: 'hsl(var(--accent))', // Sẽ trỏ đến HSL của #5A8C3D
          foreground: 'hsl(var(--accent-foreground))'
        },

        // Giữ lại các màu cụ thể nếu bạn dùng trực tiếp từ file gốc
        // 'brand-green-primary': '#416628', // Màu này hơi khác DSEZA.primary
        // 'brand-green-primary-dark': '#304d1f',
        // 'brand-green-accent': '#5A8C3D',
        // 'brand-off-white': '#F8F8F8',
        // 'brand-text-dark': '#1F2937',

        light: { // Nếu bạn còn sử dụng 'light'
          DEFAULT: '#F8F8F8',
          foreground: '#1F2937'
        }
      },
      borderRadius: { // Giữ nguyên cấu hình bo góc của shadcn/ui
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: { // Giữ nguyên keyframes của shadcn/ui
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: { // Giữ nguyên animation của shadcn/ui
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      fontFamily: {
        sans: ['Roboto', 'Open Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
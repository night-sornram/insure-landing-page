import type { Config } from 'tailwindcss'
const {colors : defaultColors } = require("tailwindcss/defaultTheme")

const colors = {
  ...defaultColors,
  ...{
    "custom" : {
      "100" : "hsl(256, 26%, 20%)",
      "200" : "hsl(216, 30%, 68%)",
      "300" : "hsl(270, 9%, 17%)",
      "400" : "hsl(273, 4%, 51%)",
      "500" : "hsl(0, 0%, 98%)"
    }
  }
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'how-we-work-desktop' : "url('/images/bg-pattern-how-we-work-desktop.svg')",
        'how-we-work-mobile' : "url('/images/bg-pattern-how-we-work-mobile.svg')",
        'footer-desktop' : "url('/images/bg-pattern-footer-desktop.svg')",
        "nav-menu" : "url('/images/bg-pattern-mobile-nav.svg')"
      },
      colors : colors,
      fontFamily :{
        "karla" : ['Karla'],
        "dm" : ['DM Serif Display']
      }
    },
  },
  plugins: [],
}
export default config

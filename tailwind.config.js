export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { brand: { 50:'#eff6ff',100:'#dbeafe',200:'#bfdbfe',500:'#3b6fe0',600:'#2457d6',700:'#1b43ad',900:'#0a2463' } },
    fontFamily: { sans: ['"Plus Jakarta Sans"','system-ui','-apple-system','Segoe UI','Roboto','sans-serif'] },
    boxShadow: { card: '0 10px 30px -12px rgba(10,36,99,.18)' }
  } }, plugins: []
}

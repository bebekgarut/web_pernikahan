module.exports = {
  content: ["./views/**/*.html",  "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        great: ['Great Vibes'], 
        kausan:['Kaushan Script'],
        contrail : ['Contrail One'],
        belleza : ['Belleza'],
        breee : ['Bree Serif']
      },
      screens: {
        'hp': {'max': '480px'}, 
        'xs' : {'min' : '481px', 'max' : '639px'}
      },
      colors : {
'warna1' : '#546034',
'warna2' : '#b5bf99',
'warna3' : '#90a155'
      },
    },
  },
  plugins: [],
};

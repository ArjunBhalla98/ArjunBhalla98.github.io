import Typography from "typography";
import deYoung from "typography-theme-fairy-gates";
deYoung.baseFontSize = '20vw'
deYoung.overrideThemeStyles = ({rhythm}) =>({
    h1: {
        fontSize:'36px',
        color:'#373737',
        opacity:'0.95',
        fontFamily: 'Work Sans'
        
    },

    h2: {
        fontSize: '32px',
        //color: '#FEFEFE',
    },

    h3: {
        fontSize: '22px',
        //color:'#FEFEFE',
        opacity:'0.8',
        fontFamily: 'Quattrocento Sans',
    },

    h5: {
        fontSize: '15px'
    },

    p: {
        fontSize: '18px',
       
    },

    a: {
        textShadow: 'none',
        backgroundImage: 'none',
        opacity:'0.8',
        fontFamily: 'Quattrocento Sans',
    },

    'a:hover': {
        color:'teal',
        fill:'teal'
    },

    i:{
        opacity:'0.8',
        color:'#FEFEFE', 
        transition: 'opacity 0.5s ease'
    },

    'i:hover' : {
        opacity:'1',
        transition: 'opacity 0.5s ease'
    }
    



})
const typography = new Typography(deYoung);

export default typography;
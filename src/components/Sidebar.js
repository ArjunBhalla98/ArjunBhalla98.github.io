import React from 'react'
import Link from 'gatsby-link'
import profpic from '../images/profile-pic.jpg'
import resume from '../images/resume.pdf'
import Anime from 'react-anime'
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 


class Sidebar extends React.Component{
    
    render(){
        return(
            <div style = {
                {
                    //background:'linear-gradient(to right, #ACACAC, #CFCFCF)',
                    background:"#373737",
                    //background: 'rgba(204, 204, 204, 0.5)',
                    //backgroundImage: 'url(http://www.webdesign.org/img_articles/14881/site-background-pattern-07.jpg)',
                    width: '25%',
                    minHeight: '100%',
                    position:'fixed',
                    zIndex:'2',
                }
            }>
            <InfoContainer/>
            </div>
        );
    }
}

class InfoContainer extends React.Component{

    constructor(props){
        super(props)


        this.state = {
            firstRender: true,
        }
    }


    render(){
            
            return(
                
                    <div style = {{ width:'100%', minHeight:'100%', top:'25%', position:'absolute',}} >
                    
                        <div style = {{zIndex: '1',minWidth: '100%', height:'8px', background:'#373737', position: 'fixed', top:'-25%'}}>
                        </div>
                    
                        <h3 style = {{margin:'0', padding: '0 0 8% 0', textAlign:'center', fontSize:'40px', fontWeight: '100', color:'#FEFEFE' }}>Arjun Bhalla</h3>
                        {/* <h5 style = {{margin:'0', padding:'0 0 5% 0', textAlign:'center', }}>CS@CORNELL UNIVERSITY</h5> */}
                        <ImageContainer/>
                        <IconRow/>
                        <LinksRow/>
                </div>                
            );
    }
     
}

class ImageContainer extends React.Component{
    render(){
        return(
                <div style = {{margin: '0 0 5% 0', alignItems:'center'}}>
                    <img src = {profpic} style = {{margin:'0', padding:'0', display:'block', margin:'auto', width:'50%', boxShadow: '0px 0px 6px 3px black', borderRadius:'50%'}}/>
                </div>
        );
    }
}

class IconRow extends React.Component{
    render(){
        return(
            <div style = {{display:'inline-block', width:'100%', height:'auto', fontSize: '1.5vw', textAlign: 'center', color: 'teal', paddingTop:'0%', paddingBottom: '0%',}}>
                
                    <ul style = {{margin:'0', padding:'0', textAlign:'center',}}>
                        <li style = {{display:'inline-block',margin:'3% 3% 0 3%', padding:'0', opacity:'0.85',}}><a target = "blank" href = "//www.linkedin.com/in/ab-98"><i style = {{color: 'teal',}} className = "fa fa-linkedin fa-2x"/></a></li>
                        <li style = {{display:'inline-block', width:'10%',margin:'3% 3% 0 3%', padding:'0', opacity:'0.85',}}><a target = "blank" href = "//www.github.com/ArjunBhalla98"><i style = {{color: 'teal',}} className = "fa fa-github fa-2x"/></a></li>
                        <li style = {{display:'inline-block', width:'10%', margin:'3% 3% 0 3%', padding:'0', opacity:'0.85',}}><a target = "blank" href = "mailto:ab2383@cornell.edu"><i style = {{color: 'teal',}} className = "fa fa-envelope fa-2x"/></a></li>
                        <li style = {{display:'inline-block', width:'10%', margin:'3% 3% 0 3%', padding:'0', opacity:'0.85',}}><a target = "blank" href = "//www.twitter.com/arjun_baller_"><i style = {{color: 'teal',}} className = "fa fa-twitter fa-2x"/></a></li>
                    </ul>
            </div>
        );
    }
}

class LinksRow extends React.Component{
    render(){
        return(
                <div style = {{display:'inline-block', width:'100%', height:'auto', color: 'teal',fontSize: '1.5vw', textAlign: 'center', color: '#FEFEFE', }}>
                    <ul style = {{margin:'0', padding:'0', textAlign:'center', fontFamily:'Work Sans', }}>
                        <li  style = {{margin: '2% 1% 0 2%', color: 'teal', display: 'inline-block', textDecoration:'none'}}><Link to = "/" style = {{color: '#FEFEFE'}}>About</Link></li>
                        <li style = {{margin: '2% 1% 0 2%', color: 'teal', display: 'inline-block'}}><Link to = "/projects" style = {{color:'#FEFEFE'}}>Projects</Link></li>
                        <li style = {{margin: '2% 1% 0 2%', color: 'teal', display: 'inline-block'}}><Link to = "/publications" style = {{color:'#FEFEFE'}}>Publications</Link></li>
                        <li style = {{margin:'2% 1% 0 2%', display: 'inline-block'}}><a href = {resume} style = {{color:'#FEFEFE'}}>Resume</a></li>
                    </ul>
                </div>
        );
    }
}

export default Sidebar

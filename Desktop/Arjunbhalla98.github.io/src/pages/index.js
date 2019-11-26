import React from 'react'
import Link from 'gatsby-link'
import pic from '../images/singapore.jpg'
import Anime from 'react-anime'

class About extends React.Component {

    render() {
        return(
            <Anime opacity={[0, 1]} translateX={'0em'} delay="250" duration = "500" easing = "easeInOutQuad">
            <div style = {{margin: '0% 8% 0% 8%'}}>
                <h2 style = {{color:'#373737'}}>About Me</h2>
                <h3>A Short Bio</h3>
                <p>Hi! I'm Arjun Bhalla, a senior at Cornell University, studying Computer Science. Originally from India, I've moved around quite a bit, having lived
                    in Japan, Singapore, and now the United States. I originally entered college as a Physics major, thinking that I'd want to go on to do a PhD and conduct research
                    in experimental or astro physics. However, that quickly changed when I simultaneously began becoming disenchanted with Physics, and thoroughly enjoying
                    the first CS class I had ever taken.
                    <br/><br/>
                    When I'm not programming, I'm an avid musician, playing primarily the guitar, saxophone, and basss guitar. Other than that,
                    I enjoy watching and playing basketball, reading (I'm currently reading <Link to = "//www.amazon.com/Intelligent-Investor-Definitive-Investing-Essentials/dp/0060555661">
                    The Intelligent Investor</Link>), and learning languages.
                </p>
                
                <div style = {{width:'60%', height:'auto', margin:'auto', textAlign:'center',}}>
                    <img src = {pic} style = {{ marginLeft:'auto', marginRight:'auto', display:'block'}}/>
                    <p>The Singapore skyline at night.</p>
                </div>

                <h3>Professional Interests</h3>
                <p>
                    I've explored a number of fields within Computer Science, but my primary interest is in Artificial Intelligence and Machine Learning. I'm currently exploring various side projects in this domain,
                    (as you can see on my <Link to = "/projects">projects page</Link>). Specifically, I'm studying Machine Learning (ML) and attempting to apply it to problems like healthcare, recommendation systems,
                    and financial markets. <br/><br/>
                    
                    While AI is the umbrella field that I'm nearly positive I'll pursue in the future, I have had some experience in other fields. Namely, I have an interest in computer security, especially
                    being part of the Cornell Hacking Club. However, this is a base level interest in understanding and breaking various security systems, as opposed to a passion for 
                    a full security stack, including both the interesting parts (Pen testing, Cryptography) and the less-interesting-but-still-important parts (Network security, Asset Management, Identity confirmation, etc.). Two other
                    major disciplines of Computer Science I have visited in the past are Web Design and Game Development. 
                    <br/>
                </p>
            </div>
            </Anime>
        );
        
    }
}

export default About
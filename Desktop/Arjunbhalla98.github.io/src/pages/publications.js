import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import neural  from '../images/neural_models.pdf'
import Anime from 'react-anime'
import {Provider} from 'react-globally'
import styles from '../../static/style.css'


class PubIndex  extends React.Component {
  constructor(props){
    super(props)
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);

  this.state = {
    isOver: false,
    currentNode: null,
  }
}

handleMouseEnter(e, node){
  try{
    var upNode = document.getElementById(node);
    upNode.style.transform = 'translate(0%, -4%)'
    upNode.style.transition = 'transform 0.5s ease'
    this.setState({
      isOver: true,
      currentNode: node,
  });}catch(err){console.log("Like, seriously though I'll stick to ML")}

  
}

handleMouseOut(e){
  try{
    this.setState({
      isOver: false,
    }) 
    
    var changeElement = document.getElementById(this.state.currentNode);
    changeElement.style.transform = 'translate(0%, 2%)'} catch(err){console.log("Honestly fuck this")}
}

  
  render() {
    
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
      return (
        <div style = {{animation: 'fadeMe 1.25s',}}>
          <Helmet title={siteTitle} />
          <div style = {{margin: '0% 8% 0% 8%'}}>
            <h2  style = {{color:'#373737'}}>Publications and Independent Research</h2>
          
            <div onMouseEnter = {(e) => this.handleMouseEnter(e, this)}  onMouseLeave = {this.handleMouseOut} >
              <a style={{ boxShadow: 'none', color: '#373737', }} href="http://www.cs.cornell.edu/people/tj/publications/wang_etal_19a.pdf">
                <div>
                    <h3 style = {{color: 'teal', textTransform: 'uppercase'}}>
                        Batch Learning from Bandit Feedback through Bias Corrected Reward Imputation
                    </h3>
                    <p>Submitted and accepted to ICML 2019: Real-World Sequential Decision Making Workshop</p>
                    <p>2019</p>
                    <hr/>
                </div>
              </a>    
            </div>

            <div onMouseEnter = {(e) => this.handleMouseEnter(e, this)}  onMouseLeave = {this.handleMouseOut} >
              <a style={{ boxShadow: 'none', color: '#373737', }} href={neural}>
                <div>
                    <h3 style = {{color: 'teal', textTransform: 'uppercase'}}>
                     The Effect of Dropout on Neural Models for Abstractive Text Summarisation   
                    </h3>
                    <p>Independent Research</p>
                    <p>2019</p>
                    <hr/>
                </div>
              </a>    
            </div>
            
            
          </div>
        </div>
      )
    } 
     
  }

export default PubIndex

export const pageQuery = graphql`
  query PubQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    } 
    
  }
`


     
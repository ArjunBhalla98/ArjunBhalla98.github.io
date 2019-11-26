import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Anime from 'react-anime'
import {Provider} from 'react-globally'
import styles from '../../static/style.css'


class BlogIndex extends React.Component {
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
            <h2  style = {{color:'#373737'}}>Projects and Interests</h2>
            {posts.map(({ node }) => {
                    const title = get(node, 'frontmatter.title') || node.fields.slug
                      return (
                        <div onMouseEnter = {(e) => this.handleMouseEnter(e, node.fields.slug)}  onMouseLeave = {this.handleMouseOut} >
                        
                        <Link style={{ boxShadow: 'none', color: '#373737', }} to={node.fields.slug}>
                          <div key={node.fields.slug} id = {node.fields.slug}>
                              <h3 style = {{color: 'teal', textTransform: 'uppercase'}}>
                                  {title}
                              </h3>
                              <small>{node.frontmatter.date}</small>
                              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                              <hr/>
                          </div>
                        </Link>    
                        </div>
                    );
                })}
          </div>
        </div>
      )
    } 
     
  }

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
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


     
import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Anime from 'react-anime'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext
    return (
      <Anime opacity={[0, 1]} translateX={'0em'} delay="0" duration = "500" easing = "easeInOutQuad">
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1>{post.frontmatter.title}</h1> <Link to = "../projects" style = {{float: 'right'}}>Back</Link>
        <p>{post.frontmatter.date}</p>
        
        <Img sizes = {this.props.data.theImage.sizes} style = {{marginBottom: '3%', maxHeight: '300px'}}/>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        
        <ul style = {{listStyleType:'none', display: 'inline-block', width:'100%', margin:'0', padding: '0'}}>
          {previous && (
            <li style = {{display: 'inline-block'}}>
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            </li>
          )}

          {next && (
            <li style = {{display: 'inline-block', float:'right'}}>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            </li>
          )}
        </ul>
      </div>
      </Anime>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
    theImage: imageSharp(id: {regex: $slug}) {
      sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

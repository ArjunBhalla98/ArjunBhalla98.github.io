import React from 'react'
import Link from 'gatsby-link'
import Sidebar from '../components/Sidebar'
import Headbar from '../components/Headbar'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    return (
      <div>
        <Headbar/>
        <Sidebar/>
        <div style = {{color:'#373737', float:'right', width:'75%', padding:'1% 3% 0 3%', background:"#FEFEFE",}}>
          {children()}
        </div>
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template

import React from 'react'

class Headbar extends React.Component{
    render(){
        return(
            <div style = {{zIndex: '1',minWidth: '100%', height:'10px', background:'#373737', position: 'fixed'}}>
            </div>
        );
    }
}

export default Headbar
import React, { Component }  from 'react'

function Divider ({number, text}) {
    // console.log(this.props);
    return (
      <>
        <h5 className="light mt-5 numbered-heading"><spam className="primary">{number}</spam> {text}</h5>
      </>
    )
}

export default Divider;
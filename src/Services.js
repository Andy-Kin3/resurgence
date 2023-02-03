import React from 'react'

function Services(props) {
  return (
    <div className="services">
        <div className="serv_info">
            <label>{props.id}</label>
            <h3>{props.title}</h3>
            <p>{props.info}</p>
        </div>
    </div>
  )
}

export default Services
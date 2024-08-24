import React from 'react'

import "./index.css"



const ChooseUs = props => {
    const {item} = props
    const {heading,description} = item
    console.log(heading)
  return (
    <div className="choose-us-card">
      <h3 className="heading_text">{heading}</h3>
      <p className="description_text">{description}</p>
    </div>
  );
}

export default ChooseUs
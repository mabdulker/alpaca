import React from 'react';

function ImageGenerator() {
    return (
        <div className='image-generator'>
            <Title text='Image Generator'/>
            <ImagePane />
        </div>
    )
}

function Title(props) {
  return (
    <h1>{props.text}</h1>
  )
}

function ImagePane() {
    return (
        <div>
            <img src="./alpaca/backgrounds/blue50" alt="" />
        </div>
    )
}

export default ImageGenerator;
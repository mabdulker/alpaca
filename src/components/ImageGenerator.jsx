import { React, useState } from 'react';
import assets from '../App/Assets.js';

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
    const [background, setBackground] = useState(assets.backgrounds.blue50);

    return (
        <div>
            <img id='background' src={background} alt="background" />
        </div>
    )
}




// function Background() {
//     const [background, setBackground] = useState(assets.backgrounds.blue50);
    
//     function changeBackground(props) {    
//         setBackground(assets.backgrounds.props.name);
//     }

//     return (
//         <img src={background} alt="background" />
//     )
// }

export default ImageGenerator;
import './App.css';
import ImageMaker from '../components/ImagePane';
import { Button, switchAccessory } from '../components/Button';
import assets from './Assets';
import { useState } from 'react';

function App() {
  const [accessory, setAccessory] = useState("backgrounds");
  
  const imageData =  {
    bg: useState(assets.backgrounds.blue50),
    leg: useState(assets.leg.default),
    ear: useState(assets.ears.default),
    neck: useState(assets.neck.default),
    acc: useState(assets.accessories.earings),
    hair: useState(assets.hair.default),
    nose: useState(assets.nose.default),
    mouth: useState(assets.mouth.default),
    eye: useState(assets.eyes.default),
  }

  return (
    <div className='wrap'>
      <div className="alpaca">
        <div className='left'>
          <ImageMaker imageData={imageData} />
        </div>
        <div className='right'>
          <div className='right-top'>
            <h3>Accessories</h3>
            <Button loc={assets} func={switchAccessory(setAccessory)} />
          </div>
          <div className='right-bottom'>
            <h3>Styles</h3>
            <Button loc={assets[accessory] }/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

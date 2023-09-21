import './App.css';
import ImagePane from '../components/ImagePane';
import { Button, switchAccessory } from '../components/Button';
import assets from './Assets';
import { useState } from 'react';

function App() {
  const [accessory, setAccessory] = useState("backgrounds"); 
  const [bg, setBg] = useState(assets.backgrounds.blue50);
  const [eye, setEye] = useState(assets.eyes.default);

  return (
    <div className='wrap'>
      <div className="alpaca">
        <div className='left'>
          <ImagePane 
            bg={bg}
            eye={eye}
          />
        </div>
        <div className='right'>
          <div className='right-top'>
            <h3>Accessories</h3>
            <Button loc={assets} func={switchAccessory(setAccessory)} />
          </div>
          <div className='right-bottom'>
            <h3>Styles</h3>
            <Button loc={assets[accessory]}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

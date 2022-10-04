import React, { useEffect, useRef } from 'react';
import 'aframe-extras';

import './styles.css';
import scanImg from '../../assets/img.png';

export default () => {
  const sceneRef = useRef(null);
  let sceneEl;

  async function onEnter() {
    sceneEl = sceneRef.current;
    sceneEl.addEventListener('renderstart', async () => {
      
      await sceneEl.systems["mindar-image-system"].start(); // start AR 
      console.log(sceneEl.systems["mindar-image-system"])
    });
    return async () => {
      console.log(sceneEl.systems["mindar-image-system"]);
      await sceneEl.systems["mindar-image-system"].stop();
    }
  }

  function handleStop() {
    sceneEl.systems["mindar-image-system"].stop();
  }

  useEffect(() => {
    onEnter();
    window.addEventListener('popstate', handleStop);
  }, []);


  return (
    <div className='w-full h-full overflow-hidden relative flex justify-center align-middle'>
        <a-scene 
        mindar-image="imageTargetSrc: targets.mind; filterMinCF:0.0001; filterBeta: 0.0100; autoStart: false; uiLoading: no; uiError: yes; uiScanning: #scanUi;" 
        color-space="sRGB" 
        embedded renderer="colorManagement: true, physicallyCorrectLights" 
        vr-mode-ui="enabled: false" 
        device-orientation-permission-ui="enabled: false"
        ref={sceneRef} 
      >
        <a-assets>
          {/* <img crossOrigin="anonymous" id="card" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/examples/image-tracking/assets/card-example/card.png" /> */}
          {/* <a-asset-item id="avatarModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/examples/image-tracking/assets/card-example/softmind/scene.gltf"></a-asset-item> */}
        </a-assets>

        <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

        <a-entity mindar-image-target="targetIndex: 0">
          <a-gltf-model 
          rotation="0 0 0 " 
          position="0 0 0" 
          scale="0.7 0.7 0.7" 
          src="Animado.glb"
          animation-mixer="loop: repeat"
          ></a-gltf-model>

        </a-entity>
      </a-scene>

      <div id="scanUi">
        <div className='scanning'>
          <div className='scanInner'>
            <img src={scanImg} alt="" />
            <div className='scanLine'></div>
          </div>
        </div>
      </div>
      <h3 className="absolute bottom-[20px] font-bold text-xl z-20 text-white">
        Developed by <span>Rafael Almeida</span>
      </h3>     
    </div>
  )
}
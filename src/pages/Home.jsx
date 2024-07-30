import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import HomeInfo from '../components/HomeInfo'

import Island from '../models/island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Eagle from '../models/Eagle';

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -3, -43];
    let rotation = [0.25, 4.7, 0];

    if(window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [4, 4, 4];
    }

    return [screenScale, screenPosition, rotation];
  }

  const adjustEagleForScreenSize = () => {
    let screenScale, screenPosition;

    if(window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -10, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -10, -4]
    }

    return [screenScale, screenPosition];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [eagleScale, eaglePosition] = adjustEagleForScreenSize();

  return (
    <section className="w-full h-screen relative">
    <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas 
      className={`w-full h-screen bg-transparent ${
        isRotating ? "cursor-grabbing" : "cursor-grab"
      }`}
      camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={ 2 } />
          <ambientLight intensity={ 0.5 } />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" 
          intensity={ 1 } />

          <Bird />
          <Sky isRotating={isRotating}/>
          <Island 
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Eagle 
            isRotating={isRotating}
            eagleScale={eagleScale}
            eaglePosition={eaglePosition}
            rotation={[0, 20.5, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home
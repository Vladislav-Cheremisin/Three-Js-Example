import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import HallExample from './components/HallExample';
import React from 'react';

function App() {
  const [isMovePossible, setMovePossible] = React.useState(false);
  const [isObjectsSlim, setObjectsSlim] = React.useState(false);

  const toggleMovePossibility = React.useCallback(() => {
    setMovePossible((prevState) => !prevState);
  }, [])

  const toggleSlim = React.useCallback(() => {
    setObjectsSlim((prevState) => !prevState);
  }, [])

  return (
    <>
      <div className='controls'>
        <label>
          <input
            type="checkbox"
            checked={isMovePossible}
            onChange={toggleMovePossibility}
          />
          <span>Разрешить управление мышью</span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={isObjectsSlim}
            onChange={toggleSlim}
          />
          <span>Сплюснуть объекты</span>
        </label>
      </div>
      <Canvas>
        <HallExample isObjectsSlim={isObjectsSlim} />
        <OrbitControls enabled={isMovePossible} />
      </Canvas>
    </>
  )
}

export default App

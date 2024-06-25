import React from "react";
import { Vector3 } from "@react-three/fiber";
import RackExample from "./RackExample";

type HallExampleProps = {
  isObjectsSlim: boolean,
}

const HallExample = React.memo(({ isObjectsSlim }: HallExampleProps) => {
  const lightPosition: Vector3 = React.useMemo(() => [0, 2, 1], []);

  const RACK_POSITIONS: Array<Vector3> = React.useMemo(() => [
    [-4, 0, 0], [-2, 0, 0], [0, 0, 0], [2, 0, 0], [4, 0, 0],
    [-4, 0, -3], [-2, 0, -3], [0, 0, -3], [2, 0, -3], [4, 0, -3],
    [-4, 0, -6], [-2, 0, -6], [0, 0, -6], [2, 0, -6], [4, 0, -6],
  ], [])

  return (
    <>
      <directionalLight position={lightPosition} />
      {RACK_POSITIONS.map((posData) => (
        <RackExample
          isObjectsSlim={isObjectsSlim}
          position={posData}
        />
      ))}
    </>
  )
})

export default HallExample

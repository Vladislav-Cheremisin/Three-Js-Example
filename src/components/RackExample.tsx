import React from "react";
import { Vector3 } from "@react-three/fiber";
import { BoxGeometry, MeshStandardMaterial } from "three";

type RackExampleProps = {
  position: Vector3,
  isObjectsSlim: boolean,
}

const RackExample = React.memo((props: RackExampleProps) => {
  const { position, isObjectsSlim } = props;

  const geometry = React.useMemo(() => {
    if (isObjectsSlim) {
      return new BoxGeometry(1, 0.01, 1)
    } else {
      return new BoxGeometry(1, 2.5, 1)
    }
  }, [isObjectsSlim]);

  const material = React.useMemo(() => new MeshStandardMaterial({ color: "rgb(96, 198, 233)" }), []);

  return (
    <mesh
      geometry={geometry}
      material={material}
      position={position}
    />
  )
})

export default RackExample

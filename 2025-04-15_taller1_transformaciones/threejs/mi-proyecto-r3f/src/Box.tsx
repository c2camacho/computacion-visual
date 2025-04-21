import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three'; // Importar el tipo Mesh

export function Box() {
  const meshRef = useRef<Mesh>(null); // Tipo explícito

  useFrame(({ clock }) => {
    if (!meshRef.current) return; // Verificar null

    const elapsedTime = clock.elapsedTime;
    meshRef.current.position.y = Math.sin(elapsedTime) * 2;
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
    const scale = Math.sin(elapsedTime) * 0.5 + 1;
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}
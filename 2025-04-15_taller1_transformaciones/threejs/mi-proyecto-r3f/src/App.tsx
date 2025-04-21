import { Canvas } from '@react-three/fiber';
import { Box } from './Box';  // Importa desde la misma carpeta (src/)

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Box />
    </Canvas>
  );
}

export default App;
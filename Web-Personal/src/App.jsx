// const RotatingCube = () => {
//   const meshRef = useRef();

//   useFrame(() => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x += 0.01;
//       meshRef.current.rotation.y += 0.01;
//     }
//   });

//   return (
//     <mesh ref={meshRef}>
//       <cylinderGeometry args={[1, 1, 1]}></cylinderGeometry>
//       <meshLambertMaterial
//         color="#468585"
//         emissive={"#468585"}
//       ></meshLambertMaterial>
//       <Sparkles
//         count={100}
//         scale={1}
//         size={6}
//         speed={0.002}
//         noise={0.5}
//         color="yellow"
//       ></Sparkles>
//     </mesh>
//   );
// };

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
    </main>
  );
}

export default App;

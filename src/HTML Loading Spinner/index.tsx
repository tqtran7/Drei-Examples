// @ts-nocheck

import { Canvas } from "@react-three/fiber";
import { Html, OrthographicCamera } from "@react-three/drei";

import "./styles.css";
import Logo from "../assets/Loading.png";

export default function App() {
  return (
    <div className="App">
      <Canvas>
        <OrthographicCamera makeDefault position={[0, 0, 0]} zoom={1} />
        <Html className="htmlwrapper" center distanceFactor={1}>
          <img src={Logo} className="rotate" alt="hi" width="100" height="100"></img>
        </Html>
        <ambientLight intensity={0.1} />
        <directionalLight />
      </Canvas>
    </div>
  );
}

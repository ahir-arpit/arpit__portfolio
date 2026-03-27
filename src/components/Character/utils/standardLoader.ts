import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";

const loadStandardCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  modelPath: string
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  return new Promise<GLTF | null>((resolve, reject) => {
    loader.load(
      modelPath,
      async (gltf) => {
        const character = gltf.scene;
        await renderer.compileAsync(character, camera, scene);
        
        character.traverse((child: any) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            child.frustumCulled = true;
          }
        });

        resolve(gltf);
        dracoLoader.dispose();
      },
      undefined,
      (error) => {
        console.error("Error loading standard GLTF model:", error);
        reject(error);
      }
    );
  });
};

export default loadStandardCharacter;

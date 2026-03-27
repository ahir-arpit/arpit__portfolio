import * as THREE from "three";

const loadPhotoAvatar = (
  photoPath: string
) => {
  const loader = new THREE.TextureLoader();

  return new Promise<THREE.Group | null>((resolve, reject) => {
    loader.load(
      photoPath,
      async (texture) => {
        // Create a plane to hold the photo
        const aspect = texture.image.width / texture.image.height;
        const geometry = new THREE.PlaneGeometry(12 * aspect, 12);
        
        // Use a material that responds to lights for a "3D" feel
        const material = new THREE.MeshStandardMaterial({
          map: texture,
          transparent: true,
          side: THREE.DoubleSide,
          emissive: new THREE.Color("#000000"),
          roughness: 0.5,
          metalness: 0.2,
        });

        const photoMesh = new THREE.Mesh(geometry, material);
        photoMesh.name = "PhotoAvatar";
        photoMesh.castShadow = true;
        photoMesh.receiveShadow = true;

        // Group to manage pivot and child objects (like lights or rims)
        const group = new THREE.Group();
        group.name = "PhotoAvatarGroup";
        group.add(photoMesh);

        // Add a soft rim light effect via another plane or glow
        const glowGeo = new THREE.PlaneGeometry(13 * aspect, 13);
        const glowMat = new THREE.MeshBasicMaterial({
          color: new THREE.Color("#B0F5EA"),
          transparent: true,
          opacity: 0.1,
          side: THREE.BackSide,
        });
        const glowMesh = new THREE.Mesh(glowGeo, glowMat);
        glowMesh.position.z = -0.1;
        group.add(glowMesh);

        resolve(group);
      },
      undefined,
      (error) => {
        console.error("Error loading photo avatar:", error);
        reject(error);
      }
    );
  });
};

export default loadPhotoAvatar;

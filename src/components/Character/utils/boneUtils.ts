import * as THREE from "three";

/**
 * Normalizes bone names from different rigs to a common standard.
 * Useful for mapping Ready Player Me or Mixamo rigs to specific code references.
 */
export const getBone = (character: THREE.Object3D, possibleNames: string[]): THREE.Object3D | null => {
  for (const name of possibleNames) {
    const bone = character.getObjectByName(name);
    if (bone) return bone;
  }
  
  // Try case-insensitive search or contains search if not found
  let found: THREE.Object3D | null = null;
  character.traverse((child) => {
    if (found) return;
    for (const name of possibleNames) {
      if (child.name.toLowerCase().includes(name.toLowerCase())) {
        found = child;
        return;
      }
    }
  });

  return found;
};

export const BONE_MAP = {
  HEAD: ["spine006", "Head", "Neck"],
  NECK: ["spine005", "Neck", "Spine2"],
  SHOULDER_R: ["upper_armR", "RightArm"],
  SHOULDER_L: ["upper_armL", "LeftArm"],
};

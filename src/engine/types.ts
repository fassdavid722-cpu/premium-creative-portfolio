// ─── Scene Engine Types ──────────────────────────────────────────
// Extended project schema supporting immersive 3D environments

export interface EnvironmentConfig {
  type: 'gallery' | 'restaurant' | 'corporate' | 'fashion' | 'event' | 'studio';
  wallColor: string;
  floorColor: string;
  accentColor: string;
  fogColor: string;
  fogNear: number;
  fogFar: number;
  ambientIntensity: number;
  spotlights: SpotlightConfig[];
}

export interface SpotlightConfig {
  position: [number, number, number];
  color: string;
  intensity: number;
  target: [number, number, number];
  angle: number;
  penumbra: number;
}

export interface CameraPathPoint {
  position: [number, number, number];
  lookAt: [number, number, number];
}

export interface InteractiveAsset {
  id: string;
  type: 'poster' | 'screen' | 'card' | 'pedestal' | 'wall-art' | 'banner' | 'menu-board';
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  imageIndex: number;  // index into project gallery images
  title?: string;
  description?: string;
  interactive: boolean;
}

export interface ImmersiveProject extends Project {
  environment: EnvironmentConfig;
  cameraPath: CameraPathPoint[];
  assets: InteractiveAsset[];
  deliverables: string[];
  software: string[];
  typography: string[];
  brandColors: string[];
}

// Re-export the base Project interface
export { } from '@/data/portfolio';
import type { Project } from '@/data/portfolio';

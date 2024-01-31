export interface WheelConfig {
  segments: string[];
  segColors: string[];
  winningSegment: string;
  onFinished: (winner: string) => void;
  onRotate?: (winner: string) => void;
  onRotatefinish?: (winner: string) => void;
  primaryColor: string;
  primaryColoraround: string;
  contrastColor: string;
  buttonText: string;
  isOnlyOnce: boolean;
  size: number;
  upDuration: number;
  downDuration: number;
  fontFamily?: string;
  width?: number;
  height?: number;
}

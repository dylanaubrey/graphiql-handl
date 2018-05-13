export interface IconProps {
  height?: string;
  symbol: string;
  width?: string;
}

export interface Symbols {
  [key: string]: { path: string, viewBox: string };
}

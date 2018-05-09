export interface IconProps {
  size?: string;
  symbol: string;
}

export interface Symbols {
  [key: string]: { path: string, viewBox: string };
}

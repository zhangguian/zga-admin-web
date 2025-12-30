
export const ThemeMode_const =  {
  Light:"light",
  Dark: "dark",
} as const;
export type ThemeMode = typeof ThemeMode_const[keyof typeof ThemeMode_const];

export const ThemeLayout_const = {
  Vertical: "vertical",
  Horizontal: "horizontal",
  Mini: "mini"
} as const;
export type ThemeLayout = typeof ThemeLayout_const[keyof typeof ThemeLayout_const];

export const ThemeColorPresets_const = {
  Default: "default",
  Cyan: "cyan",
  Purple: "purple",
  Blue: "blue"
} as const;
export type ThemeColorPresets = typeof ThemeColorPresets_const[keyof typeof ThemeColorPresets_const];

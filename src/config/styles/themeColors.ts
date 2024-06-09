export const colors = {
  text: {
    primary: "#252525",
    secondary: "#FFFFFF",
  },
  color: {
    disabled: "#e0e0e0",
    greyLight: "#fafafa",
    greyLighten: "#f5f5f5",
    grey: "#9e9e9e",
    greyDarken: "#424242",
    greyDark: "#212121",
    green: "#c8e6c9",
    greenDark: "#81c784",
    greenWarm: "#dcedc8",
    red: "#ffcdd2",
    redDark: "#e57373",
    blue: "#bbdefb",
    blueDark: "#64b5f6",
    blueWarm: "#b2ebf2",
    blueWarmDark: "#4dd0e1",
    yellow: "#ffecb3",
  },
};

declare module "@mui/material/styles" {
  interface Palette {
    color: {
      disabled: string;
      greyLight: string;
      greyLighten: string;
      grey: string;
      greyDarken: string;
      greyDark: string;
      green: string;
      greenDark: string;
      greenWarm: string;
      red: string;
      redDark: string;
      blue: string;
      blueDark: string;
      blueWarm: string;
      blueWarmDark: string;
      yellow: string;
    };
  }
  interface PaletteOptions {
    color?: {
      disabled?: string;
      greyLight?: string;
      greyLighten?: string;
      grey?: string;
      greyDarken?: string;
      greyDark?: string;
      green?: string;
      greenDark?: string;
      greenWarm?: string;
      red?: string;
      redDark?: string;
      blue?: string;
      blueDark?: string;
      blueWarm?: string;
      blueWarmDark?: string;
      yellow?: string;
    };
  }
}

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
    };
  }
}

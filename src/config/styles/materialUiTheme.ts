import {
  createStyles,
  ThemeOptions,
  PaletteOptions,
} from "@mui/material/styles";
import { colors } from "./themeColors";

export const themeColors = () =>
  createStyles({
    palette: colors,
  }) as PaletteOptions;

export const theme = () =>
  createStyles({
    breakpoints: {
      values: {
        xs: 0,
        sm: 360,
        md: 768,
        lg: 1024,
        xl: 1440,
      },
    },
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            padding: "0",
            borderRadius: "6px",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "1",
            letterSpacing: 0,
            textTransform: "none",
            "&.primary": {
              backgroundColor: colors.color.greyDark,
              color: colors.text.secondary,
              "&:hover": {
                backgroundColor: colors.color.greyDarken,
              },
              "&:focus": {
                backgroundColor: colors.color.greyDarken,
              },
              "&:active": {
                backgroundColor: colors.color.greyDarken,
              },
              "&:disabled": {
                backgroundColor: colors.color.greyDarken,
              },
            },
            "&.secondary": {
              backgroundColor: colors.color.grey,
              color: colors.text.secondary,
              "&:hover": {
                backgroundColor: colors.color.greyDarken,
              },
              "&:focus": {
                backgroundColor: colors.color.greyDarken,
              },
              "&:active": {
                backgroundColor: colors.color.greyDarken,
              },
              "&:disabled": {
                backgroundColor: colors.color.greyDarken,
              },
            },
          },
        },
      },
    },
  }) as ThemeOptions;

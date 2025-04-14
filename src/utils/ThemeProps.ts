// src/theme.ts or wherever your theme file is
import { createTheme } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material";

// Extend the MUI Theme to include custom palette properties
declare module "@mui/material/styles" {
    interface Palette {
        button: {
            primary: string;
            secondary: string;
        };
    }
    interface PaletteOptions {
        button?: {
            primary: string;
            secondary: string;
        };
    }

    interface TypeText {
        darkGray: string;
        main: string;
    }
}

const common: ThemeOptions = {
    typography: {
        fontFamily: "inter",
        fontWeightRegular: 500,
        fontSize: 10,
        h1: {
            fontSize: "58px",
        },
        h2: {
            fontSize: "36px",
        },
        h4: {
            fontSize: "20px",
        },
        h5: {
            fontSize: "18px",
        },
        h6: {
            fontSize: "16px",
        },
    },
};

export const light = createTheme({
    palette: {
        primary: {
            main: "#263238",
        },
        text: {
            primary: "#FFBB00",
            secondary: "#65624C",
            darkGray: "#CEC6C6", // custom property
        },
        button: {
            primary: "#FFBB00",
            secondary: "#F9F9F9",
        },
    },
    ...common,
});

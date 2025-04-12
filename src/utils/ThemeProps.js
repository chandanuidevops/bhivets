import { createTheme } from "@mui/material";
const common = {
    typography: {
        fontFamily: "inter",
        fontWeight: 500,
        fontSize: 10,
        h1: {
            fontSize: '58px',
        },
        h2: {
            fontSize: '36px',
        },
        h4: {
            fontSize: '20px', // override default
        },
        h5: {
            fontSize: '18px',
        },
        h6: {
            fontSize: '16px',
        }

    },
};

export const light = createTheme({

    palette: {
        primary: {
            main: '#263238', // deep purple
        },
        text: {
            main: '#263238',
            primary: '#FFBB00',
            secondary: '#65624C',
            darkGray: '#CEC6C6'
        },
        button: {
            primary: '#FFBB00',
            secondary: '#F9F9F9'
        }
    },

    ...common,
});

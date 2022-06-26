import {PaletteMode} from "@mui/material";
import {amber, deepOrange, grey, teal} from '@mui/material/colors';

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: amber,
                divider: amber[200],
                text: {
                    primary: grey[900],
                    secondary: grey[800],
                },
            }
            : {
                // palette values for dark mode
                primary: teal,
                divider: deepOrange[700],
                background: {
                    default: teal[800],
                    paper: teal[900],
                },
                text: {
                    primary: '#fff',
                    secondary: grey[500],
                },
            }),
    },
});

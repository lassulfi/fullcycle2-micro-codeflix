import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";
import { Theme } from "@material-ui/core";

const palette: PaletteOptions = {
    background: {
        default: "#1f1f1f"
    }, 
    error: {
        main: red.A400
    },
    action: {
        active: "#ffffff"
    },
    text: {
        primary: "#ffffff",
       secondary: "#8c8c8d" 
    }
}

const theme = createMuiTheme({
    palette,
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            mobile: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: palette.background?.default,
            }
        },
        MuiDialog: {
            paper: {
                backgroundColor: palette.background?.default,
            },
        }
    }
});

export default theme;

const backgroundColor = '#3b3b3a';

export const menuTheme = (theme: Theme): Theme => ({
    ...theme,
    overrides: {
        ...theme.overrides,
        MuiPaper: {
            root: {
                backgroundColor,
                padding: '0 10px',
                width: '300px',
            }
        },
        MuiMenuItem: {
            root: {
                borderBottom: '2px solid transparent',
                '&:hover': {
                    borderBottom: '2px solid #ffde39',
                    backgroundColor,
                },
            }
        }
    }
});
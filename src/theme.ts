import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";

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
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: palette.background?.default,
            }
        }
    }
});

export default theme;
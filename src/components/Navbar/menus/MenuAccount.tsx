import { Box, ListItemIcon, ListItemText, Menu as MuiMenu, MenuItem, MuiThemeProvider } from "@material-ui/core";
import Arrow from "@material-ui/icons/KeyboardArrowDown";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import useMenu from "../../../hooks/useMenu";
import { menuTheme } from "../../../theme";
import UserInformation from "../../UserInformation";

const MenuAccount: React.FunctionComponent = () => {
    const { open, anchorEl, handleOpen, handleClose } = useMenu();

    return (
        <MuiThemeProvider theme={menuTheme}>
            <div>
                <Box
                    display="flex"
                    alignItems={"center"}
                    flexDirection={"row"}
                    px={1}
                    onClick={handleOpen}
                    style={{ cursor: "pointer" }}
                >
                    <UserInformation />
                    <Arrow />
                </Box>
                <MuiMenu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                    getContentAnchorEl={null}
                >
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon style={{ color: "inherit" }}>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sair" />
                    </MenuItem>
                </MuiMenu>
            </div>
        </MuiThemeProvider>
    );
}

export default MenuAccount;
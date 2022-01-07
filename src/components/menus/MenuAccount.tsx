import { Box, ListItemIcon, ListItemText, Menu as MuiMenu, MenuItem } from "@material-ui/core";
import Arrow from "@material-ui/icons/KeyboardArrowDown";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import useMenu from "../../hooks/useMenu";

const MenuAccount: React.FunctionComponent = () => {
    const { open, anchorEl, handleOpen, handleClose } = useMenu();

    return (
        <div>
            <Box
                display="flex"
                alignItems={"center"}
                flexDirection={"row"}
                px={1}
                onClick={handleOpen}
                style={{ cursor: "pointer" }}
            >
                Nome do Usuário
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
    );
}

export default MenuAccount;
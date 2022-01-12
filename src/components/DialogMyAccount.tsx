import { AppBar, Dialog, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from "@material-ui/core";
import { useCallback } from "react";
import TransitionSlide from "./Transitions/TransitionSlide";
import CloseIcon from "@material-ui/icons/Close";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import UserInformation from "./UserInformation";

interface DialogMyAccountProps {
    open: boolean;
    onClose?: () => void;
}

const DialogMyAccount: React.FunctionComponent<DialogMyAccountProps> = (props) => {
    const { open, onClose } = props;

    const handleClose = useCallback(() => {
        onClose && onClose();
    }, [onClose])

    return (
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={TransitionSlide}
        >
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6">Minha Conta</Typography>
                </Toolbar>
            </AppBar>
            <List>
                <ListItem>
                    <UserInformation />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon color="primary">
                        <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sair" />
                </ListItem>
            </List>
        </Dialog>
    );
}

export default DialogMyAccount;
import { AppBar, Dialog, IconButton, makeStyles, Toolbar } from "@material-ui/core";
import TransitionSlide from "../Transitions/TransitionSlide";
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import InputSearch from "../InputSearch";
import { useCallback, useContext } from "react";
import DialogSearchContext from "./DialogSearchContext";

const useStyles = makeStyles((theme) => ({
    iconButtonRoot: {
        borderRadius: 0,
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    touchRippleChild: {
        borderRadius: 0,
    }
}));

interface DialogSearchProps {
    open: boolean;
}

const DialogSearch: React.FunctionComponent<DialogSearchProps> = (props) => {
    const { open } = props

    const classes = useStyles();

    const dialogContext = useContext(DialogSearchContext);

    const handleClose = useCallback(() => {
        dialogContext.hide();
    }, [dialogContext]);

    return (
        <Dialog fullScreen open={open} TransitionComponent={TransitionSlide}>
            <AppBar position={"static"}>
                <Toolbar>
                    <IconButton
                        classes={{ root: classes.iconButtonRoot }}
                        TouchRippleProps={{ classes: { child: classes.touchRippleChild } }}
                        edge="start"
                        onClick={handleClose}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <InputSearch />
                </Toolbar>
            </AppBar>
        </Dialog>
    );
}

export default DialogSearch;
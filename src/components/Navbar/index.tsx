import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import Notifications from "./Notifications";
import Title from "./Title";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

const Navbar: React.FunctionComponent = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <Title />
                    <Notifications />
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
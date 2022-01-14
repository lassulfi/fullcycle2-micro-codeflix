import { AppBar, BottomNavigation, makeStyles } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";
import { useCallback, useMemo, useState } from "react";
import { matchPath, useHistory, useLocation } from "react-router-dom";
import routes from "../../routes";
import DialogMyAccount from "../DialogMyAccount";
import FooterCategoriesItem from "./FooterCategoriesItem";
import FooterItem from "./FooterItem";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: theme.palette.background.default,
        bottom: 0,
        top: "auto",
        borderTop: `1px solid ${theme.palette.text.secondary}`,
        height: "48px",
    },
    bottomNavigation: {
        backgroundColor: "inherit",
    }
}));

const Footer: React.FunctionComponent = () => {
    const classes = useStyles();

    const [openDialogAccount, setOpenDialogAccount] = useState(false);
    const { push } = useHistory();
    const { pathname } = useLocation();

    const currentRoute = useMemo(
        () => routes.find(r => matchPath(pathname, r))?.name,
        [pathname]
    );

    const goToHome = useCallback(() => {
        push("/");
    }, [push]);

    const onClickMyAccount = useCallback(() => {
        setOpenDialogAccount(true);
    }, []);

    const onDialogAccountClose = useCallback(() => {
        setOpenDialogAccount(false);
    }, []);

    return (
        <div className={classes.root}>
            <AppBar
                classes={{ root: classes.appBar }}
                position="fixed"
                color="primary"
            >
                <BottomNavigation
                    className={classes.bottomNavigation}
                    showLabels
                    value={currentRoute}
                >
                    <FooterItem
                        label="Home"
                        value="home"
                        icon={<HomeIcon />}
                        onClick={goToHome}
                    />
                    <FooterCategoriesItem currentRoute={currentRoute} />
                    <FooterItem label="Notificações" icon={<NotificationsIcon />} />
                    <FooterItem
                        label="Conta"
                        icon={<PersonIcon />}
                        onClick={onClickMyAccount}
                    />
                </BottomNavigation>
            </AppBar>
            <DialogMyAccount
                open={openDialogAccount}
                onClose={onDialogAccountClose}
            />
        </div>
    );
}

export default Footer;
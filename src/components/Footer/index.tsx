import { AppBar, BottomNavigation, makeStyles } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";
import { useCallback, useState } from "react";
import DialogMyAccount from "../DialogMyAccount";
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
                >
                    <FooterItem label="Home" value="home" icon={<HomeIcon />} />
                    <FooterItem label="Categories" value="categories" icon={<HomeIcon />} />
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
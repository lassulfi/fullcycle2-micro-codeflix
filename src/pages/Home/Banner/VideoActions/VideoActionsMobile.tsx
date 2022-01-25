import { BottomNavigation, BottomNavigationAction, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import PlayCircleOutline from "@material-ui/icons/PlayCircleOutline";
import AddCircleOutline from "@material-ui/icons/AddCircleOutline";
import InfoIcon from "@material-ui/icons/Info";
import { BANNER_VIDEO_ACTIONS_MEDIA_QUERY } from "../../../../theme";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "inherit",
    },
    navigationIcon: {
        color: theme.palette.text.primary,
    }
}));

interface VideoActionsMobileProps {

}

const VideoActionsMobile: React.FunctionComponent<VideoActionsMobileProps> = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isDown700 = useMediaQuery(theme.breakpoints.down(BANNER_VIDEO_ACTIONS_MEDIA_QUERY));

    return isDown700
        ? (
            <BottomNavigation
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction
                    label="Play"
                    icon={<PlayCircleOutline />}
                    className={classes.navigationIcon}
                />
                <BottomNavigationAction
                    label="Minha lista"
                    icon={<AddCircleOutline />}
                    className={classes.navigationIcon}
                />
                <BottomNavigationAction
                    label="Info"
                    icon={<InfoIcon />}
                    className={classes.navigationIcon}
                />
            </BottomNavigation>
        )
        : null;
}

export default VideoActionsMobile;
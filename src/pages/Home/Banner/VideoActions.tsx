import { makeStyles } from "@material-ui/core";
import VideoLink from "../../../components/Video/VideoLink";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
});

interface VideoActionsProps {
    
}
 
const VideoActions: React.FunctionComponent<VideoActionsProps> = (props) => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <VideoLink>Play</VideoLink>
            <VideoLink>Minha Lista</VideoLink>
            <VideoLink>Info</VideoLink>
        </div>
     );
}
 
export default VideoActions;
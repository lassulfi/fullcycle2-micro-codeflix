import { Grid } from "@material-ui/core";
import MenuGenre from "../components/MenuGenre";
import Page from "../components/Page";
import Title from "../components/Title";
import VideoList from "../components/Video/VideoList";

interface VideosByCategoryProps {

}

const VideosByCategory: React.FunctionComponent<VideosByCategoryProps> = (props) => {
    return (
        <Page margin="large">
            <Grid container>
                <Grid item xs={7} sm={9}>
                    <Title>Filmes</Title>
                </Grid>
                <Grid item xs={5} sm={3}>
                    <MenuGenre />
                </Grid>
            </Grid>
            <VideoList videos={[]}/>
        </Page>
    );
}

export default VideosByCategory;
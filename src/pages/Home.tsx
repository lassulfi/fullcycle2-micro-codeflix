import Page from "../components/Page";
import VideoThumbnail from "../components/Video/VideoThumbnail";
import banner from '../static/img/1-vid-banner-01.jpg';

const Home: React.FunctionComponent = (props) => {
    return (
        <Page>
            <VideoThumbnail
                ImgProps={{
                    src: banner,
                }}
            />
        </Page>
    );
};

export default Home;
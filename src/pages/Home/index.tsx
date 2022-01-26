import Page from "../../components/Page";
import Banner from "./Banner";
import Sections from "./Sections";

const Home: React.FunctionComponent = (props) => {
    return (
        <Page>
            <Banner />
            <Sections />
        </Page>
    );
};

export default Home;
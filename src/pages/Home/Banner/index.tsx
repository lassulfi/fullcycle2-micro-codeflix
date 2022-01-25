import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useMemo } from "react";
import Slider, { SliderProps } from "../../../components/Slider";
import SliderArrow from "../../../components/Slider/SliderArrow";
import VideoThumbnail from "../../../components/Video/VideoThumbnail";
import useIsSmallWindow from "../../../hooks/useIsSmallWindow";
import banner from "../../../static/img/1-vid-banner-01.jpg";
import bannerHalf from "../../../static/img/1-vid-banner-half.jpg"
import BannerRating from "./BannerRating";
import SliderStepper from "./SliderStepper";
import VideoActionsMobile from "./VideoActions/VideoActionsMobile";
import VideoContent from "./VideoContent";

const useStyles = makeStyles((theme: Theme) => ({
    rootImage: {
        position: "relative",
        marginRight: "4px",
        "&:focus": {
            outlineColor: theme.palette.text.primary,
        },
    },
    image: {
        [theme.breakpoints.down(400)]: {
            width: "300px",
            height: "169px",
        },
        [theme.breakpoints.up(400)]: {
            width: "350px",
            height: "197px",
        },
        [theme.breakpoints.up(700)]: {
            width: "650px",
            height: "366px",
        },
        [theme.breakpoints.up(1200)]: {
            width: "1150px",
            height: "647px",
        },
    },
    get slider() {
        return Object.fromEntries(
            Object.entries(this.image).map(size => [
                size[0],
                {
                    "& .slick-list, & .slick-track": { height: size[1].height },
                }
            ])
        );
    }
}))

const Banner: React.FunctionComponent = (props) => {
    const classes = useStyles();
    const isSmallWindow = useIsSmallWindow();
    const classSlider = classes.slider;
    const sliderProps: SliderProps = useMemo(() => ({
        className: classSlider,
        centerMode: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
        variableWidth: true,
        arrows: !isSmallWindow,
        prevArrow: <SliderArrow dir="left" />,
        nextArrow: <SliderArrow dir="right" />,
    }), [isSmallWindow, classSlider]);
    const thumbnail = isSmallWindow ? banner : bannerHalf;

    return (
        <div>
            <Slider {...sliderProps}>
                {Array.from(new Array(6).keys())
                    .map(() => thumbnail)
                    .map((v) => (
                        <VideoThumbnail
                            key={v}
                            classes={{ root: classes.rootImage, image: classes.image }}
                            ImgProps={{ src: thumbnail, }}
                        >
                            <VideoContent video={{
                                id: "0000",
                                title: "Aladdin",
                                categories: [
                                    {
                                        id: "0000",
                                        name: "Filmes",
                                        is_active: true,
                                    }
                                ]
                            }} />
                            <BannerRating rating="14" />
                        </VideoThumbnail>
                    ))
                }
            </Slider>
            {!isSmallWindow && <SliderStepper maxSteps={5} activeStep={0}/>}
            <VideoActionsMobile />
        </div>
    );
};

export default Banner;
import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import { Video } from "../../utils/models";
import VideoThumbnail from "./VideoThumbnail";
import banner from "../../static/img/1-vid-banner-01.jpg";
import bannerThumb from "../../static/img/1-vid-thumb-01.jpg";
import { useMemo } from "react";
import SliderArrow from "../Slider/SliderArrow";
import Slider, { SliderProps } from "../Slider";
import useIsSmallWindow from "../../hooks/useIsSmallWindow";
import Title from "./Title";

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(0, 3),
    },
    videoThumbnailRoot: {
        marginRight: "4px",
        "&:focus": {
            outlineColor: theme.palette.text.primary,
        },
    },
}));

interface SectionSliderProps {
    title: string;
    videos: Video[];
}

const SectionSlider: React.FunctionComponent<SectionSliderProps> = (props) => {
    const { title } = props;
    const classes = useStyles();
    const isSmallWindow = useIsSmallWindow();
    const theme = useTheme();
    const isDown1200 = useMediaQuery(theme.breakpoints.down(1200));

    const thumbnail = isDown1200 ? bannerThumb : banner;
    const sliderProps: SliderProps = useMemo(() => ({
        // className: classSlider,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToScroll: 3,
        variableWidth: true,
        arrows: !isSmallWindow,
        prevArrow: <SliderArrow dir="left" />,
        nextArrow: <SliderArrow dir="right" />,
    }), [isSmallWindow]);

    return (
        <div>
            <Title>{title}</Title>
            <div className={classes.root}>
                <Slider {...sliderProps}>
                    {Array.from(new Array(6).keys())
                        .map(() => thumbnail)
                        .map((v, index) => {
                            return (
                                <VideoThumbnail
                                    key={v}
                                    classes={{ root: classes.videoThumbnailRoot }}
                                    ImgProps={{ src: thumbnail, }}
                                />
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    );
}

export default SectionSlider;
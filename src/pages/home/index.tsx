import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, Typography, useTheme, ClickAwayListener, } from "@mui/material";
import useStyles from "./style";
import Amenities from "./Amenities";
import Spaces from "./Spaces";
import AppPromotion from "./AppPromotion";
import { Images } from "../../assets/images/image";
import { Video } from '../../assets/video'
import { getHomeData } from "../../redux/slices/homeSlice";
import { useAppDispatch, } from "../../redux/hooks";
const Home: React.FC = () => {
    const classes = useStyles();
    const theme = useTheme();
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getHomeData())
    }, [])
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlayVideo = () => {
        setIsPlaying(true);
        // Wait for the video element to render before calling play
        setTimeout(() => {
            videoRef.current?.play();
        }, 0);
    };
    const handleClose = () => {
        setIsPlaying(false);
        videoRef.current?.pause();
    }
    return (
        <Box className={classes.homeContainer}>
            {/* Banner Section */}
            <Box
                className={classes.bannerSection}
                sx={{
                    backgroundImage: `url(${Images.bgimg})`,

                }}
            >
                <Box className="main_container">
                    <Grid container spacing={0}>
                        <Grid
                            item
                            md={8}
                            sm={12}
                            sx={{
                                [theme.breakpoints.down("md")]: {
                                    order: 2,
                                },
                            }}
                        >
                            <Typography variant="h1" className={classes.bannerText}>
                                Host your meeting with world-class amenities. Starting at
                                <span> ₹199/-!</span>
                            </Typography>
                        </Grid>
                        <Grid item md={4} sm={12}>

                            <div style={{ textAlign: 'center' }}>
                                {isPlaying ? (
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <video
                                            ref={videoRef}
                                            controls
                                            style={{ maxHeight: '388px' }}
                                            src={Video.coworking}
                                        />
                                    </ClickAwayListener>

                                ) : (
                                    <img src={Images.coworking} alt="coworking" onClick={handlePlayVideo} className={classes.bannerImg} />

                                )}
                            </div>


                        </Grid>
                    </Grid>
                </Box>
            </Box>

            {/* Amenities & Spaces Section */}
            <Box
                className={` ${classes.chooseSection} main_container`}

            >
                <Typography variant="h2" className={classes.mainHeading}>
                    Why Choose us?
                </Typography>
                <Amenities />

                <Typography variant="h2" className={classes.mainHeading}>
                    Our Space Overview
                </Typography>
                <Spaces />

                <Box>
                    <Typography variant="h2" className={classes.promotionHeading}>
                        Download our app now
                    </Typography>
                    <AppPromotion />
                </Box>
            </Box>
        </Box>
    );
};

export default Home;

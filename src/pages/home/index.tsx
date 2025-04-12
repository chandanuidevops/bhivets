import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import useStyles from "./style";
import Amenities from "./Amenities";
import Spaces from "./Spaces";
import AppPromotion from "./AppPromotion";
import { Images } from "../../assets/images/image";

const Home: React.FC = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Box className={classes.homeContainer}>
            {/* Banner Section */}
            <Box
                sx={{
                    backgroundImage: `url(${Images.bgimg})`,
                    backgroundSize: "75% auto",
                    backgroundPosition: "left",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <Box className="main_container">
                    <Grid container spacing={0}>
                        <Grid
                            item
                            sm={8}
                            sx={{
                                [theme.breakpoints.down("sm")]: {
                                    order: 2,
                                },
                            }}
                        >
                            <Typography variant="h1" className={classes.bannerText}>
                                Host your meeting with world-class amenities. Starting at
                                <span> ₹199/-!</span>
                            </Typography>
                        </Grid>
                        <Grid item sm={4}>
                            <img src={Images.coworking} alt="coworking" />
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            {/* Amenities & Spaces Section */}
            <Box
                className="main_container"
                sx={{
                    background: "#f9faff",
                    paddingBottom: "30px!important",
                }}
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

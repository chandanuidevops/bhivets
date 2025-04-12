import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { LuCalendarCog, LuArmchair } from "react-icons/lu";
import { CiDumbbell } from "react-icons/ci";
import { FaWifi } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineSportsTennis } from "react-icons/md";


import useStyles from "./style";

interface Amenity {
    icon: React.ElementType;
    label: string;
}

const amenities: Amenity[] = [
    { icon: LuCalendarCog as React.ElementType, label: "Community Events" },
    { icon: CiDumbbell as React.ElementType, label: "Gym Facilities" },
    { icon: FaWifi as React.ElementType, label: "High-Speed WiFi" },
    { icon: GiCoffeeCup as React.ElementType, label: "Cafe & Tea Bar" },
    { icon: RiMoneyRupeeCircleLine as React.ElementType, label: "Affordable" },
    { icon: LuArmchair as React.ElementType, label: "Comfort Lounges" },
    { icon: FaRegClock as React.ElementType, label: "Quick Booking" },
    { icon: MdOutlineSportsTennis as React.ElementType, label: "Sports Area" },
];

const Amenities: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={{ sm: 2, xs: 2, md: 0 }} sx={{ mb: 6 }}>
            {amenities.map((item) => {
                const Icon = item.icon;
                return (
                    <Grid key={item.label} item sm={3} xs={6}>
                        <Box className={classes.amenityContainer}>
                            <span className={classes.amenityIcon}>
                                <Icon /> {/* ✅ No more TypeScript errors */}
                            </span>
                            <Box>
                                <Typography
                                    variant="h6"
                                    color="primary"
                                    sx={{ fontWeight: "500 !important" }}
                                >
                                    {item.label}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    color="primary"
                                    sx={{ fontWeight: 400, fontSize: "14px" }}
                                    className="secondary"
                                >
                                    One liner details about the failure
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default Amenities;

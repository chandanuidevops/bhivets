import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import spaces from '../../utils/data.json';
import { Images } from '../../assets/images/image';
import useStyles from './style';
import { MdAssistantDirection } from 'react-icons/md';
import { useAppSelector } from '../../redux/hooks';
import DistanceDisplay from './DistanceDisplay'
import { ActionButton } from './ActionButton';
// Explicitly typing the icon to be an SVG component
const MdAssistantDirectionIcon = MdAssistantDirection as React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface Space {
    address: string;
    images: string[];
    day_pass_price: number;
    latitude: number;
    longitude: number;
    day_pass_discounts_percentage: {
        [key: number]: {
            value: number;

        };
    };
}






const openInMaps = (latitude, longitude) => {
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(url, '_blank');
};


const Spaces: React.FC = () => {
    const classes = useStyles();
    const data = useAppSelector(({ home }) => home.data)
    console.log('data>', data)


    return (
        <Grid container spacing={5}>
            {spaces.map((item: Space) => (
                <Grid item md={6} lg={4} xs={12} key={item.address}>
                    <Card className={classes.spaceCard} elevation={1}>
                        <CardHeader
                            title={
                                <Box className={classes.cardHeader}>
                                    <Typography variant="h6" color={'main'} >
                                        {item.address?.length > 70
                                            ? item.address?.substr(0, 70) + '...'
                                            : item.address}
                                    </Typography>
                                    <Box className={classes.distance} onClick={
                                        () => openInMaps(item.latitude, item.longitude)
                                    }>
                                        {/* Use the icon after typecasting */}
                                        <MdAssistantDirectionIcon style={{ fontSize: '16px', color: '#000' }} />
                                        <Box
                                            sx={{ fontSize: '8px', }}> <DistanceDisplay
                                                latitude={item.latitude}
                                                longitude={item.longitude}
                                            /></Box>

                                    </Box>
                                </Box>
                            }
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={Images[item.images[0]]}
                            alt="Space image"
                        />
                        <CardActions
                            disableSpacing
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                pl: 0,
                                pr: 0,
                            }}
                        >
                            <ActionButton type="day"
                                price={item.day_pass_price}
                                discount={null}
                            />
                            <ActionButton type="bulk"
                                price={item.day_pass_price * 10}
                                discount={item.day_pass_discounts_percentage?.[10].value || 0}

                            />
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Spaces;

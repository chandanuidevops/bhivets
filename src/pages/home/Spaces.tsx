import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Box, Button, Grid } from '@mui/material';
import spaces from '../../utils/data.json';
import { Images } from '../../assets/images/image';
import useStyles from './style';
import { MdAssistantDirection } from 'react-icons/md';

// Explicitly typing the icon to be an SVG component
const MdAssistantDirectionIcon = MdAssistantDirection as React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface Space {
    address: string;
    images: string[];
}

interface ActionButtonProps {
    type: 'day' | 'bulk';
}

export const ActionButton: React.FC<ActionButtonProps> = ({ type }) => {
    const classes = useStyles();
    return (
        <Button className={`${classes.spacesBtn} ${type === 'day' ? 'day' : 'bulk'}`}>
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Box>
                    <Typography className={'btnTitle'}>
                        {type === 'day' ? 'Day' : 'Bulk'} Pass
                    </Typography>
                    <Typography className="priceTitle">
                        ₹ 249/ <span> Day </span>
                    </Typography>
                </Box>
                <Box>
                    <img src={Images.arrow1} alt="arrow" />
                    <img src={Images.arrow3} alt="arrow" />
                    <img src={Images.arrow2} alt="arrow" />
                </Box>
            </Box>
        </Button>
    );
};

const Spaces: React.FC = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={5}>
            {spaces.map((item: Space) => (
                <Grid item sm={4} xs={12} key={item.address}>
                    <Card className={classes.spaceCard} elevation={1}>
                        <CardHeader
                            title={
                                <Box className={classes.cardHeader}>
                                    <Typography variant="h6">
                                        {item.address?.length > 70
                                            ? item.address?.substr(0, 70) + '...'
                                            : item.address}
                                    </Typography>
                                    <Box className={classes.distance}>
                                        {/* Use the icon after typecasting */}
                                        <MdAssistantDirectionIcon style={{ fontSize: '16px', color: '#000' }} />
                                        <Box sx={{ fontSize: '8px' }}>6km</Box>
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
                            <ActionButton type="day" />
                            <ActionButton type="bulk" />
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Spaces;

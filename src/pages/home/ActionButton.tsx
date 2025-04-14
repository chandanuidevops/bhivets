import React from 'react';

import Typography from '@mui/material/Typography';
import { Box, Button, Grid } from '@mui/material';

import { Images } from '../../assets/images/image';
import useStyles from './style';

interface ActionButtonProps {
    type: 'day' | 'bulk';
    price: number;
    discount: number;

}
export const ActionButton: React.FC<ActionButtonProps> = ({ type, price, discount }) => {
    const classes = useStyles();
    return (
        <Button className={`${classes.spacesBtn} ${type === 'day' ? 'day' : 'bulk'}`}>
            <Box
                className={classes.actionbtnContainer}
            >
                {
                    discount && (<span
                        className={classes.discount}

                    >  {`${discount}% Discount`}   </span>)
                }

                <Box>
                    <Typography className={'btnTitle'}>
                        {type === 'day' ? 'Day' : 'Bulk'} Pass
                    </Typography>
                    <Typography className="priceTitle">
                        ₹{price}/ <span> {type === 'day' ? 'Day' : '10 Days'}    </span>
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
import { Box, Grid, Typography } from '@mui/material'
import { Images } from '../../assets/images/image'
import useStyles from './style'

const AppPromotion: React.FC = () => {
  const classes = useStyles()

  return (
    <Box className={classes.promoContainer}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box className={classes.screenImg}>
            <img src={Images.mobileleft} alt="Mobile Left" />
            <img src={Images.mobileright} alt="Mobile Right" />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box>
            <Typography
              color="primary"
              className={classes.promotext}
              sx={{

                display: {
                  sm: 'none',
                  md: 'block',
                },
              }}
            >
              Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.
            </Typography>

            <Box>
              <img
                src={Images.android}
                alt="Android App"
                style={{
                  marginRight: '50px',
                  cursor: 'pointer',
                }}
              />
              <img
                src={Images.playstore}
                alt="Playstore"
                style={{
                  cursor: 'pointer',
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AppPromotion

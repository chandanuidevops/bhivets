// src/styles/useStyles.ts
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export const useStyles = makeStyles((theme: Theme) => ({
    homeContainer: {
        paddingTop: "90px",
        [theme.breakpoints.down("sm")]: {
            paddingTop: "54px",
        },
    },
    bannerSection: {
        backgroundSize: "75% auto",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
    },
    bannerImg: {
        width: '100%',
        maxWidth: '400px'
    },

    bannerText: {
        "&.MuiTypography-root": {
            fontWeight: 700,
            maxWidth: "800px",
            paddingTop: "100px",
            [theme.breakpoints.down("lg")]: {
                fontSize: "40px",
                paddingTop: "40px",
            },
            [theme.breakpoints.down("md")]: {
                fontSize: "20px",
                paddingTop: "8px",
            },
            "& span": {
                color: theme.palette.text.primary,
            },
        },
    },
    chooseSection: {
        background: "#f9faff",
        paddingBottom: "30px!important",
    },
    actionbtnContainer: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
    },
    discount: {
        display: "block",
        fontSize: "8px",
        position: "absolute",
        top: -14,
        left: "50%",
        transform: "translate(-50%)",
        borderRadius: "5px",
        color: "#FFF",
        background: "#000",
        padding: "2px 10px",
        minWidth: '55px'
    },
    spacesBtn: {
        "&.MuiButton-root": {
            textTransform: "capitalize",
            height: "60px",
            width: "45%",
            "& .btnTitle": {
                fontSize: "14px",
                fontWeight: 500,
                textAlign: "left",
            },
            "& .priceTitle": {
                fontSize: "20px",
                fontWeight: 600,
                color: theme.palette.primary.main,
                [theme.breakpoints.down("lg")]: {
                    fontSize: "16px",

                },
                "& span": {
                    fontSize: "12px",
                    fontWeight: 500,
                    color: theme.palette.text.secondary,
                },
            },
            "&.day": {
                "& .btnTitle": {
                    color: theme.palette.text.secondary,
                },
                backgroundColor: theme.palette.button.secondary,
                border: "1px solid #cec6c62e",
            },
            "&.bulk": {
                backgroundColor: theme.palette.button.primary,
                "& .btnTitle": {
                    color: "#514D2D",
                },
            },
        },
    },
    amenityIcon: {
        color: theme.palette.button.primary,
        marginRight: "10px",
        fontSize: "35px",
    },
    mainHeading: {
        "&.MuiTypography-root": {
            color: theme.palette.text.main,
            fontWeight: "700!important",
            padding: "30px 0 20px 0",
            [theme.breakpoints.down("sm")]: {
                fontSize: "24px",
                padding: "20px 0 10px 0",
            },
        },
    },
    amenityContainer: {
        display: "flex",
        alignItems: "center",
        height: "50px",
        padding: "10px",
        borderRadius: "5px",
        transition: "all 0.4s ease-in",
        position: "relative",
        "& .secondary": {
            opacity: 0,
            maxHeight: 0,
            overflow: "hidden",
            transition: "opacity 0.4s ease-in, max-height 0.4s ease-in",
        },
        "&:hover": {
            background: "#FFF",
            boxShadow:
                "rgba(0, 0, 0, 0.2) 0px 1px 1px -1px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 0px 0px",
            "& .secondary": {
                opacity: 1,
                maxHeight: "50px",
            },
        },
        [theme.breakpoints.down("sm")]: {
            background: "#FFF",
            boxShadow:
                "rgba(0, 0, 0, 0.2) 0px 1px 1px -1px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 0px 0px",
            "&:hover": {
                "& .secondary": {
                    display: "none",
                },
            },
        },
    },
    spaceCard: {
        borderRadius: "5px",
        boxShadow: '0px 0px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 0px 0px rgb(0 0 0 / 0%)',
        padding: "10px",
        "& .MuiCardHeader-root": {
            padding: 0,

        },
        "& .MuiCardActions-root": {
            paddingTop: "30px",
            paddingBottom: 0,
        },
    },
    cardHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: theme.palette.primary.main,
        paddingBottom: "10px",
    },
    distance: {
        height: "40px",
        width: "40px",
        minWidth: "40px",
        border: "1px solid #8080801a",
        borderRadius: "5px",
        textAlign: "center",
        padding: "3px",
        background: theme.palette.button.secondary,
        cursor: "pointer",
    },
    promoContainer: {
        width: "100%",
        height: "250px",
        background: "#FFF",
        borderRadius: "20px",
        position: "relative",
        marginTop: "200px",
        [theme.breakpoints.down("md")]: {
            marginTop: "20px",
            height: "unset",
            textAlign: "center",
            marginBottom: "0px",
            paddingBottom: "20px",
        },
    },
    promotionHeading: {
        "&.MuiTypography-root": {
            color: theme.palette.text.secondary,
            fontWeight: 700,
            marginTop: "100px",
            marginBottom: "50px",
            [theme.breakpoints.down("sm")]: {
                marginTop: "30px",
                marginBottom: "10px",
                textAlign: "center",
            },
        },
    },
    promotext: {
        "&.MuiTypography-root": {
            fontSize: "20px",
            fontWeight: 500,
            marginTop: "50px",
            marginBottom: "30px",
            maxWidth: "500px",
            [theme.breakpoints.down("lg")]: {
                fontSize: "14px",
            },
        },
    },
    callbtn: {
        color: theme.palette.text.primary,
        border: `1px solid ${theme.palette.text.primary}`,
        borderRadius: "5px",
        padding: "8px",
        fontSize: "20px",
        cursor: "pointer",
    },
    appbar: {
        height: "90px",
        display: "flex",
        justifyContent: "space-between",
        [theme.breakpoints.down("sm")]: {
            height: "54px",
        },
    },
    screenImg: {
        position: "absolute",
        bottom: 0,
        left: 50,
        [theme.breakpoints.down("lg")]: {

            "& img": {
                width: "35%",
            },
        },
        [theme.breakpoints.down("md")]: {
            position: "static",
            "& img": {
                width: "40%",
            },
        },
    },
}));

export default useStyles;

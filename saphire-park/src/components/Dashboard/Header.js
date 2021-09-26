   
import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    Link,
    MenuItem,
    Container
  } from "@material-ui/core";
import { border, borderColor, fontSize } from "@mui/system";
  import React, { useState, useEffect } from "react";
  import { Link as RouterLink } from "react-router-dom";
  import "./Dashboard.css";


const headersData = [
    {
      label: "Listings",
      href: "/listings",
    },
    {
      label: "Mentors",
      href: "/mentors",
    },
    {
      label: "My Account",
      href: "/account",
    },
    {
      label: "Log Out",
      href: "/logout",
    },
  ];
  
  const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: "#002d96",
      paddingRight: "79px",
      paddingLeft: "118px",
      boxShadow: 'none',
      height: 107,
      "@media (max-width: 900px)": {
        paddingLeft: 0,
      },
    },
    logoBox:{
        marginLeft:350,
        paddingLeft:80,
        maxWidth:600,    
        display: "flex",
        justifyContent: 'center',
        flexDirection: 'row',
        webkitflexWrap: 'nowrap',
        flexWrap: 'nowrap'
    },
    logo: {
        fontFamily: "Georgia-Regular",  
        fontStyle: 'normal',
        fontWeight: 400,
        letterSpacing: 14.7,
        lineHeight: 42,
        fontSize:40,
        flexGrow: 4
    },
    logo2: {
       
        fontStyle: 'normal',
        fontWeight: 400,
        letterSpacing: 14.7,
        lineHeight: 42,
        fontSize:40
    },
    sublogo:{
    fontFamily: "Montserrat",  
    fontStyle: 'normal',
    position:'relative',
    letterSpacing: 5.88,
    top:-819,
    left:49,   
    alignItems:"center",
    justify:"center"

    },
    sublogo2:{
        fontFamily: "Montserrat",  
        fontStyle: 'normal',
        position:'relative',
        letterSpacing: 5.88,
        top:-819,
        left:49
    
        },
    menuButton: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      size: "18px",
      marginLeft: "38px",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    drawerContainer: {
      padding: "20px 30px",
    },
  }));
  
  export default function Header() {
    const { header, logo, menuButton, toolbar, drawerContainer, sublogo, logoBox, sublogo2, logo2  } = useStyles();
  
    const [state, setState] = useState({
      mobileView: false,
      drawerOpen: false,
    });
  
    const { mobileView, drawerOpen } = state;
  
    useEffect(() => {
      const setResponsiveness = () => {
        return window.innerWidth < 600
          ? setState((prevState) => ({ ...prevState, mobileView: true }))
          : setState((prevState) => ({ ...prevState, mobileView: false }));
      };
  
      setResponsiveness();
  
      window.addEventListener("resize", () => setResponsiveness());
  
      return () => {
        window.removeEventListener("resize", () => setResponsiveness());
      };
    }, []);
  
    const displayDesktop = () => {
      return (
        <Toolbar className={toolbar}>
          {Sapphireparklogo}
          <Button variant="outlined" style={{maxWidth:293, maxHeight:55, width:293, height:55,borderColor:'#faf6f6'}}><Typography style={{fontFamily:"Optima-Regular", color:'#faf6f6', fontSize:20}}>Contact</Typography></Button>
        </Toolbar>
      );
    };
  
    const displayMobile = () => {
      const handleDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: true }));
      const handleDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: false }));
  
      return (
        <Toolbar>
          <IconButton
            {...{
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
          </IconButton>
  
          <Drawer
            {...{
              anchor: "left",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <div className={drawerContainer}>{getDrawerChoices()}</div>
          </Drawer>
  
          <div>{Sapphireparklogo2}</div>
        </Toolbar>
      );
    };
  
    const getDrawerChoices = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Link
            {...{
              component: RouterLink,
              to: href,
              color: "inherit",
              style: { textDecoration: "none" },
              key: label,
            }}
          >
            <MenuItem>{label}</MenuItem>
          </Link>
        );
      });
    };
  
    const Sapphireparklogo = (
      <Container className={logoBox}>
      <Typography className={logo}>SAPPHIRE</Typography>
      <Typography className={sublogo}>PARK MEDICAL</Typography>
      </Container>
    );
    const Sapphireparklogo2 = (
        <Container className={logoBox}>
        <Typography className={logo2}>SAPPHIRE</Typography>
        <Typography className={sublogo2}>PARK MEDICAL</Typography>
      </Container>
      );
  
    const getMenuButtons = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: RouterLink,
              className: menuButton,
            }}
          >
            {label}
          </Button>
        );
      });
    };
  
    return (
      <header>
        <AppBar className={header}>
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </header>
    );
  }
  
  
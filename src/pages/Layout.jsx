import { AppBar, Box, Container, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';

import { Link } from "react-router-dom";

const drawerWidth = 240;
const appBarHeight = 64;

const Layout = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const links = [{text: 'Introduction', link: "/ryukooni"}, {text: 'Installation', link: "install"}, {text: 'Why Install This', link: "about"}]

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const MobileMenu = () => {
        return (
            <>
                <IconButton
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    size="large"
                    edge="start"
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="fade-menu"
                    aria-labelledby='fade-button'
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                    marginThreshold={0}
                    disableScrollLock={true}
                    anchorReference="anchorPosition"
                    anchorPosition={{ top: 50, left: 0 }}
                    slotProps={{
                        paper: {
                        sx: {
                            width: '100%',
                            maxWidth: '100%',
                            zIndex: 1502,
                            backgroundColor: "#1c1c1c",
                            color: "white"
                        },
                        }
                    }}
                    sx={{
                        zIndex: 1502
                    }}
                >
                    {links.map((text) => (
                        <Link to={text.link} style={{ textDecoration: 'none', color: "white" }}>
                            <MenuItem sx={{fontSize: "24px"}}>                               
                                {text.text}                                
                            </MenuItem>
                        </Link>
                    ))}
                </Menu>
            </>
        )
    }

    const DesktopDrawer = () => {
        return (
            <Drawer
                sx={{
                width: drawerWidth,
                flexShrink: 0,
                background: "#1c1c1c",
                '& .MuiDrawer-paper': {
                    width: 240,
                    boxSizing: 'border-box',
                },
                display: {xs: "none", md: "inline"}
                }}
                variant="permanent"
                anchor="left"
                
            >
                <Toolbar sx={{display: {xs: "none", md: "flex"}}}>
                    <Typography variant="h5" component="div">
                        Ryuko Oni
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                {links.map((text) => (
                    <Link to={text.link} style={{ textDecoration: 'none', color: "white" }}>
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemText primary={text.text}  />
                            </ListItemButton>                        
                        </ListItem>
                    </Link>
                ))}
                </List>
            </Drawer>
        )
    }
         
    return (
        <>
            <AppBar position="fixed" elevation={0}
                    sx={{ display: {md: "none"}, width: {xs: "100%", md: `calc(100% - ${drawerWidth}px)`}, 
                        ml: {md: `${drawerWidth}px`}, 
                        backgroundColor: "#1c1c1c" 
                    }}>
                <Toolbar >
                    <Typography color="white" sx={{display: {xs: "none", md: "inline"}}}>
                        This is a test
                    </Typography>

                    <Box sx={{display: {xs:"flex", md: "none"}, width:"100%", flexDirection: "row", justifyContent:"space-between", alignItems:"center"}}>
                        <Typography variant="h5" component="div">
                            Ryuko Oni
                        </Typography>
                        <MobileMenu />
                    </Box>
                </Toolbar>
            </AppBar>
            <DesktopDrawer />
            <Container sx={{ 
                            width: {md: `calc(100% - ${drawerWidth}px)`}, 
                            ml: {md: `calc(${drawerWidth}px + 10px)`}, 
                            height: {xs: `calc(100% - ${appBarHeight}px)`, md: "100%"}, 
                            mt: {xs: `calc(${appBarHeight}px + 25px)`, md: "25px"}, 
                            color: "white"  
                            }}>
                <Outlet />
            </Container>
        </>
    )
}

export default Layout
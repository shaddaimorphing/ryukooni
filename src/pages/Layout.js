import { AppBar, Container, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import Drawer from '@mui/material/Drawer'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import React from 'react'
import { Outlet } from 'react-router-dom';

const drawerWidth = 240;
const appBarHeight = 64;

const Layout = () => {
  return (
    <>
        <AppBar position="fixed" elevation={0}
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor: "#1c1c1c" }}>
            <Toolbar>
                <Typography color="white">
                    This is a test
                </Typography>
            </Toolbar>
        </AppBar>
        <Drawer
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            background: "#1c1c1c",
            '& .MuiDrawer-paper': {
                width: 240,
                boxSizing: 'border-box',
            },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar>
                Ryuko Oni
            </Toolbar>
            <Divider />
            <List>
            {['Home', 'Installation', 'Why Install This'].map((text) => (
                <ListItem key={text} disablePadding>
                <ListItemButton>
                    <ListItemText primary={text} />
                </ListItemButton>
                </ListItem>
            ))}
            </List>
        </Drawer>
        <Container maxWidth="sm" sx={{ 
                                    width: `calc(100% - ${drawerWidth}px)`, 
                                    ml: `calc(${drawerWidth}px + 10px)`, 
                                    height: `calc(100% - ${appBarHeight}px)`, 
                                    mt: `calc(${appBarHeight}px + 25px)`, 
                                    color: "white"  
                                    }}>
            <Outlet />
        </Container>
    </>
  )
}

export default Layout
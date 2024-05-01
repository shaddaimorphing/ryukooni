import { Divider, Grid, Link, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'

const Home = () => {

  document.title = 'Home - Ryuko Oni'
  return (
    <Stack spacing={2}>
          <Typography variant="h1" component="div">
              Introduction
          </Typography>
          <Typography variant="h2" component="div">
            Welcome to the guide for the Ryuko Oni preset for the Satsuki Yatoshi mod for Final Fantasy VII.
          </Typography>

          <Divider sx={{bgcolor: "white"}} />
          <Typography variant="h4" component="div"> 
            The point of this preset is offer an experience that is visually elevated, while also being (in my opinion) truest to the original based on the options availiable. It also streamlines the process of using SYW, skipping the option selection process. If you would like to know why the options I picked are important to the FFVII experience, you can go here to learn more in general, and individual options
          </Typography>
         

          <Typography variant="h2" component="div">
            Requirements
          </Typography>
          <Typography variant="p" component="div">
            <List disablePadding sx={{listStyleType:"disc",
                    '& .MuiListItem-root': {
                      display: 'list-item',
                     }, pl: 4}}>
              <ListItem>
                <ListItemText>
                  <Typography variant="h4" component="div">Final Fantasy VII for PC</Typography>
                </ListItemText>
                <List disablePadding sx={{listStyleType:"circle",
                    '& .MuiListItem-root': {
                      display: 'list-item',
                     }, pl: 4}}>
                  <ListItem>
                    <ListItemText>
                      <Typography variant="h4" component="div">Valid copies are the 97 release or the Steam release</Typography>
                    </ListItemText>
                  </ListItem>
                </List>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography variant="h4" component="div">Satsuki Yatoshi</Typography>
                </ListItemText>
                <List disablePadding sx={{listStyleType:"circle",
                    '& .MuiListItem-root': {
                      display: 'list-item',
                     }, pl: 4}}>
                  <ListItem>
                    <ListItemText>
                      <Link variant="h4" color="#ff2621" href="https://forums.qhimm.com/index.php?PHPSESSID=lglja328tm5fqpvtpkten0j7g1&topic=21616">Link</Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <Typography variant="h4" component="div">You need up to 50GB of space to install</Typography>
                    </ListItemText>
                  </ListItem>
                </List>
              </ListItem>
            
            </List>
          </Typography>
    </Stack>
  )
}

export default Home 
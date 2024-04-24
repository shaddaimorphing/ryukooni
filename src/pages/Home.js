import { Divider, Grid, List, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <Stack spacing={2}>
          <Typography variant="h1" component="div">
              Introduction
          </Typography>
          <Typography variant="h2" component="div">
            Welcome to the guide for the Ryuko Oni preset for the Satsuki Yatoshi mod for Final Fantasy VII.
          </Typography>

          <Divider sx={{bgcolor: "white"}} />
          <Typography variant="p" component="div"> 
            The point of this preset is offer an experience that is visually elevated, while also being (in my opinion) truest to the original based on the options availiable. It also streamlines the process of using SYW, skipping the option selection process. If you would like to know why the option I picked are important to the FFVII expereince, you can go here to learn more in general, and individual options
          </Typography>
         

          <Typography variant="h2" component="div">
            Requirements
          </Typography>
          <Typography variant="p" component="div">
            <List sx={{listStyleType:"disc",
                    '& .MuiListItem-root': {
                      display: 'list-item',
                     }, pl: 4}}>
              <ListItem>
                <ListItemText>
                  Final Fantasy VII for PC
                </ListItemText>
                  <ListItem>
                    <ListItemText>
                      Valid copies are the 97 release or the Steam release
                    </ListItemText>
                  </ListItem>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Satsuki Yatoshi
                </ListItemText>
              </ListItem>
            
            </List>
          </Typography>
    </Stack>
  )
}

export default Home
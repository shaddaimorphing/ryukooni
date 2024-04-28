import { Divider, Stack, Typography } from '@mui/material'
import React from 'react'

const Install = () => {
    return (
        <Stack spacing={2}>
            <Typography variant="h1" component="div">
                Installation
            </Typography>

            <Typography variant="h2" component="div">
                Now We will install the preset to your SYW installation
            </Typography>

            <Divider sx={{bgcolor: "white"}} />

            <Typography variant="h4" component="div">
                1. First, download the preset here.
            </Typography>
            <Typography variant="h4" component="div">
                2. Then go to where you downloaded the file (usually your Downloads folder) and copy it.
            </Typography>
            <Typography variant="h4" component="div">
                3. Navigate to your SYW folder and find the preset folder. Paste the preset there.
            </Typography>
            <Typography variant="h4" component="div">
                4. Open SYW and open the dropdown menu. The preset "Ryuko Oni" should be there. Select it.
            </Typography>
            <Typography variant="h4" component="div">
                5. Start the game, and enjoy!
            </Typography>
        </Stack>
    )
}

export default Install
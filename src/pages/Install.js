import { Divider, Link, Stack, Typography } from '@mui/material'
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
                1. First, download the preset (06-Ryuko.Oni.ini) from the last release on <Link href="https://github.com/shaddaimorphing/ryukooni/releases">Github</Link>
            </Typography>
            <Typography variant="h4" component="div">
                2. Then go to where you downloaded the file (usually your Downloads folder) and Rename it to "06-Ryuko Oni.ini". (I am assuming this is the first preset you're installing besides the defaults. If not you may need to change the number to the last one of you're presets)
            </Typography>
            <Typography variant="h4" component="div">
                3. Copy it, and navigate to your SYW folder (Usually C://FF7_SYW_Unified/Presets/English) and find the preset folder. Paste the preset there.
            </Typography>
            <img src={require('../img/Ryuko Oni Location.png')} alt="" width="75%" />
            <Typography variant="h4" component="div">
                4. Open SYW and open the dropdown menu. The preset "Ryuko Oni" should be there. Select it.
            </Typography>
            <img src={require('../img/SYW Menu.png')} alt="" width="75%" />
            <Typography variant="h4" component="div">
                5. Start the game, and enjoy!
            </Typography>
        </Stack>
    )
}

export default Install
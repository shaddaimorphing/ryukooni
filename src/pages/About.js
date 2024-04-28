import { Stack, Typography } from '@mui/material'
import React from 'react'

const About = () => {
    return (
        <Stack spacing={2}>
            <Typography variant="h1" component="div">
                Why Install This?
            </Typography>

            <Typography variant="h4" component="div">
                Though SYW is an amazing mod that provides an HD remaster of sorts to FFVII, I believe that being that its options menu is very intimidating, and may turn away some people not used to modding. Not only that, the choices may bring uncertainty in what they should select for their playthrough. This guide is meant to circumvent both of these barriers. Ryuko Oni not only provides the improvements of SYW, but also chooses options on what are the best to retain the accuracy of FFVII. Below is a list of the major options I've selected, and why I beleive they are important.
            </Typography>

            <Typography variant="h2" component="div">
                HD Backgrounds
            </Typography>

            <Typography variant="h4" component="div">
                HD Backgrounds are the main reason why you install SYW. Upscaled with AI, they provide clearer backgrounds for a visually enhanced experience. Also with ChaOS's extended backgrounds, you get a genuine 16:9 screen. Though artifacts from the AI upscale are visible if you look closely, I believe its vastly worth it.
            </Typography>
        </Stack>
    )
}

export default About
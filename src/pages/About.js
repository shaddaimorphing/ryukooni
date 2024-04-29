import { Divider, Stack, Typography } from '@mui/material'
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

            <Divider sx={{bgcolor: "white"}} />

            <Typography variant="h2" component="div">
                HD Backgrounds
            </Typography>
            <Typography variant="h4" component="div">
                HD Backgrounds are the main reason why you install SYW. Square's original backgrounds were lost, and couldn't be rescanned for rereleases, ending up with the  Upscaled with AI, they provide clearer backgrounds for a visually enhanced experience. Also with ChaOS's extended backgrounds, you get a genuine 16:9 screen. Though artifacts from the AI upscale are visible if you look closely, I still believe its worth it.
            </Typography>
            
            <Typography variant="h2" component="div">
                Ninostyle Field Models
            </Typography>
            <Typography variant="h4" component="div">
                The original models for FFVII were obviously conceived due to the limitations of the hardware of the time. Though that is the case, the game is designed around these models, so scenes will have expressive movements utilizing the cartoonish proportions. So it is only fitting that we keep that intact, and not dramatically change the way they look. Ninostyle's field models modernize these the originals by going for a very stylized approach that fits in with the art direction of the backgrounds. While not every model has been updated, enough has been done where the effects are apparent.
            </Typography>

            <Typography variant="h2" component="div">
                Ninostyle Battle Models
            </Typography>
            <Typography variant="h4" component="div">
                While the battle models aren't as much of a result of limitations, they are still worth touch up on. Like before, Ninostyle goes for style, this time emulating Tetsuya Nomura's art for the character portraits in the menus. It creates a nice bridge in between the art and the game models. All models haven't been worked on, but the human ones have, which benefit the most from this mod.
            </Typography>

            <Typography variant="h2" component="div">
                HD World Map
            </Typography>
            <Typography variant="h4" component="div">
                Replaces textures for the world map with highter quality ones. Also has QOL improvements regarding the camera
            </Typography>

            <Typography variant="h2" component="div">
                HD Menus
            </Typography>
            <Typography variant="h4" component="div">
                Upscales the menus while retaining the design
            </Typography>

            <Typography variant="h2" component="div">
                60fps 
            </Typography>
            <Typography variant="h4" component="div">
                Increases the framerate in battle and the field to 60fps. May not seem that important for a turn based game, but it makes the game feel less old, which can turn people away.
            </Typography>

            <Typography variant="h2" component="div">
                Original Soundtrack
            </Typography>
            <Typography variant="h4" component="div">
                Replaces the MIDI soundtrack added for the PC release with the higher quality original soundtrack from the PSX release.
            </Typography>

        </Stack>
    )
}

export default About
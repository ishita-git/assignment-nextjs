import React from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { Box, Container, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Navbar from '../components/Navbar'
import { oswald } from '../styles/fonts'

declare type HeaderProps = {
    image?: string | StaticImageData
    title?: string
    subtitle?: string
    containerVideo?: boolean
}

export default function HeaderSection({ image, title, subtitle, containerVideo }: HeaderProps) {
    const theme = useTheme()
    return (
        <Box
            sx={{
                position: 'relative',
                overflow: 'hidden',
                height: '42vw',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {containerVideo ? (
                <video
                    // controls
                    // width='100%'
                    // height='auto'
                    // style={{ position: 'absolute' }}
                    autoPlay
                    loop
                    src='../assets/container-terminal.webm'
                    // src='https://player.vimeo.com/video/332257750'
                    // container-terminal.webm
                >
                    <source src='../assets/container-terminal.webm' type='video/webm'></source>
                </video>
            ) : (
                <></>
            )}

            {image && (
                <Image
                    src={image}
                    alt='cargo'
                    style={{
                        width: '100%',
                        height: 'auto',
                        position: 'absolute',
                    }}
                />
            )}

            <Box
                sx={{
                    position: 'relative',
                    mt: theme.spacing(2),
                    mx: theme.spacing(4),
                }}
            >
                <Navbar />

                <Container maxWidth='xl' disableGutters>
                    <Typography variant='h1' sx={{ mt: theme.spacing(4) }}>
                        {title}
                    </Typography>

                    <Typography
                        variant='h2'
                        sx={{
                            mt: theme.spacing(1.2),
                            fontFamily: oswald.style.fontFamily,
                            color: 'common.white',
                            fontWeight: 400,
                        }}
                    >
                        {subtitle}
                    </Typography>
                </Container>
            </Box>
        </Box>
    )
}

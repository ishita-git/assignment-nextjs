import React from 'react'
import { Box, Container, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { oswald } from '../styles/fonts'

export default function HeroSection() {
    const theme = useTheme()
    const tabletMode = useMediaQuery('(max-width:899px)')

    return (
        <Box
            sx={{
                position: 'relative',
                overflow: 'hidden',
                height: tabletMode ? '56vw' : '44vw',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <>
                <video
                    src='/video/container_terminal.webm'
                    muted
                    autoPlay
                    loop
                    style={{
                        width: '100%',
                        height: 'auto',
                        position: 'absolute',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 0, 0, 0.5)',
                    }}
                />
            </>

            <Box
                sx={{
                    position: 'relative',
                    mt: theme.spacing(2),
                    mx: theme.spacing(4),
                }}
            >
                <Container maxWidth='xl' disableGutters>
                    <Typography
                        variant='h1'
                        sx={{
                            mt: { xs: theme.spacing(4), md: theme.spacing(8) },
                            fontSize: { xs: '3rem', md: '4.5rem' },
                            whiteSpace: 'pre-line',
                        }}
                    >
                        Effortless Shipping and Logistics
                    </Typography>

                    <Typography
                        variant='h2'
                        textAlign='center'
                        sx={{
                            mt: { xs: theme.spacing(0), md: theme.spacing(1.25) },
                            fontFamily: oswald.style.fontFamily,
                            color: 'common.white',
                            fontWeight: 400,
                            fontSize: { xs: '2rem', md: '3rem' },
                        }}
                    >
                        Muskan Group Makes it Simple
                    </Typography>
                </Container>
            </Box>
        </Box>
    )
}

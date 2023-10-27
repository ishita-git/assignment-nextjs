import React from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { Box, Container, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { oswald } from '../styles/fonts'

declare type HeaderProps = {
    image?: string | StaticImageData
    title?: string
    subtitle?: string
    video?: boolean
}

export default function HeaderSection({ image, title, subtitle, video }: HeaderProps) {
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
            {image ? (
                <Image
                    src={image}
                    alt='cargo'
                    style={{
                        width: '100%',
                        height: 'auto',
                        position: 'absolute',
                    }}
                />
            ) : (
                <></>
            )}

            {video ? (
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
            ) : (
                <></>
            )}

            <Box
                sx={{
                    position: 'relative',
                    mt: theme.spacing(2),
                    mx: theme.spacing(4),
                }}
            >
                <Container maxWidth='xl' disableGutters>
                    <Typography variant='h1' sx={{ mt: theme.spacing(8) }}>
                        {title}
                    </Typography>

                    <Typography
                        variant='h2'
                        sx={{
                            mt: theme.spacing(1.25),
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

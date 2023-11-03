import React from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { Box, Container, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { oswald } from '../styles/fonts'
import VisibilityTracker, { AnimationType, CollapseOrientation } from '@/components/VisibilityTracker'

declare type HeaderProps = {
    image?: string | StaticImageData
    title?: string
    subtitle?: string
    video?: boolean
    customHeight?: string
}

export default function HeaderSection({ image, title, subtitle, video, customHeight }: HeaderProps) {
    const theme = useTheme()
    return (
        <Box
            sx={{
                position: 'relative',
                overflow: 'hidden',
                height: customHeight ? customHeight : '42vw',
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
                            background: 'rgba(0, 0, 0, 0.5)', // 25% black overlay
                        }}
                    />
                </>
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
                <VisibilityTracker animationType={AnimationType.COLLAPSE} timeout={2000}>
                    <Container maxWidth='xl' disableGutters>
                        <Typography variant='h1' sx={{ mt: theme.spacing(8), fontSize: '4.5rem', whiteSpace: 'pre-line',lineHeight:"6.2rem" }}>
                            {title}
                        </Typography>

                        <Typography
                            variant='h2'
                            sx={{
                                mt: theme.spacing(1.25),
                                fontFamily: oswald.style.fontFamily,
                                color: 'common.white',
                                fontWeight: 400,
                                fontSize: '3rem',
                                whiteSpace: 'pre-line',
                            }}
                        >
                            {subtitle}
                        </Typography>
                    </Container>
                </VisibilityTracker>
            </Box>
        </Box>
    )
}

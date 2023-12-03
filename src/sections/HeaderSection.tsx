import React from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { Box, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'



declare type HeaderProps = {
    image?: string | StaticImageData
    title?: string
    subtitle?: string
    customHeight?: string
}

export default function HeaderSection({ image, title, subtitle, customHeight }: HeaderProps) {
    const theme = useTheme()
    const tabletMode = useMediaQuery('(max-width:749px)')
    const mobileMode = useMediaQuery('(max-width:599px)')
    const ultraMobileMode = useMediaQuery('(max-width:399px)')

    return (
        <Box
            sx={{
                position: 'relative',
                overflow: 'hidden',
                height: customHeight ? customHeight : mobileMode ? '56vw' : '42vw',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {image ? (
                <Image
                    src={image}
                    alt='cargo'
                    style={{
                        width: mobileMode ? 'auto' : '100%',
                        height: mobileMode ? '50vw' : 'auto',
                        position: 'absolute',
                    }}
                    loading='lazy'
                    placeholder='blur'
                    blurDataURL='/loader/about.png'
                />
            ) : (
                <></>
            )}

            <Box
                sx={{
                    position: 'relative',
                    mt: theme.spacing(2),
                    mx: { xs: theme.spacing(0), sm: theme.spacing(4) },
                }}
            >
                
            </Box>
        </Box>
    )
}

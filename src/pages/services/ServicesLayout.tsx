import React from 'react'
import type { StaticImageData } from 'next/image'
import HeaderSection from '../../sections/HeaderSection'
import FooterSection from '../../sections/FooterSection'
import { Box, Container } from '@mui/material'
import { useTheme } from '@mui/material/styles'

declare type ServicesLayoutProps = {
    image: string | StaticImageData
    title?: string
    subtitle?: string
    children: React.ReactNode
}

export default function ServicesLayout({ image, title, subtitle, children }: ServicesLayoutProps) {
    const theme = useTheme()

    return (
        <Box sx={{ backgroundColor: '#EFF6FF' }}>
            <HeaderSection image={image} title={title} subtitle={subtitle} />
            <Box sx={{ px: theme.spacing(4) }}>
                <Container maxWidth='xl' disableGutters>
                    {children}
                </Container>
            </Box>
            <FooterSection />
        </Box>
    )
}

import React from 'react'
import type { StaticImageData } from 'next/image'
import HeaderSection from '../sections/HeaderSection'
import FooterSection from '../sections/FooterSection'
import { Box, Container } from '@mui/material'
import { useTheme } from '@mui/material/styles'

declare type LayoutProps = {
    image: string | StaticImageData
    title?: string
    subtitle?: string
    children: React.ReactNode
}

export default function Layout({
    image,
    title,
    subtitle,
    children,
}: LayoutProps) {
    const theme = useTheme()

    return (
        <Box sx={{ backgroundColor: '#EFF6FF' }}>
            <HeaderSection image={image} title={title} subtitle={subtitle} />
            <Box sx={{ px: theme.spacing(4) }}>
                <Container maxWidth="xl">{children}</Container>
            </Box>
            <FooterSection />
        </Box>
    )
}

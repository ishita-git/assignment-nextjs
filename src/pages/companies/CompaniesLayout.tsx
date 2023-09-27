import React from 'react'
import type { StaticImageData } from 'next/image'
import HeaderSection from '../../sections/HeaderSection'
import FooterSection from '../../sections/FooterSection'
import { Box, Container, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import MuskaanGroupHq from '../../components/MuskaanGroupHq'

declare type CompaniesLayoutProps = {
    image: string | StaticImageData
    title?: string
    subtitle?: string
    children: React.ReactNode
}

export default function CompaniesLayout({ image, title, subtitle, children }: CompaniesLayoutProps) {
    const theme = useTheme()

    return (
        <Box sx={{ backgroundColor: '#EFF6FF' }}>
            <HeaderSection image={image} title={title} subtitle={subtitle} />

            <Container maxWidth='xl' disableGutters>
                {children}
            </Container>

            <Box sx={{ px: theme.spacing(4) }}>
                <Container maxWidth='xl' disableGutters>
                    <Typography variant='h3' sx={{ textAlign: 'start', mb: '1rem', mt: '3rem', color: '#1B1B1F' }}>
                        Contact Us
                    </Typography>
                    <MuskaanGroupHq />
                </Container>
            </Box>
            <FooterSection />
        </Box>
    )
}

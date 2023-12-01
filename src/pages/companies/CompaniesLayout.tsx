import React from 'react'
import type { StaticImageData } from 'next/image'
import HeaderSection from '../../sections/HeaderSection'
import FooterSection from '../../sections/FooterSection'
import { AppBar, Box, Container, Typography, useScrollTrigger } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import MuskanGroupHq from '../../components/MuskanGroupHq'
import Navbar from '../../components/Navbar'

interface Props {
    window?: () => Window
    children: React.ReactElement
}

function ElevationScroll(props: Props) {
    const { children, window } = props
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    })

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    })
}

declare type CompaniesLayoutProps = {
    image: string | StaticImageData
    mapSrc?: string
    title?: string
    subtitle?: string
    address?: String
    telephoneNumber?: String
    children: React.ReactNode
    props?: Props
}

export default function CompaniesLayout({
    image,
    title,
    subtitle,
    children,
    props,
    mapSrc,
    address,
    telephoneNumber,
}: CompaniesLayoutProps) {
    const theme = useTheme()
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: props?.window ? props.window() : undefined,
    })

    return (
        <React.Fragment>
            <ElevationScroll {...props}>
                <AppBar position='fixed' style={{ backgroundColor: trigger ? '#003A9B' : 'transparent' }}>
                    <Navbar />
                </AppBar>
            </ElevationScroll>
            <Box sx={{ backgroundColor: '#EFF6FF' }}>
                <HeaderSection image={image} title={title} subtitle={subtitle} />

                <Container maxWidth='xl' disableGutters>
                    {children}
                </Container>

                <Box sx={{ px: { xs: theme.spacing(2), sm: theme.spacing(4), md: theme.spacing(12) } }}>
                    <Container maxWidth='xl' disableGutters>
                        <Typography variant='h3' sx={{ textAlign: 'start', mb: '1rem', mt: '4rem', color: '#1B1B1F' }}>
                            Contact Us
                        </Typography>
                        <MuskanGroupHq address={address} mapSrc={mapSrc} telephoneNumber={telephoneNumber} />
                    </Container>
                </Box>
                <FooterSection />
            </Box>
        </React.Fragment>
    )
}

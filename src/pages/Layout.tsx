import React from 'react'
import type { StaticImageData } from 'next/image'
import HeaderSection from '../sections/HeaderSection'
import FooterSection from '../sections/FooterSection'
import { AppBar, Box, Container, useScrollTrigger } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Navbar from '../components/Navbar'

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

declare type LayoutProps = {
    image: string | StaticImageData
    title?: string
    subtitle?: string
    withTabs?: boolean
    children: React.ReactNode
    props?: Props
    customHeight?: string
}

export default function Layout({ image, title, subtitle, withTabs, children, props, customHeight }: LayoutProps) {
    return (
        <React.Fragment>
            <ElevationScroll {...props}>
                <AppBar>
                    <Navbar />
                </AppBar>
            </ElevationScroll>
            <Box sx={{ backgroundColor: '#EFF6FF' }}>
                <HeaderSection image={image} title={title} subtitle={subtitle} customHeight={customHeight} />
                <Box>{withTabs ? <Box>{children}</Box> : <Container maxWidth='xl'>{children}</Container>}</Box>
                <FooterSection />
            </Box>
        </React.Fragment>
    )
}

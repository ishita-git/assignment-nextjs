import React from 'react'
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

export default function LayoutHeaderLess({ children, props }: { children: React.ReactNode; props?: Props }) {
    const theme = useTheme()

    return (
        <React.Fragment>
            <ElevationScroll {...props}>
                <AppBar>
                    <Navbar />
                </AppBar>
            </ElevationScroll>
            <Box sx={{ backgroundColor: '#EFF6FF', mx: theme.spacing(4) }}>
                <Container maxWidth='xl' disableGutters>
                    {children}
                </Container>
            </Box>
            <FooterSection />
        </React.Fragment>
    )
}

import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import { AppBar, Box, Toolbar, Typography, useScrollTrigger } from '@mui/material'
import HeaderSection from '../sections/HeaderSection'
import ShipmentTracker from '../sections/ShipmentTracker'
import ServicesSection from '../sections/ServicesSection'
import ShippingSection from '../sections/ShippingSection'
import BusinessPresenceSection from '../sections/BusinessPresenceSection'
import ClienteleSection from '../sections/ClienteleSection'
import ContactSection from '../sections/ContactSection'
import FooterSection from '../sections/FooterSection'
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

export default function ElevateAppBar(props: Props) {
    const theme = useTheme()

    return (
        <React.Fragment>
            <ElevationScroll {...props}>
                <AppBar>
                    <Navbar />
                </AppBar>
            </ElevationScroll>
            <Box sx={{ background: '#EFF6FF', width: '100vw' }}>
                <HeaderSection
                    video
                    title='Effortless Shipping and Logistics'
                    subtitle='Muskan Group Makes it Simple'
                />

                <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', top: '-20vh' }}>
                    <ShipmentTracker />
                </Box>

                <ServicesSection />
                <ShippingSection />
                <BusinessPresenceSection />
                <ClienteleSection />
                <ContactSection />
                <FooterSection />
            </Box>
        </React.Fragment>
    )
}

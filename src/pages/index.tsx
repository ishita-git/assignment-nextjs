import { Box } from '@mui/material'
import HeaderSection from '../sections/HeaderSection'
import ShipmentTracker from '../sections/ShipmentTracker'
import ServicesSection from '../sections/ServicesSection'
import ShippingSection from '../sections/ShippingSection'
import BusinessPresenceSection from '../sections/BusinessPresenceSection'
import ClienteleSection from '../sections/ClienteleSection'
import ContactSection from '../sections/ContactSection'
import FooterSection from '../sections/FooterSection'
import cargo from '../assets/images/cargo-ship-1.png'

export default function Home() {
    return (
        <Box sx={{ background: '#EFF6FF', width: '100vw' }}>
            <HeaderSection
                image={cargo}
                title="Effortless Shipping and Logistics"
                subtitle="Muskan Group Makes it Simple"
            />

            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Box sx={{ position: 'absolute', top: '-20vh' }}>
                    <ShipmentTracker />
                </Box>
            </Box>

            <ServicesSection />
            <ShippingSection />
            <BusinessPresenceSection />
            <ClienteleSection />
            <ContactSection />
            <FooterSection />
        </Box>
    )
}

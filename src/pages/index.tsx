import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import HeaderSection from '../components/HeaderSection'
import ShipmentTracker from '../components/ShipmentTracker'
import ServicesSection from '../components/ServicesSection'
import cargo from '../assets/images/cargo-ship-1.png'

export default function Home() {
    const theme = useTheme()

    return (
        <Box sx={{ background: '#EFF6FF', width: '100vw' }}>
            <HeaderSection
                image={cargo}
                title="Effortless Shipping and Logistics"
                subtitle="Muskan Group Makes it Simple"
            />

            <Box>
                <ShipmentTracker />
            </Box>
        </Box>
    )
}

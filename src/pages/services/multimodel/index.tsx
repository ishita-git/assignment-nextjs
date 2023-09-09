import { Box } from '@mui/material'
import ServicesLayout from '../ServicesLayout'
import contactBackground from '../../../assets/contact/contact-background.png'

export default function Home() {
    return (
        <ServicesLayout image={contactBackground}>
            <Box>test</Box>
        </ServicesLayout>
    )
}

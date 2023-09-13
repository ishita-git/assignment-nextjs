import { Box, Container, Typography } from '@mui/material'
import Navbar from '../../components/Navbar'
import FooterSection from '../../sections/FooterSection'
import { useTheme } from '@mui/material/styles'

export default function Home() {
    const theme = useTheme()

    return (
        <Box>
            <Box
                sx={{
                    px: theme.spacing(4),
                    py: theme.spacing(2),
                    backgroundColor: '#003A9B',
                }}
            >
                <Navbar />
            </Box>
            <Box sx={{ mx: theme.spacing(4) }}>
                <Container maxWidth='xl' disableGutters>
                    <Typography variant='h2'>test</Typography>
                </Container>
            </Box>
            <FooterSection />
        </Box>
    )
}

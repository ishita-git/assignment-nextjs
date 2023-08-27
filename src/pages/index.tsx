import { Box, Container, Typography } from '@mui/material'
import { useTheme } from '@mui/material'

export default function Home() {
    const theme = useTheme()

    return (
        <Box sx={{ background: '#EFF6FF', position: 'relative' }}>
            <Box sx={{ mx: theme.spacing(4), my: theme.spacing(2.5) }}>
                <Container maxWidth="xl"></Container>
            </Box>
        </Box>
    )
}

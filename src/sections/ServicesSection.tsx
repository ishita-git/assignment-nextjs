import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export default function ServicesSection() {
    const theme = useTheme()
    return (
        <Box sx={{ mt: theme.spacing(18), mb: theme.spacing(8) }}>
            <Typography variant="h2">Our Services</Typography>
        </Box>
    )
}

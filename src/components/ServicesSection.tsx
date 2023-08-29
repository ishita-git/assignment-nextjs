import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export default function name() {
    const theme = useTheme()
    return (
        <Box>
            <Typography variant="h2" sx={{ mt: theme.spacing(20) }}>
                Our Services
            </Typography>
        </Box>
    )
}

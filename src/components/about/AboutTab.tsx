import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export default function AboutTab() {
    const theme = useTheme()
    return (
        <Box>
            <Typography
                variant="h2"
                textAlign="start"
                sx={{ my: theme.spacing(2) }}
            >
                About Muskaan
            </Typography>
        </Box>
    )
}

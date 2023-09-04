import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export default function MissionAndVisionTab() {
    const theme = useTheme()

    return (
        <Box>
            <Typography
                variant="h2"
                textAlign="start"
                sx={{ my: theme.spacing(2) }}
            >
                Looking into Future
            </Typography>
        </Box>
    )
}

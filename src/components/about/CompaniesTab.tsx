import { Container, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export default function CompaniesTab() {
    const theme = useTheme()

    return (
        <Container maxWidth="xl">
            <Typography
                variant="h2"
                textAlign="start"
                sx={{ my: theme.spacing(2) }}
            >
                India
            </Typography>
        </Container>
    )
}

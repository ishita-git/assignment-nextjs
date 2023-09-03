import { Box, Container, Grid } from '@mui/material'

export default function FooterSection() {
    return (
        <Box sx={{ backgroundColor: '#003A9B', mt: '8rem' }}>
            <Container maxWidth="xl" disableGutters>
                <Grid container spacing={2}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
            </Container>
        </Box>
    )
}

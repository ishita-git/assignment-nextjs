import React from 'react'
import { Box, Container, Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import TrackShipmentCard from '../components/TrackShipmentCard'
import TrackVesselSchedulesCard from '../components/TrackVesselSchedulesCard'

export default function ShipmentTracker() {
    const theme = useTheme()

    return (
        <Box sx={{ mx: theme.spacing(4) }}>
            <Container maxWidth='lg'>
                <Grid container spacing={2} sx={{ width: '100%' }}>
                    <Grid item xs={12} sm={6}>
                        <TrackShipmentCard />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TrackVesselSchedulesCard />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

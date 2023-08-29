import React from 'react'
import {
    Container,
    Grid,
    InputLabel,
    TextField,
    Typography,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import 'dayjs/locale/en-gb'
import dayjs from 'dayjs'
import ShipmentCard from './ShipmentCard'
import PrimaryTextField from './PrimaryTextField'

let currentDate = new Date()

export default function ShipmentTracker() {
    const theme = useTheme()
    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <ShipmentCard
                        cardTitle="Track Shipment"
                        submitButton="Track"
                    >
                        <PrimaryTextField
                            label="Search"
                            placeholder="Enter Reference No. / Bill No. / container No."
                            helperText=" Input multiple numbers, separated by spaces and commas."
                            startIcon
                        />
                    </ShipmentCard>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <ShipmentCard
                        cardTitle="Track Shipment"
                        submitButton="Track"
                        datePicker={
                            <DatePicker
                                defaultValue={dayjs(currentDate)}
                                closeOnSelect
                                sx={{
                                    '& .MuiInputBase-root': {
                                        height: '2.4rem',
                                        width: '12rem',
                                        backgroundColor: '#0312251A',
                                        borderRadius: '8px',
                                        fontSize: '1rem',
                                        color: '#6D7987',
                                    },
                                }}
                                format="DD-MM-YYYY"
                                // slotProps={{
                                //     textField: {
                                //         variant: 'outlined',
                                //     },
                                // }}
                            />
                        }
                    >
                        <PrimaryTextField
                            label="Origin"
                            placeholder="Enter Origin Point"
                        />
                        <PrimaryTextField
                            label="Destination"
                            placeholder="Enter Destination Point"
                        />
                    </ShipmentCard>
                </Grid>
            </Grid>
        </Container>
    )
}

import React from 'react'
import { Box, InputLabel, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import PrimaryButton from './PrimaryButton'
import PrimaryTextField from './PrimaryTextField'

export default function TrackShipmentCard() {
    const theme = useTheme()

    const onSubmit = () => {
        console.log('submit')
    }

    return (
        <Box>
            <Box
                sx={{
                    borderRadius: '16px 16px 0px 0px',
                    backgroundColor: 'primary.main',
                    height: '2.5rem',
                    width: '16rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant='h4'>Track Shipment</Typography>
            </Box>

            <Box
                sx={{
                    backgroundColor: '#EFF6FF',
                    height: '16.8rem',
                    minWidth: '26rem',
                    borderRadius: '0px 16px 16px 16px',
                    boxShadow: '0px 2px 8px 0px #00000033',
                    padding: theme.spacing(1),
                    position: 'relative',
                }}
            >
                <PrimaryTextField
                    label='Search'
                    placeholder='Enter Reference No. / Bill No. / container No.'
                    helperText=' Input multiple numbers, separated by spaces and commas.'
                    startIcon
                />

                <Box
                    sx={{
                        position: 'absolute',
                        bottom: theme.spacing(1),
                        right: theme.spacing(1),
                    }}
                >
                    <PrimaryButton text='Track' onClick={onSubmit} />
                </Box>
            </Box>
        </Box>
    )
}

import React from 'react'
import { Box, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import PrimaryButton from './PrimaryButton'
import PrimaryTextField from './PrimaryTextField'

export default function TrackShipmentCard() {
    const theme = useTheme()
    const tabletMode = useMediaQuery('(max-width:899px)')

    const onSubmit = () => {
        console.log('submit')
    }

    return (
        <Box
            sx={{
                backgroundColor: '#EFF6FF',
                height: '16.8rem',
                minWidth: tabletMode ? '30rem' : '26rem',
                borderRadius: '0px 16px 16px 16px',
                boxShadow: '4px 8px 8px 0px #00000033',
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
    )
}

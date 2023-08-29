import React from 'react'
import { Box, InputLabel, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import PrimaryButton from './PrimaryButton'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

declare type CardProps = {
    cardTitle: string
    submitButton: string
    children: React.ReactNode
    datePicker?: React.ReactNode
}

export default function ShipmentCard({
    cardTitle,
    children,
    submitButton,
    datePicker,
}: CardProps) {
    const theme = useTheme()

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
                <Typography variant="h4">{cardTitle}</Typography>
            </Box>

            <Box
                sx={{
                    backgroundColor: '#EFF6FF',
                    height: '16.8rem',
                    minWidth: '24rem',
                    borderRadius: '0px 16px 16px 16px',
                    boxShadow: '0px 2px 8px 0px #00000033',
                    padding: theme.spacing(1),
                    position: 'relative',
                }}
            >
                {children}

                <Box
                    sx={{
                        position: 'absolute',
                        bottom: theme.spacing(1),
                        left: theme.spacing(1),
                    }}
                >
                    <InputLabel>{datePicker ? 'Date' : ''}</InputLabel>
                    <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        adapterLocale="en-gb"
                    >
                        {datePicker}
                    </LocalizationProvider>
                </Box>

                <Box
                    sx={{
                        position: 'absolute',
                        bottom: theme.spacing(1),
                        right: theme.spacing(1),
                    }}
                >
                    <PrimaryButton text={submitButton} />
                </Box>
            </Box>
        </Box>
    )
}

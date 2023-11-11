import React from 'react'
import Image from 'next/image'
import { Box, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import flatRack from '../../assets/equipments/flat-rack.webp'
import DataTableHead from './DataTableHead'
import DataTable from './DataTable'
import { equipmentsData } from '../../data/equipmentsData'

export default function FlatRackTab() {
    const theme = useTheme()
    const mobileMode = useMediaQuery('(max-width:649px)')

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                px: { xs: theme.spacing(2), sm: theme.spacing(4), md: theme.spacing(11) },
            }}
        >
            <Box sx={{ width: '100%', display: 'flex', justifyContent: mobileMode ? 'center' : 'start' }}>
                <Image
                    src={flatRack}
                    alt='flatRack'
                    style={
                        mobileMode
                            ? { width: '34rem', height: 'auto', marginTop: theme.spacing(2) }
                            : {
                                  height: 'auto',
                                  width: '65%',
                                  marginTop: theme.spacing(2),
                                  marginLeft: theme.spacing(10),
                                  minWidth: '36rem',
                              }
                    }
                />
            </Box>

            <Box sx={{ mt: '-6rem', display: 'flex', overflowX: 'auto', mx: theme.spacing(-2) }}>
                <DataTableHead lessRows />
                <DataTable column={equipmentsData?.flatRack?.fr20} lessRows />
                <DataTable column={equipmentsData?.flatRack?.fr40} lessRows />
            </Box>
        </Box>
    )
}

import React from 'react'
import Image from 'next/image'
import { Box, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import reefer from '../../assets/equipments/reefer.webp'
import DataTableHead from './DataTableHead'
import DataTable from './DataTable'
import { equipmentsData } from '../../data/equipmentsData'

export default function ReeferTab() {
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
                    src={reefer}
                    alt='Reefer'
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

            <Box sx={{ mt: '-5rem', display: 'flex', overflowX: 'auto', mx: theme.spacing(-2) }}>
                <DataTableHead />
                <DataTable column={equipmentsData.reefer.rh20} />
                <DataTable column={equipmentsData.reefer.rh40} />
            </Box>
        </Box>
    )
}

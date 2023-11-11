import React from 'react'
import Image from 'next/image'
import { Box, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import openTop from '../../assets/equipments/open-tab.webp'
import DataTableHead from './DataTableHead'
import DataTable from './DataTable'
import { equipmentsData } from '../../data/equipmentsData'

export default function OpenTopTab() {
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
                    src={openTop}
                    alt='openTop'
                    style={
                        mobileMode
                            ? { width: '40rem', height: 'auto', marginTop: theme.spacing(2) }
                            : {
                                  height: 'auto',
                                  width: '68%',
                                  marginTop: theme.spacing(2),
                                  marginLeft: theme.spacing(9),
                                  minWidth: '40rem',
                              }
                    }
                />
            </Box>

            <Box sx={{ mt: '-6rem', display: 'flex', overflowX: 'auto', mx: theme.spacing(-2) }}>
                <DataTableHead />
                <DataTable column={equipmentsData.openTop.oh20} />
                <DataTable column={equipmentsData.openTop.ot20} />
                <DataTable column={equipmentsData.openTop.ot40} />
            </Box>
        </Box>
    )
}

import React from 'react'
import Image from 'next/image'
import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import highCube from '../../assets/equipments/high-cube.webp'
import DataTableHead from './DataTableHead'
import DataTable from './DataTable'
import { equipmentsData } from '../../data/equipmentsData'

export default function HighCubeTab() {
    const theme = useTheme()

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                px: { xs: theme.spacing(2), sm: theme.spacing(4), md: theme.spacing(11) },
                overflowX: 'auto',
            }}
        >
            <Image src={highCube} alt='Reefer' style={{ height: 'auto', width: '100%', minWidth: '52rem' }} />

            <Box sx={{ mt: '-6rem', display: 'flex' }}>
                <DataTableHead />
                <DataTable column={equipmentsData.highCube.gp20} />
                <DataTable column={equipmentsData.highCube.gp40} />
                <DataTable column={equipmentsData.highCube.hc40} />
            </Box>
        </Box>
    )
}

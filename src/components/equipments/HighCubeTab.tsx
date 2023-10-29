import React from 'react'
import Image from 'next/image'
import { Box, Table } from '@mui/material'
import highCube from '../../assets/equipments/high-cube.webp'
import DataTableHead from './DataTableHead'
import DataTable from './DataTable'
import { equipmentsData } from '@/data/equipmentsData'

export default function HighCubeTab() {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                px: '11rem',
            }}
        >
            <Image src={highCube} alt='Reefer' style={{ height: 'auto', width: '100%' }} />

            <Box sx={{ mt: '-6rem', display: 'flex' }}>
                <DataTableHead />
                <DataTable column={equipmentsData.highCube.gp20} />
                <DataTable column={equipmentsData.highCube.gp40} />
                <DataTable column={equipmentsData.highCube.hc40} />
            </Box>
        </Box>
    )
}

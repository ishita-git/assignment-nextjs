import React from 'react'
import Image from 'next/image'
import { Box } from '@mui/material'
import highCube from '../../assets/equipments/high-cube.png'
import DataTableHead from './DataTableHead'
import DataTable from './DataTable'
import { equipmentsData } from '../../data/equipmentsData'

export default function HighCubeTab() {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                position: 'relative',
            }}
        >
            <Image src={highCube} alt='Reefer' style={{ height: '24rem', width: 'auto' }} />

            <Box sx={{ mt: '-6rem', display: 'flex' }}>
                <DataTableHead />
                <DataTable small column={equipmentsData.highCube.gp20} />
                <DataTable small column={equipmentsData.highCube.gp40} />
                <DataTable small column={equipmentsData.highCube.hc40} />
            </Box>
        </Box>
    )
}
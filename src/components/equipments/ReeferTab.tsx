import React from 'react'
import Image from 'next/image'
import { Box } from '@mui/material'
import reefer from '../../assets/equipments/reefer.png'
import DataTableHead from './DataTableHead'
import DataTable from './DataTable'
import { equipmentsData } from '../../data/equipmentsData'

export default function ReeferTab() {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                position: 'relative',
                mt: '2rem',
            }}
        >
            <Image src={reefer} alt='Reefer' style={{ height: '24rem', width: 'auto' }} />

            <Box sx={{ mt: '-6rem', display: 'flex' }}>
                <DataTableHead />
                <DataTable column={equipmentsData.reefer.rh20} />
                <DataTable column={equipmentsData.reefer.rh40} />
            </Box>
        </Box>
    )
}

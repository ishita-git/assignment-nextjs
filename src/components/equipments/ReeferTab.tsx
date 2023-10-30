import React from 'react'
import Image from 'next/image'
import { Box, Table } from '@mui/material'
import reefer from '../../assets/equipments/reefer.webp'
import DataTableHead from './DataTableHead'
import DataTable from './DataTable'
import { equipmentsData } from '../../data/equipmentsData'

export default function ReeferTab() {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                px: '11rem',
            }}
        >
            <Image
                src={reefer}
                alt='Reefer'
                style={{ height: 'auto', width: '65%', marginTop: '2rem', marginLeft: '10rem' }}
            />

            <Box sx={{ mt: '-5rem', display: 'flex' }}>
                <DataTableHead />
                <DataTable column={equipmentsData.reefer.rh20} />
                <DataTable column={equipmentsData.reefer.rh40} />
            </Box>
        </Box>
    )
}

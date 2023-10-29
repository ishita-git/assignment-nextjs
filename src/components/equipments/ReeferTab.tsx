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
                justifyContent: 'center',
                mt: '2rem',
                mx: '4rem',
            }}
        >
            <Image src={reefer} alt='Reefer' style={{ height: '24rem', width: '50rem', marginLeft: '12rem' }} />

            <Box sx={{ mt: '-6rem', display: 'flex' }}>
                <DataTableHead />
                <DataTable column={equipmentsData.reefer.rh20} />
                <DataTable column={equipmentsData.reefer.rh40} />
            </Box>
        </Box>
    )
}

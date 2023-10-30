import React from 'react'
import Image from 'next/image'
import { Box } from '@mui/material'
import flatRack from '../../assets/equipments/flat-rack.webp'
import DataTableHead from './DataTableHead'
import DataTable from './DataTable'
import { equipmentsData } from '../../data/equipmentsData'

export default function FlatRackTab() {
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
                src={flatRack}
                alt='Reefer'
                style={{ height: 'auto', width: '68%', marginLeft: '14rem', marginTop: '2rem' }}
            />

            <Box sx={{ mt: '-6rem', display: 'flex' }}>
                <DataTableHead lessRows />
                <DataTable column={equipmentsData?.flatRack?.fr20} lessRows />
                <DataTable column={equipmentsData?.flatRack?.fr40} lessRows />
            </Box>
        </Box>
    )
}

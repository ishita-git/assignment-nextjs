import React from 'react'
import Image from 'next/image'
import { Box } from '@mui/material'
import flatRack from '../../assets/equipments/flat-rack.png'
import DataTableHead from './DataTableHead'
import DataTable from './DataTable'
import { equipmentsData } from '../../data/equipmentsData'

export default function FlatRackTab() {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                position: 'relative',
                mt: '4rem',
            }}
        >
            <Image src={flatRack} alt='Reefer' style={{ height: '24rem', width: 'auto' }} />

            <Box sx={{ mt: '-6rem', display: 'flex' }}>
                <DataTableHead lessRows />
                <DataTable column={equipmentsData?.flatRack?.fr20} lessRows />
                <DataTable column={equipmentsData?.flatRack?.fr40} lessRows />
            </Box>
        </Box>
    )
}

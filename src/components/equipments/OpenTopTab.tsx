import React from 'react'
import Image from 'next/image'
import { Box } from '@mui/material'
import openTop from '../../assets/equipments/open-tab.webp'
import DataTableHead from './DataTableHead'
import DataTable from './DataTable'
import { equipmentsData } from '../../data/equipmentsData'

export default function OpenTopTab() {
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
                src={openTop}
                alt='Reefer'
                style={{ height: 'auto', width: '68%', marginTop: '2rem', marginLeft: '9rem' }}
            />

            <Box sx={{ mt: '-6rem', display: 'flex' }}>
                <DataTableHead />
                <DataTable column={equipmentsData.openTop.oh20} />
                <DataTable column={equipmentsData.openTop.ot20} />
                <DataTable column={equipmentsData.openTop.ot40} />
            </Box>
        </Box>
    )
}

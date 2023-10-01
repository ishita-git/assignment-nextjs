import React from 'react'
import Image from 'next/image'
import { Box } from '@mui/material'
import openTop from '../../assets/equipments/open-tab.png'
import DataTableHead from './DataTableHead'
import DataTable from './DataTable'
import { equipmentsData } from '../../data/equipmentsData'

export default function OpenTopTab() {
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
            <Image src={openTop} alt='Reefer' style={{ height: '30rem', width: 'auto' }} />

            <Box sx={{ mt: '-6rem', display: 'flex' }}>
                <DataTableHead />
                <DataTable small column={equipmentsData.openTop.oh20} />
                <DataTable small column={equipmentsData.openTop.ot20} />
                <DataTable small column={equipmentsData.openTop.ot40} />
            </Box>
        </Box>
    )
}

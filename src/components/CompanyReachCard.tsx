import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export default function CompanyReachCard({ title, description }: { title: string; description: string }) {
    const theme = useTheme()

    return (
        <Box
            sx={{
                borderRadius: '8px',
                backgroundColor: theme.palette.primary.main,
                p: theme.spacing(0.8),
                height: '100%',
            }}
        >
            <Typography variant='subtitle1' textAlign='start'>
                {title}
            </Typography>
            <Divider sx={{ mb: theme.spacing(1), borderColor: '#FFFFFF80' }} />
            <Typography variant='h6' textAlign='justify' sx={{ fontWeight: 300, lineHeight: '1.5rem' }}>
                {description}
            </Typography>
        </Box>
    )
}

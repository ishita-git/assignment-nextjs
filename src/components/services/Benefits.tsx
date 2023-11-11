import { Box, Typography } from '@mui/material'

export default function Benefits({ title, body, index }: { title: String; body: String; index: Number }) {
    return (
        <Box sx={{ mb: '2rem' }}>
            <Typography variant='h5' sx={{ fontWeight: 600, color: '#031225', textAlign: 'start', mb: '0.5rem' }}>
                {`${index}. ${title}`}:
            </Typography>
            <Typography variant='subtitle2' sx={{ fontWeight: 400, color: '#031225', textAlign: 'justify' }}>
                {body}
            </Typography>
        </Box>
    )
}

import { Typography } from '@mui/material'

export default function CustomText({ text }: { text: String }) {
    return (
        <Typography
            paragraph
            variant='subtitle2'
            sx={{ color: '#031225', fontWeight: '400', mb: '2rem', textAlign: 'start' }}
        >
            {text}
        </Typography>
    )
}

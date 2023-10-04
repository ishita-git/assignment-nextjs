import { Typography } from "@mui/material";

export default function CustomText({ text }: { text: String }) {
    return <Typography
        paragraph
        variant='h5'
        sx={{ color: '#031225', fontWeight: '400', textAlign: 'start' }}
    >
        {text}
    </Typography>
}

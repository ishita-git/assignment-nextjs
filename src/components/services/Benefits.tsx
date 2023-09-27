import {Box,Typography} from "@mui/material"

export default function Benefits({ title, body,index }: { title: String; body: String, index:Number }) {
    return (
        <Box sx={{ mb: '1.5rem' }}>
            <Typography variant='h4'  sx={{ fontWeight: 600, color: '#031225',textAlign:"start", mb:"1rem" }}>{`${index}. ${title}`}:</Typography>
            <Typography variant='h5' sx={{ fontWeight: 400, color: '#031225' ,textAlign:"start"}}>
                {body}
            </Typography>
        </Box>
    )
}
import { Button } from '@mui/material'

declare type ButtonProps = {
    text: string
    light?: boolean
    noBackground?: boolean
}

export default function PrimaryButton({ text, light, noBackground }: ButtonProps) {
    return (
        <Button
            variant="contained"
            sx={{
                backgroundColor: light ? '#FFFFFF' : '#003A9B',
                height: '2.4rem',
                width: '10rem',
                borderRadius: '8px',
                textTransform: 'none',
                color: light ? '#031225' : '#FFFFFF',
                fontSize: '1.25rem',
                boxShadow: 0,
                '&:hover': {
                    backgroundColor: noBackground ? "#FFFFFF" : light ? '#B2C3E1' : '#4C75B9',
                    boxShadow:  noBackground ?0:5,
                },
            }}
        >
            {text}
        </Button>
    )
}

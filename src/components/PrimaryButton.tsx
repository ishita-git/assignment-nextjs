import { Button } from '@mui/material'

declare type ButtonProps = {
    text: string
    light?: boolean
    width?:number|string
    height?:number|string
    onClick?: () => void
}

export default function PrimaryButton({ text, light, onClick ,width,height}: ButtonProps) {
    return (
        <Button
            variant='contained'
            sx={{
                backgroundColor: light ? '#FFFFFF' : '#003A9B',
                height: height ||'2.4rem',
                width: width || '10rem',
                borderRadius: '8px',
                textTransform: 'none',
                color: light ? '#031225' : '#FFFFFF',
                fontSize: '1.25rem',
                boxShadow: 0,
                '&:hover': {
                    backgroundColor: light ? '#B2C3E1' : '#4C75B9',
                    boxShadow: 5,
                },
            }}
            onClick={onClick}
        >
            {text}
        </Button>
    )
}

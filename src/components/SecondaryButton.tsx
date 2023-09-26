import { Button } from '@mui/material'

declare type ButtonProps = {
    text: string
}

export default function SecondaryButton({ text }: ButtonProps) {
    return (
        <Button
            variant='text'
            sx={{
                height: '2.4rem',
                width: '10rem',
                borderRadius: '8px',
                textTransform: 'none',
                color: '#003A9B',
                fontSize: '1.25rem',
            }}
        >
            {text}
        </Button>
    )
}

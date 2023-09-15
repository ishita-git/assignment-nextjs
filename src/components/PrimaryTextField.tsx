import Image from 'next/image'
import { Box, InputAdornment, InputLabel, TextField, Typography } from '@mui/material'
import searchIcon from '../assets/icons/search.png'

declare type TextFieldProps = {
    label?: string
    placeholder?: string
    startIcon?: boolean
    helperText?: string
    multiline?: boolean
    disabled?: boolean
}

export default function PrimaryTextField({
    label,
    placeholder,
    startIcon,
    helperText,
    multiline,
    disabled,
}: TextFieldProps) {
    return (
        <Box sx={{ mb: '1rem' }}>
            <InputLabel>{label}</InputLabel>
            <Box sx={{ backgroundColor: '#0312251A', borderRadius: '8px' }}>
                <TextField
                    variant='standard'
                    placeholder={placeholder}
                    InputProps={{
                        disableUnderline: true,
                        startAdornment: startIcon ? (
                            <InputAdornment position='start'>
                                <Image
                                    src={searchIcon}
                                    alt='seach icon'
                                    style={{
                                        width: 'auto',
                                        height: '1rem',
                                        marginLeft: '1rem',
                                    }}
                                />
                            </InputAdornment>
                        ) : (
                            <></>
                        ),
                    }}
                    inputProps={{
                        style: {
                            padding: '0.5rem',
                            height: multiline ? '3.2rem' : '1.6rem',
                        },
                    }}
                    fullWidth
                    sx={{ input: { color: '#031225', fontWeight: 600 } }}
                    multiline={multiline}
                    disabled={disabled}
                />
            </Box>
            <Typography variant='body1' sx={{ mt: '0.5rem' }}>
                {helperText}
            </Typography>
        </Box>
    )
}

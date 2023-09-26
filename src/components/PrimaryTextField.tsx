import Image from 'next/image'
import { Box, InputAdornment, InputLabel, TextField, Typography } from '@mui/material'
import searchIcon from '../assets/icons/search.png'

declare type TextFieldProps = {
    label?: string
    placeholder?: string
    startIcon?: boolean
    startText?: boolean
    helperText?: string
    multiline?: boolean
    disabled?: boolean
}

export default function PrimaryTextField({
    label,
    placeholder,
    startIcon,
    startText,
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
                        startAdornment: (
                            <InputAdornment position='start'>
                                {startIcon ? (
                                    <Image
                                        src={searchIcon}
                                        alt='seach icon'
                                        style={{
                                            width: 'auto',
                                            height: '1rem',
                                            marginLeft: '1rem',
                                        }}
                                    />
                                ) : (
                                    <></>
                                )}
                                {startText ? <Box sx={{ ml: '0.75rem' }}>+91</Box> : <></>}
                            </InputAdornment>
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

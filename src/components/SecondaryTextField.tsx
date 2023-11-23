import { Box, Button, InputAdornment, TextField } from '@mui/material'

declare type TextFieldProps = {
    placeholder?: string
    multiline?: boolean
    endButton?: boolean
    value?: string
    name?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function SecondaryTextField({ placeholder, multiline, endButton, value,
    name,onChange }: TextFieldProps) {
    return (
        <Box sx={{ mb: '0.75rem' }}>
            <Box
                sx={{
                    backgroundColor: endButton ? '#FFFFFF' : '#3361AE',
                    borderRadius: '8px',
                }}
            >
                <TextField
                    variant='standard'
                    placeholder={placeholder}
                    onChange={onChange}
                    name={name}
                    value={value}
                    InputProps={{
                        disableUnderline: true,
                        endAdornment: endButton ? (
                            <InputAdornment position='end'>
                                <Button
                                    variant='contained'
                                    size='large'
                                    sx={{
                                        textTransform: 'capitalize',
                                        borderRadius: '6px',
                                        width: '6rem',
                                        height: '2rem',
                                        backgroundColor: '#003A9B',
                                    }}
                                >
                                    Submit
                                </Button>
                            </InputAdornment>
                        ) : (
                            <></>
                        ),
                    }}
                    inputProps={{
                        style: {
                            color: endButton ? '#262626' : '#FFFFFF',
                            fontSize: '1rem',
                            fontWeight: endButton ? 600 : 400,
                        },
                    }}
                    fullWidth
                    multiline={multiline}
                    rows={multiline ? 2 : 1}
                    sx={{ p: '0.5rem' }}
                />
            </Box>
        </Box>
    )
}

export default SecondaryTextField

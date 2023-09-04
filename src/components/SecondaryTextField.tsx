import { Box, Button, InputAdornment, TextField } from '@mui/material'

declare type TextFieldProps = {
    placeholder?: string
    multiline?: boolean
    endButton?: boolean
}

function SecondaryTextField({
    placeholder,
    multiline,
    endButton,
}: TextFieldProps) {
    return (
        <Box sx={{ mb: '0.75rem' }}>
            <Box sx={{ backgroundColor: '#FFFFFF33', borderRadius: '8px' }}>
                <TextField
                    variant="standard"
                    placeholder={placeholder}
                    InputProps={{
                        disableUnderline: true,
                        endAdornment: endButton ? (
                            <InputAdornment position="end">
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        textTransform: 'capitalize',
                                        borderRadius: '6px',
                                        width: '6rem',
                                        height: '2rem',
                                        backgroundColor: '#031225',
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
                            color: '#FFFFFF',
                            fontSize: '1rem',
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

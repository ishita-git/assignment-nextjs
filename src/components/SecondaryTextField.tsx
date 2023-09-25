import { Box, Button, InputAdornment, TextField } from '@mui/material'

declare type TextFieldProps = {
    placeholder?: string
    multiline?: boolean
    endButton?: boolean
}

function SecondaryTextField({ placeholder, multiline, endButton }: TextFieldProps) {
    return (
        <Box sx={{ mb: '0.75rem' }}>
            <Box
                sx={{
                    backgroundColor: endButton ? '#FFFFFF' : '#FFFFFF33',
                    borderRadius: '8px',
                }}
            >
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

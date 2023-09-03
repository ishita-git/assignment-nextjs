import { Box, TextField } from '@mui/material'

declare type TextFieldProps = {
    placeholder?: string
    multiline?: boolean
}

function SecondaryTextField({ placeholder, multiline }: TextFieldProps) {
    return (
        <Box sx={{ mb: '0.75rem' }}>
            <Box sx={{ backgroundColor: '#FFFFFF33', borderRadius: '8px' }}>
                <TextField
                    variant="standard"
                    placeholder={placeholder}
                    InputProps={{
                        disableUnderline: true,
                    }}
                    inputProps={{
                        style: {
                            padding: '0.5rem',
                            color: '#FFFFFF',
                            fontSize: '1rem',
                        },
                    }}
                    fullWidth
                    multiline={multiline}
                    rows={multiline ? 2 : 1}
                />
            </Box>
        </Box>
    )
}

export default SecondaryTextField

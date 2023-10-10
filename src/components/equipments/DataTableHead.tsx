import React from 'react'
import { Typography, Table, TableRow, TableCell } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export default function DataTableHead({ lessRows }: { lessRows?: boolean }) {
    const theme = useTheme()

    return (
        <Table sx={{ maxWidth: 400 }}>
            <TableRow>
                <TableCell colSpan={2}>
                    <Typography variant='h3' sx={{ color: '#000000', fontWeight: 600, visibility: 'hidden' }}>
                        Head
                    </Typography>
                </TableCell>
            </TableRow>

            <TableRow>
                <TableCell>
                    <Typography
                        variant='h4'
                        sx={{
                            color: '#003A9B',
                            fontWeight: 600,
                            backgroundColor: '#FFFFFF',
                            p: theme.spacing(0.75),
                            borderRadius: '40px',
                        }}
                    >
                        Internal Dimensions
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600 }}>
                        Length
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600 }}>
                        Width
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600 }}>
                        Height
                    </Typography>
                </TableCell>
            </TableRow>

            {lessRows ? (
                <></>
            ) : (
                <>
                    <TableRow>
                        <TableCell>
                            <Typography
                                variant='h4'
                                sx={{
                                    color: '#003A9B',
                                    fontWeight: 600,
                                    backgroundColor: '#FFFFFF',
                                    p: theme.spacing(0.75),
                                    borderRadius: '40px',
                                }}
                            >
                                Door Opening
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600 }}>
                                Width
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600 }}>
                                Height
                            </Typography>
                        </TableCell>
                    </TableRow>
                </>
            )}

            <TableRow>
                <TableCell>
                    <Typography
                        variant='h4'
                        sx={{
                            color: '#003A9B',
                            fontWeight: 600,
                            backgroundColor: '#FFFFFF',
                            p: theme.spacing(0.75),
                            borderRadius: '40px',
                        }}
                    >
                        Weight
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600 }}>
                        Max Gross
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600 }}>
                        Tare Weight (excl. machinery)
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600 }}>
                        Tare Weight (incl. machinery)
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600 }}>
                        Max Payload
                    </Typography>
                </TableCell>
            </TableRow>

            <TableRow>
                <TableCell>
                    <Typography
                        variant='h4'
                        sx={{
                            color: '#003A9B',
                            fontWeight: 600,
                            backgroundColor: '#FFFFFF',
                            p: theme.spacing(0.75),
                            borderRadius: '40px',
                        }}
                    >
                        Max Point of Load
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600, visibility: 'hidden' }}>
                        values
                    </Typography>
                </TableCell>
            </TableRow>

            {lessRows ? (
                <></>
            ) : (
                <>
                    <TableRow>
                        <TableCell>
                            <Typography
                                variant='h4'
                                sx={{
                                    color: '#003A9B',
                                    fontWeight: 600,
                                    backgroundColor: '#FFFFFF',
                                    p: theme.spacing(0.75),
                                    borderRadius: '40px',
                                }}
                            >
                                Internal Capacity
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600, visibility: 'hidden' }}>
                                values
                            </Typography>
                        </TableCell>
                    </TableRow>
                </>
            )}
        </Table>
    )
}

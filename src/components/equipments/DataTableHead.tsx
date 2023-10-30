import React from 'react'
import { Typography, Table, TableRow, TableCell } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export default function DataTableHead({ lessRows }: { lessRows?: boolean }) {
    const theme = useTheme()

    return (
        <Table sx={{ width: '18rem' }}>
            <TableRow sx={{ height: '4.6rem' }}>
                <TableCell colSpan={2}>
                    <Typography
                        variant='h4'
                        sx={{ color: '#000000', fontWeight: 600, visibility: 'hidden', textAlign: 'center' }}
                    >
                        Head
                    </Typography>
                </TableCell>
            </TableRow>

            <TableRow sx={{ height: '4.6rem' }}>
                <TableCell>
                    <Typography
                        variant='subtitle2'
                        sx={{
                            color: '#003A9B',
                            fontWeight: 600,
                            backgroundColor: '#FFFFFF',
                            py: theme.spacing(0.5),
                            borderRadius: '40px',
                            textAlign: 'center',
                        }}
                    >
                        Internal Dimensions
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow sx={{ height: '4rem' }}>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }}>
                        Length
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow sx={{ height: '4rem' }}>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }}>
                        Width
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow sx={{ height: '4rem' }}>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }}>
                        Height
                    </Typography>
                </TableCell>
            </TableRow>

            {lessRows ? (
                <></>
            ) : (
                <>
                    <TableRow sx={{ height: '4.6rem' }}>
                        <TableCell>
                            <Typography
                                variant='subtitle2'
                                sx={{
                                    color: '#003A9B',
                                    fontWeight: 600,
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: '40px',
                                    textAlign: 'center',
                                    py: theme.spacing(0.5),
                                }}
                            >
                                Door Opening
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ height: '4rem' }}>
                        <TableCell>
                            <Typography
                                variant='subtitle2'
                                sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }}
                            >
                                Width
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ height: '4rem' }}>
                        <TableCell>
                            <Typography
                                variant='subtitle2'
                                sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }}
                            >
                                Height
                            </Typography>
                        </TableCell>
                    </TableRow>
                </>
            )}

            <TableRow sx={{ height: '4.6rem' }}>
                <TableCell>
                    <Typography
                        variant='subtitle2'
                        sx={{
                            color: '#003A9B',
                            fontWeight: 600,
                            backgroundColor: '#FFFFFF',
                            borderRadius: '40px',
                            textAlign: 'center',
                            py: theme.spacing(0.5),
                        }}
                    >
                        Weight
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow sx={{ height: '4rem' }}>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }}>
                        Max Gross
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow sx={{ height: '4rem' }}>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }}>
                        Tare Weight (excl. machinery)
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow sx={{ height: '4rem' }}>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }}>
                        Tare Weight (incl. machinery)
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow sx={{ height: '4rem' }}>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }}>
                        Max Payload
                    </Typography>
                </TableCell>
            </TableRow>

            <TableRow sx={{ height: '4.6rem' }}>
                <TableCell>
                    <Typography
                        variant='subtitle2'
                        sx={{
                            color: '#003A9B',
                            fontWeight: 600,
                            backgroundColor: '#FFFFFF',
                            borderRadius: '40px',
                            textAlign: 'center',
                            py: theme.spacing(0.5),
                        }}
                    >
                        Max Point of Load
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow sx={{ height: '4rem' }}>
                <TableCell>
                    <Typography
                        variant='subtitle2'
                        sx={{ color: '#000000', fontWeight: 600, visibility: 'hidden', textAlign: 'center' }}
                    >
                        values
                    </Typography>
                </TableCell>
            </TableRow>

            {lessRows ? (
                <></>
            ) : (
                <>
                    <TableRow sx={{ height: '4.6rem' }}>
                        <TableCell>
                            <Typography
                                variant='subtitle2'
                                sx={{
                                    color: '#003A9B',
                                    fontWeight: 600,
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: '40px',
                                    textAlign: 'center',
                                    py: theme.spacing(0.5),
                                }}
                            >
                                Internal Capacity
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ height: '4rem' }}>
                        <TableCell>
                            <Typography
                                variant='subtitle2'
                                sx={{ color: '#000000', fontWeight: 600, visibility: 'hidden', textAlign: 'center' }}
                            >
                                values
                            </Typography>
                        </TableCell>
                    </TableRow>
                </>
            )}
        </Table>
    )
}

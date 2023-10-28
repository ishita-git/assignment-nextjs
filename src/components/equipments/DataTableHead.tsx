import React from 'react'
import { Typography, Table, TableRow, TableCell } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export default function DataTableHead({ lessRows }: { lessRows?: boolean }) {
    const theme = useTheme()

    return (
        <Table sx={{ maxWidth: 400 }}>
            <TableRow>
                <TableCell colSpan={2}>
                    <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600, visibility: 'hidden' ,textAlign: 'center', }}>
                        Head
                    </Typography>
                </TableCell>
            </TableRow>

            <TableRow>
                <TableCell>
                    <Typography
                        variant='subtitle2'
                        sx={{
                            color: '#003A9B',
                            fontWeight: 600,
                            backgroundColor: '#FFFFFF',
                            py: theme.spacing(0.75),
                            borderRadius: '40px',textAlign: 'center', 
                        }}
                    >
                        Internal Dimensions
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600 ,textAlign: 'center', }}>
                        Length
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600,textAlign: 'center',  }}>
                        Width
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600,textAlign: 'center',  }}>
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
                                variant='subtitle2'
                                sx={{
                                    color: '#003A9B',
                                    fontWeight: 600,
                                    backgroundColor: '#FFFFFF',
                                    p: theme.spacing(0.75),
                                    borderRadius: '40px',textAlign: 'center', 
                                }}
                            >
                                Door Opening
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600,textAlign: 'center',  }}>
                                Width
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600 ,textAlign: 'center', }}>
                                Height
                            </Typography>
                        </TableCell>
                    </TableRow>
                </>
            )}

            <TableRow>
                <TableCell>
                    <Typography
                        variant='subtitle2'
                        sx={{
                            color: '#003A9B',
                            fontWeight: 600,
                            backgroundColor: '#FFFFFF',
                            p: theme.spacing(0.75),
                            borderRadius: '40px',textAlign: 'center', 
                        }}
                    >
                        Weight
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600 ,textAlign: 'center', }}>
                        Max Gross
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600 ,textAlign: 'center', }}>
                        Tare Weight (excl. machinery)
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600 ,textAlign: 'center', }}>
                        Tare Weight (incl. machinery)
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600,textAlign: 'center', }}>
                        Max Payload
                    </Typography>
                </TableCell>
            </TableRow>

            <TableRow>
                <TableCell>
                    <Typography
                        variant='subtitle2'
                        sx={{
                            color: '#003A9B',
                            fontWeight: 600,
                            backgroundColor: '#FFFFFF',
                            p: theme.spacing(0.75),
                            borderRadius: '40px',textAlign: 'center', 
                        }}
                    >
                        Max Point of Load
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, visibility: 'hidden',textAlign: 'center',  }}>
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
                                variant='subtitle2'
                                sx={{
                                    color: '#003A9B',
                                    fontWeight: 600,
                                    backgroundColor: '#FFFFFF',
                                    p: theme.spacing(0.75),
                                    borderRadius: '40px',textAlign: 'center', 
                                }}
                            >
                                Internal Capacity
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, visibility: 'hidden',textAlign: 'center',  }}>
                                values
                            </Typography>
                        </TableCell>
                    </TableRow>
                </>
            )}
        </Table>
    )
}

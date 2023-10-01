import React from 'react'
import { Paper, Typography, Table, TableRow, TableCell } from '@mui/material'
import useTheme from '@mui/material/styles/useTheme'

declare type DataTableProps = {
    small?: boolean
    lessRows?: boolean
    column?: {
        label?: string
        l?: {
            mm?: number
            ft?: string
        }
        w?: {
            mm?: number
            ft?: string
        }
        h?: {
            mm?: number
            ft?: string
        }
        doorWidth?: {
            mm?: number
            ft?: string
        }
        doorHeight?: {
            mm?: number
            ft?: string
        }
        weight?: {
            gross?: {
                kg?: number
                lbs?: number
            }
            twe?: {
                kg?: number
                lbs?: number
            }
            twi?: {
                kg?: number
                lbs?: number
            }
            maxPayload?: {
                kg?: number
                lbs?: number
            }
        }
        maxLoad?: {
            t?: number
            lbs?: number
        }
        capacity?: {
            m?: number
            ft?: number
        }
    }
}

export default function DataTable({ small, column, lessRows }: DataTableProps) {
    const theme = useTheme()

    return (
        <Table component={Paper} sx={{ maxWidth: small ? 250 : 400, borderRadius: '24px', mr: theme.spacing(0.5) }}>
            <TableRow>
                <TableCell colSpan={2}>
                    <Typography variant='h3' sx={{ color: '#000000', fontWeight: 600 }}>
                        {column?.label}
                    </Typography>
                </TableCell>
            </TableRow>

            <TableRow>
                <TableCell>
                    <Typography
                        variant='h4'
                        sx={{
                            color: '#000000',
                            backgroundColor: '#EFF6FF',
                            p: theme.spacing(0.75),
                            borderRadius: '40px',
                        }}
                    >
                        mm
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography
                        variant='h4'
                        sx={{
                            color: '#000000',
                            backgroundColor: '#EFF6FF',
                            p: theme.spacing(0.75),
                            borderRadius: '40px',
                        }}
                    >
                        ft
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600 }}>
                        {column?.l?.mm}
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600 }}>
                        {column?.l?.ft}
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600 }}>
                        {column?.w?.mm}
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600 }}>
                        {column?.w?.ft}
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600 }}>
                        {column?.h?.mm}
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600 }}>
                        {column?.h?.ft}
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
                                    color: '#000000',
                                    backgroundColor: '#EFF6FF',
                                    p: theme.spacing(0.75),
                                    borderRadius: '40px',
                                }}
                            >
                                mm
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography
                                variant='h4'
                                sx={{
                                    color: '#000000',
                                    backgroundColor: '#EFF6FF',
                                    p: theme.spacing(0.75),
                                    borderRadius: '40px',
                                }}
                            >
                                ft
                            </Typography>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600 }}>
                                {column?.doorWidth?.mm}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600 }}>
                                {column?.doorWidth?.ft}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600 }}>
                                {column?.doorHeight?.ft}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600 }}>
                                {column?.doorHeight?.ft}
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
                            color: '#000000',
                            backgroundColor: '#EFF6FF',
                            p: theme.spacing(0.75),
                            borderRadius: '40px',
                        }}
                    >
                        kg
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography
                        variant='h4'
                        sx={{
                            color: '#000000',
                            backgroundColor: '#EFF6FF',
                            p: theme.spacing(0.75),
                            borderRadius: '40px',
                        }}
                    >
                        lbs
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600 }}>
                        {column?.weight?.gross?.kg}
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600 }}>
                        {column?.weight?.gross?.lbs}
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600 }}>
                        {column?.weight?.twe?.kg}
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600 }}>
                        {column?.weight?.twe?.lbs}
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600 }}>
                        {column?.weight?.twi?.kg}
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600 }}>
                        {column?.weight?.twi?.lbs}
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600 }}>
                        {column?.weight?.maxPayload?.kg}
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600 }}>
                        {column?.weight?.maxPayload?.lbs}
                    </Typography>
                </TableCell>
            </TableRow>

            <TableRow>
                <TableCell>
                    <Typography
                        variant='h4'
                        sx={{
                            color: '#000000',
                            backgroundColor: '#EFF6FF',
                            p: theme.spacing(0.75),
                            borderRadius: '40px',
                            lineHeight: '1.55rem',
                        }}
                    >
                        T/m<sup>2</sup>
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography
                        variant='h4'
                        sx={{
                            color: '#000000',
                            backgroundColor: '#EFF6FF',
                            p: theme.spacing(0.75),
                            borderRadius: '40px',
                            lineHeight: '1.55rem',
                        }}
                    >
                        lbs/ft<sup>2</sup>
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell sx={{ height: theme.spacing(3) }}>
                    <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600 }}>
                        {column?.maxLoad?.t}
                    </Typography>
                </TableCell>
                <TableCell sx={{ height: theme.spacing(3) }}>
                    <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600 }}>
                        {column?.maxLoad?.lbs}
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
                                    color: '#000000',
                                    backgroundColor: '#EFF6FF',
                                    p: theme.spacing(0.75),
                                    borderRadius: '40px',
                                    lineHeight: '1.55rem',
                                }}
                            >
                                m<sup>3</sup>
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography
                                variant='h4'
                                sx={{
                                    color: '#000000',
                                    backgroundColor: '#EFF6FF',
                                    p: theme.spacing(0.75),
                                    borderRadius: '40px',
                                    lineHeight: '1.55rem',
                                }}
                            >
                                ft<sup>3</sup>
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600 }}>
                                {column?.capacity?.m}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600 }}>
                                {column?.capacity?.ft}
                            </Typography>
                        </TableCell>
                    </TableRow>
                </>
            )}
        </Table>
    )
}

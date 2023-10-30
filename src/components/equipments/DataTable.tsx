import React from 'react'
import { Paper, Typography, Table, TableRow, TableCell } from '@mui/material'
import { useTheme } from '@mui/material/styles'

declare type DataTableProps = {
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

export default function DataTable({ column, lessRows }: DataTableProps) {
    const theme = useTheme()

    return (
        <Table component={Paper} sx={{ width: '16rem', borderRadius: '24px', mr: theme.spacing(0.5) }}>
            <TableRow sx={{ height: '4.6rem' }}>
                <TableCell colSpan={2}>
                    <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }}>
                        {column?.label}
                    </Typography>
                </TableCell>
            </TableRow>

            <TableRow sx={{ height: '4.6rem' }}>
                <TableCell>
                    <Typography
                        variant='subtitle2'
                        sx={{
                            color: '#000000',
                            backgroundColor: '#EFF6FF',
                            borderRadius: '40px',
                            textAlign: 'center',
                            py: theme.spacing(0.5),
                        }}
                    >
                        mm
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography
                        variant='subtitle2'
                        sx={{
                            color: '#000000',
                            backgroundColor: '#EFF6FF',
                            py: theme.spacing(0.5),
                            borderRadius: '40px',
                            textAlign: 'center',
                        }}
                    >
                        ft
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow sx={{ height: '4rem' }}>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }}>
                        {column?.l?.mm}
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }}>
                        {column?.l?.ft}
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow sx={{ height: '4rem' }}>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }}>
                        {column?.w?.mm}
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }}>
                        {column?.w?.ft}
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow sx={{ height: '4rem' }}>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }}>
                        {column?.h?.mm}
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }}>
                        {column?.h?.ft}
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
                                    color: '#000000',
                                    backgroundColor: '#EFF6FF',
                                    borderRadius: '40px',
                                    textAlign: 'center',
                                    py: theme.spacing(0.5),
                                }}
                            >
                                mm
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography
                                variant='subtitle2'
                                sx={{
                                    color: '#000000',
                                    backgroundColor: '#EFF6FF',
                                    borderRadius: '40px',
                                    textAlign: 'center',
                                    py: theme.spacing(0.5),
                                }}
                            >
                                ft
                            </Typography>
                        </TableCell>
                    </TableRow>

                    <TableRow sx={{ height: '4rem' }}>
                        <TableCell>
                            <Typography
                                variant='subtitle2'
                                sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }}
                            >
                                {column?.doorWidth?.mm}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography
                                variant='subtitle2'
                                sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }}
                            >
                                {column?.doorWidth?.ft}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ height: '4rem' }}>
                        <TableCell>
                            <Typography
                                variant='subtitle2'
                                sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }}
                            >
                                {column?.doorHeight?.ft}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography
                                variant='subtitle2'
                                sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }}
                            >
                                {column?.doorHeight?.ft}
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
                            color: '#000000',
                            backgroundColor: '#EFF6FF',
                            borderRadius: '40px',
                            textAlign: 'center',
                            py: theme.spacing(0.5),
                        }}
                    >
                        kg
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography
                        variant='subtitle2'
                        sx={{
                            textAlign: 'center',
                            color: '#000000',
                            backgroundColor: '#EFF6FF',
                            borderRadius: '40px',
                            py: theme.spacing(0.5),
                        }}
                    >
                        lbs
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow sx={{ height: '4rem' }}>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }}>
                        {column?.weight?.gross?.kg}
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }}>
                        {column?.weight?.gross?.lbs}
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow sx={{ height: '4rem' }}>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }}>
                        {column?.weight?.twe?.kg}
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }}>
                        {column?.weight?.twe?.lbs}
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow sx={{ height: '4rem' }}>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }}>
                        {column?.weight?.twi?.kg}
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }}>
                        {column?.weight?.twi?.lbs}
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow sx={{ height: '4rem' }}>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }}>
                        {column?.weight?.maxPayload?.kg}
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }}>
                        {column?.weight?.maxPayload?.lbs}
                    </Typography>
                </TableCell>
            </TableRow>

            <TableRow sx={{ height: '4.6rem' }}>
                <TableCell>
                    <Typography
                        variant='subtitle2'
                        sx={{
                            color: '#000000',
                            backgroundColor: '#EFF6FF',
                            borderRadius: '40px',
                            lineHeight: '1.55rem',
                            textAlign: 'center',
                            py: theme.spacing(0.3),
                        }}
                    >
                        T/m<sup>2</sup>
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography
                        variant='subtitle2'
                        sx={{
                            color: '#000000',
                            backgroundColor: '#EFF6FF',
                            borderRadius: '40px',
                            lineHeight: '1.55rem',
                            textAlign: 'center',
                            py: theme.spacing(0.3),
                        }}
                    >
                        lbs/ft<sup>2</sup>
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow sx={{ height: '4rem' }}>
                <TableCell sx={{ height: theme.spacing(3) }}>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }}>
                        {column?.maxLoad?.t}
                    </Typography>
                </TableCell>
                <TableCell sx={{ height: theme.spacing(3) }}>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }}>
                        {column?.maxLoad?.lbs}
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
                                    color: '#000000',
                                    backgroundColor: '#EFF6FF',
                                    borderRadius: '40px',
                                    lineHeight: '1.55rem',
                                    textAlign: 'center',
                                    py: theme.spacing(0.3),
                                }}
                            >
                                m<sup>3</sup>
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography
                                variant='subtitle2'
                                sx={{
                                    color: '#000000',
                                    backgroundColor: '#EFF6FF',
                                    borderRadius: '40px',
                                    lineHeight: '1.55rem',
                                    textAlign: 'center',
                                    py: theme.spacing(0.3),
                                }}
                            >
                                ft<sup>3</sup>
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ height: '4rem' }}>
                        <TableCell>
                            <Typography
                                variant='subtitle2'
                                sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }}
                            >
                                {column?.capacity?.m}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography
                                variant='subtitle2'
                                sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }}
                            >
                                {column?.capacity?.ft}
                            </Typography>
                        </TableCell>
                    </TableRow>
                </>
            )}
        </Table>
    )
}

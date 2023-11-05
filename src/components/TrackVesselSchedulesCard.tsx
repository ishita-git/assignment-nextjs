import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Box, FormControl, InputLabel, MenuItem, Select, Typography, useMediaQuery } from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'
import { useTheme } from '@mui/material/styles'
import PrimaryButton from './PrimaryButton'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs from 'dayjs'
import 'dayjs/locale/en-gb'
import { fetchDataFromApi } from '../api/api'

let currentDate = new Date()

interface Port {
    id: number
    name: string
}

export default function TrackVesselSchedulesCard() {
    const theme = useTheme()
    const router = useRouter()
    const tabletMode = useMediaQuery('(max-width:899px)')

    const [originLocation, setOriginLocation] = useState('')
    const [destinationLocation, setDestinationLocation] = useState('')
    const [portList, setPortList] = useState<Port[]>([])
    const [selectedDate, setSelectedDate] = useState(dayjs(currentDate))

    const handleSetOrigin = (event: SelectChangeEvent) => {
        const selectedId = event.target.value as string
        setOriginLocation(selectedId)
    }

    const handleSetDestination = (event: SelectChangeEvent) => {
        const selectedId = event.target.value as string
        setDestinationLocation(selectedId)
    }

    const handleDateChange = (value: dayjs.Dayjs | null) => {
        if (value !== null) {
            setSelectedDate(value)
        }
    }

    useEffect(() => {
        async function fetchPortList() {
            try {
                const response = await fetchDataFromApi('api/port-list/')
                setPortList(response)
            } catch (error) {
                console.error('Error in fetching Port data: ', error)
            }
        }
        fetchPortList()
    }, [])

    const originPort = portList.find((port) => port.name === originLocation)
    const destinationPort = portList.find((port) => port.name === destinationLocation)

    const onSubmit = () => {
        const pol = originPort?.id
        const pod = destinationPort?.id
        const dateValue = selectedDate.format('YYYY-MM-DD')

        router.push({
            pathname: '/vessel-schedule',
            query: { pol, pod, dateValue },
        })
    }

    return (
        <Box
            sx={{
                backgroundColor: '#EFF6FF',
                height: '16.8rem',
                minWidth: tabletMode ? '30rem' : '26rem',
                borderRadius: '0px 16px 16px 16px',
                boxShadow: '4px 8px 8px 0px #00000033',
                padding: theme.spacing(1),
                position: 'relative',
            }}
        >
            <Box sx={{ mb: theme.spacing(1) }}>
                <InputLabel>Origin</InputLabel>
                <FormControl fullWidth>
                    <Select
                        value={originLocation}
                        onChange={handleSetOrigin}
                        displayEmpty
                        renderValue={
                            originLocation !== ''
                                ? () => (
                                      <Typography
                                          textAlign='start'
                                          sx={{ color: '#03122580', fontWeight: 600, ml: '-0.25rem' }}
                                      >
                                          {originLocation}
                                      </Typography>
                                  )
                                : () => (
                                      <Typography
                                          textAlign='start'
                                          sx={{ color: '#03122580', fontWeight: 600, ml: '-0.25rem' }}
                                      >
                                          Select Origin Point
                                      </Typography>
                                  )
                        }
                    >
                        <MenuItem value=''>
                            <em>Select Location</em>
                        </MenuItem>
                        {portList.map((port) => (
                            <MenuItem key={port.id} value={port.name}>
                                {port.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ mb: theme.spacing(1) }}>
                <InputLabel>Destination</InputLabel>
                <FormControl fullWidth>
                    <Select
                        value={destinationLocation}
                        onChange={handleSetDestination}
                        displayEmpty
                        renderValue={
                            originLocation !== ''
                                ? () => (
                                      <Typography
                                          textAlign='start'
                                          sx={{ color: '#03122580', fontWeight: 600, ml: '-0.25rem' }}
                                      >
                                          {destinationLocation}
                                      </Typography>
                                  )
                                : () => (
                                      <Typography
                                          textAlign='start'
                                          sx={{ color: '#03122580', fontWeight: 600, ml: '-0.25rem' }}
                                      >
                                          Select Destination Point
                                      </Typography>
                                  )
                        }
                    >
                        <MenuItem value=''>
                            <em>Select Location</em>
                        </MenuItem>
                        {portList.map((port) => (
                            <MenuItem key={port.id} value={port.name}>
                                {port.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>

            <Box
                sx={{
                    position: 'absolute',
                    bottom: theme.spacing(1),
                    left: theme.spacing(1),
                }}
            >
                <InputLabel>Date</InputLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-gb'>
                    <DatePicker
                        value={selectedDate}
                        onChange={handleDateChange}
                        closeOnSelect
                        sx={{
                            '& .MuiInputBase-root': {
                                height: '2.4rem',
                                width: '12rem',
                                backgroundColor: '#0312251A',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                color: '#6D7987',
                            },
                        }}
                        format='DD-MM-YYYY'
                    />
                </LocalizationProvider>
            </Box>

            <Box
                sx={{
                    position: 'absolute',
                    bottom: theme.spacing(1),
                    right: theme.spacing(1),
                }}
            >
                <PrimaryButton text='Track' onClick={onSubmit} />
            </Box>
        </Box>
    )
}

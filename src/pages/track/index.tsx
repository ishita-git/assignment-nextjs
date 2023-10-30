import React from 'react'
import Image, { StaticImageData } from 'next/image'
import {
    Box,
    Collapse,
    Container,
    Divider,
    Grid,
    IconButton,
    IconButtonProps,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
    styled,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import 'dayjs/locale/en-gb'
import titleImg from '../../assets/images/cargo-ship-1.webp'
import shipIcon from '../../assets/icons/icons_cargo_ship.png'
import circularShipIcon from '../../assets/icons/circular_ship_icon.png'
import locationIcon from '../../assets/icons/location.png'
import circularLocationIcon from '../../assets/icons/circular_location.png'
import Navbar from '@/components/Navbar'
import PrimaryTextField from '@/components/PrimaryTextField'
import PrimaryButton from '@/components/PrimaryButton'
import FooterSection from '@/sections/FooterSection'
import downArrowIcon from '../../assets/icons/arrow_down_circle.png'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import SportsScoreIcon from '@mui/icons-material/SportsScore'
import Layout from '../Layout'

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props
    return <IconButton {...other} />
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}))

export default function Home() {
    const theme = useTheme()
    var containerNumber = 'MEDU1650929'

    const [expanded, setExpanded] = React.useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    return (
        <Layout image={titleImg} title='Track Shipment' withTabs>
            <Box
                sx={{
                    mx: "20rem",
                    pt:"0.5rem",
                    px:"1.25rem",
                    bgcolor: '#FFFFFF',
                    borderRadius: '1rem',
                    position: 'relative',
                    bottom: "10rem",
                    display: "flex",
                    alignItems: "center"
                }}
            >
                < Box sx={{ width: "100%", mr: "1.25rem", mb: "0.5rem" }}>
                    <PrimaryTextField
                        label='Search'
                        placeholder='Enter Reference No. / Bill No. / container No.'
                        startIcon
                    />
                </Box>
                <Box sx={{}}>

                    <PrimaryButton text='Search' />
                </Box>


            </Box>
            <Box sx={{ mx: theme.spacing(2) }}>

                <Typography variant='h3' sx={{ textAlign: 'start', mb: '1rem', color: '#1B1B1F', fontWeight: 600 }}>
                    Container Number: {containerNumber}
                </Typography>
                <Box sx={{ bgcolor: '#FFFFFF', borderRadius: '1.25rem', p: '1.25rem',my: '2rem' }}>
                    <Box sx={{ display: 'flex', }}>
                        <Box sx={{ display: 'flex', width: "70%", px: "1rem", justifyContent: "space-evenly" }}>
                            <LocationOnIcon />
                            <CustomText title='Port of Loading' subtitle='Mundra' />
                            <Divider component='div' sx={{ margin: 'auto' }}>
                                <Image src={shipIcon} alt='' style={{ height: 'auto', width: '75%' }} />
                            </Divider>
                            <SportsScoreIcon />
                            <CustomText title='Port Of Discharge' subtitle='Jebel Ali' />
                        </Box>
                        <Divider orientation='vertical' flexItem />

                        <Box sx={{ display: 'flex', width: "100%", px: "1rem", wrap: "flex-wrap", justifyContent: "space-evenly" }}>

                            <CustomText title='Vessel/Voyage' subtitle='SHIMIN 015E' />

                            <CustomText title='Cargo Type' subtitle='Consolidated Cargo' />

                            <CustomText title='Current Location' subtitle='Singapore' />

                            <CustomText title='Container Type' subtitle='40 GP Standard' />

                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{ marginLeft: 'auto', mr: '0.5rem' }}>Status Detail</Typography>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label='show more'
                        >
                            <Image src={downArrowIcon} alt='' style={{ height: 'auto', width: '1.25rem' }} />
                        </ExpandMore>
                    </Box>
                    <Collapse in={expanded} timeout='auto' unmountOnExit>
                        <Divider sx={{ my: '2rem' }} />
                        <Paper sx={{ width: '100%', overflow: 'hidden', borderRadius: '1rem' }}>
                            <TableContainer sx={{}}>
                                <Table stickyHeader aria-label='sticky table'>
                                    <TableHead>
                                        <TableRow >
                                            {columns.map((column) => (
                                                <TableCell key={column.id} align='center' style={{}}>
                                                    {column.label}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows
                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((row, index) => {
                                                var rowColor = row.isDoc ? '#FFFFFF' : '#003A9B'
                                                var textColor = row.isDoc ? '#003A9B' : '#FFFFFF'
                                                return (
                                                    <TableRow
                                                        style={{
                                                            backgroundColor: `${rowColor}`,
                                                            borderRadius: '1rem',
                                                        }}
                                                        key={index}
                                                    >
                                                        <TableCell align='left'>
                                                            <Image
                                                                src={row.icon}
                                                                alt=''
                                                                style={{ height: '2rem', width: '2rem' }}
                                                            />
                                                        </TableCell>
                                                        <TableCell align='center' style={{ color: `${textColor}` }}>
                                                            {row.location}
                                                        </TableCell>
                                                        <TableCell align='center' style={{ color: `${textColor}` }}>
                                                            {row.date}
                                                        </TableCell>
                                                        <TableCell align='center' style={{ color: `${textColor}` }}>
                                                            {row.status}
                                                        </TableCell>
                                                    </TableRow>
                                                )
                                            })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component='div'
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>
                    </Collapse>
                </Box>
            </Box>
        </Layout >
    )
}

function CustomText({ title, subtitle }: { title: String; subtitle: String }) {
    return (
        <Box sx={{ mx: '1rem' }}>
            <Typography variant='subtitle2' sx={{ textAlign: 'start', fontSize: "0.75rem", mb: '0.5rem', color: '#1B1B1F', fontWeight: 200 }}>
                {title}
            </Typography>
            <Typography variant='body1' sx={{ textAlign: 'start', mb: '1rem', color: '#1B1B1F' }}>
                {subtitle}
            </Typography>
        </Box>
    )
}

interface Column {
    id: 'icon' | 'location' | 'date' | 'status'
    label: string
    minWidth?: number
    align?: 'center'
}

const columns: readonly Column[] = [
    {
        id: 'icon',
        label: '',
    },
    { id: 'location', label: 'Location' },
    { id: 'date', label: 'Date & Time' },
    {
        id: 'status',
        label: 'Status Description',
    },
]

interface Data {
    icon: string | StaticImageData
    location: string
    date: string
    status: string
    isDoc: boolean
}

function createData(location: string, date: string, status: string, isDoc: boolean): Data {
    var icon = isDoc == true ? circularLocationIcon : circularShipIcon
    return { icon, location, date, status, isDoc }
}

const rows = [
    createData('Mundra', '29-08-2023, 23:00', 'Empty Container release to shipper', true),
    createData('Singapore', '12-09-2023, 17:00', 'Empty Container release to shipper', false),
    createData('Jebel Ali', '25-09-2023, 19:00', ' ', true),
]

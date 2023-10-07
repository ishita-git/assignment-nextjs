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
    InputLabel,
    Typography,
    styled,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import 'dayjs/locale/en-gb'
import titleImg from '../../assets/images/cargo-ship-1.png'
import shipIcon from '../../assets/icons/icons_cargo_ship.png'
import arraowRight from '../../assets/icons/arrow-right-big.png'
import switchIcon from '../../assets/icons/switch.png'
import leftArrowIcon from '../../assets/icons/ep_back.png'
import rightArrowIcon from '../../assets/icons/ep_back_right.png'
import downArrowIcon from '../../assets/icons/arrow_down_circle.png'
import PrimaryTextField from '@/components/PrimaryTextField'
import FooterSection from '@/sections/FooterSection'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import HeaderSection from '@/sections/HeaderSection'
import { DatePicker } from '@mui/x-date-pickers'
import circularShipBlackIcon from '../../assets/icons/circular_ship_icon_black.png'
import circularShipGreyIcon from '../../assets/icons/circular_ship_icon_grey.png'
import circularLocationIcon from '../../assets/icons/circular_location.png'
import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import PrimaryButton from '@/components/PrimaryButton'
import SecondaryButton from '@/components/SecondaryButton'

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
let currentDate = new Date();
export default function Home() {
    const theme = useTheme();

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Box sx={{ backgroundColor: '#EFF6FF' }}>
            <HeaderSection
                image={titleImg}
                title='Schedules'

            />
            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    mx: "15rem"
                }}
            >
                <Box sx={{
                    width: "100%",
                    top: '-20vh',
                    position: "absolute",
                    bgcolor: '#FFFFFF',
                    p: "1.25rem",
                    borderRadius: "1.25rem",

                }} >
                    <Grid container spacing={1} alignItems="center">
                        <Grid item sm={10}>
                            <PrimaryTextField label='Origin' placeholder='Enter Origin Point' />
                            <PrimaryTextField label='Destination' placeholder='Enter Destination Point' />
                        </Grid>
                        <Grid item sm={2} >
                            <Image src={switchIcon} alt="" style={{ height: "auto", width: "25%" }} />
                        </Grid>
                    </Grid>
                    <InputLabel>Date</InputLabel>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-gb' >
                        <DatePicker
                            defaultValue={dayjs(currentDate)}
                            closeOnSelect
                            sx={{
                                '& .MuiInputBase-root': {
                                    height: '2.4rem',
                                    width: '12rem',
                                    backgroundColor: '#0312251A',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    color: '#6D7987',
                                    margin: 'auto'
                                },
                            }}

                            format='DD-MM-YYYY'
                        />
                    </LocalizationProvider>

                    <Box sx={{ position: "absolute", my: theme.spacing(1), alignItems: 'end', right: "1rem", bottom: "1rem" }}>
                        <SecondaryButton text='Cancel' />
                        <PrimaryButton text='Submit' />
                    </Box>
                </Box>
            </Box>

            <Box sx={{ mt: theme.spacing(10), p: theme.spacing(4), }}>
                <Container maxWidth='xl' >
                    <Box sx={{ display: "flex", mb: "1.25rem", alignItems: "center", }}>
                        <Typography variant='h3' sx={{ textAlign: 'start', color: '#1B1B1F' }}>
                            Mundra,India
                        </Typography>
                        <Image src={arraowRight} alt="" style={{ height: "auto", width: "5rem", margin: "0rem 4rem" }} />
                        <Typography variant='h3' sx={{ textAlign: 'start', color: '#1B1B1F' }}>
                            Jebel Ali, United Arab Emirates
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: "1.25rem", alignItems: "center", }}>
                        <Typography variant='body1' sx={{ textAlign: 'start', color: '#1B1B1F' }}>
                            Total: {"02"} Results
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Image src={leftArrowIcon} alt="" style={{ height: "auto", width: "1.25rem" }} />
                            <Typography variant='body1' sx={{ textAlign: 'start', color: '#1B1B1F', mx: "1.25rem" }}>
                                Previous Page
                            </Typography>
                            <Typography variant='body1' sx={{ textAlign: 'start', color: '#1B1B1F', mx: "1.25rem" }}>
                                Next Page
                            </Typography>
                            <Image src={rightArrowIcon} alt="" style={{ height: "auto", width: "1.25rem" }} />
                        </Box>
                    </Box>
                    <Box sx={{
                        position: "relative",
                        bgcolor: "#FFFFFF",
                        borderRadius: "1.25rem",
                        p: "1.25rem",
                        my: "2rem",
                        alignItems: "center"
                    }}
                    >
                        <Box sx={{ position: "absolute", right: "1.25rem", top: "1.25rem" }}>
                            <PrimaryButton text="Book Now" />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Box sx={{ width: "100%" }}>
                                <Typography variant='body1' sx={{ textAlign: 'center', mb: '1.25rem', color: '#003A9B' }}>
                                    20 Days
                                </Typography>
                                <Box sx={{ mr: "1.25rem", display: "flex", justifyContent: "space-between", width: "100%" }}>
                                    <LocationOnIcon />
                                    <CustomText title="Port of Loading" subtitle='Mundra' />
                                    <Divider component="div" sx={{ margin: "auto" }}>
                                        <Image src={shipIcon} alt="" style={{ height: "auto", width: "75%" }} />
                                    </Divider>
                                    <SportsScoreIcon />
                                    <CustomText title="Port Of Discharge" subtitle='Jebel Ali' />
                                </Box>
                                <Box sx={{ bgcolor: "#003A9B33", borderRadius: "1.25rem", p: "0.25rem", margin: "auto", width: "5rem", alignSelf: "center" }}>
                                    <Typography variant='body1' sx={{ textAlign: 'center', color: '#003A9B' }}>
                                        Direct
                                    </Typography>
                                </Box>
                            </Box>
                            <Divider orientation="vertical" flexItem sx={{ mx: "1.25rem" }} />
                            <Grid container spacing={1} sx={{}}>
                                <Grid item sm={4}>
                                    <CustomText title="Vessel/Voyage" subtitle='SHIMIN 015E' />
                                </Grid>
                                <Grid item sm={4}>
                                    <CustomText title="Service Lane" subtitle='NCI' />
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography sx={{ marginLeft: "auto", mr: "0.5rem" }}>
                                View Detail
                            </Typography>
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <Image src={downArrowIcon} alt="" style={{ height: "auto", width: "1.25rem" }} />
                            </ExpandMore>
                        </Box>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <Divider sx={{ my: "2rem" }} />
                            <DocLocation docTime="29-08-2023 23:00" pol=" ETD at POL" portName="Mundra" address=" Adani Ports and SEZ" />
                            <ShipLocation lane="IGS (Service Lane)" shipName="Shimin 015E" duration="11 Days 19 Hours" doc="28-08-2023 00:00" port="28-08-2023 00:00" inland="28-08-2023 00:00" vgm="28-08-2023 00:00" />
                            <DocLocation docTime="29-08-2023 23:00" pol=" ETD at POL" portName="Mundra" address=" Adani Ports and SEZ" />
                        </Collapse>
                    </Box>
                </Container>
            </Box>
            <FooterSection />
        </Box >

    )
}

function CustomText({ title, subtitle }: { title: String, subtitle: String }) {
    return <Box sx={{ mx: "0.5rem" }}>
        <Typography variant='h6' sx={{ textAlign: 'start', mb: '1rem', color: '#1B1B1F' }}>
            {title}
        </Typography>
        <Typography variant='body1' sx={{ textAlign: 'start', mb: '1rem', color: '#1B1B1F' }}>
            {subtitle}
        </Typography>
    </Box>
}

function DocLocation({ docTime, pol, portName, address }: { docTime: String, pol: String, portName: String, address: String }) {
    return <Box sx={{ display: "flex", alignItems: "center", }} >
        <Divider component="div" orientation="vertical"  >
            <Image src={circularLocationIcon} alt="" style={{ height: "2rem", width: "2rem" }} />
        </Divider>
        <Box sx={{ ml: "2rem" }}>
            <Box sx={{ display: "flex", alignItems: "center" }} >
                <Typography variant='body1' sx={{ textAlign: 'start', color: '#1B1B1F', mr: "0.5rem" }}>
                    {docTime}
                </Typography>
                <Typography sx={{ fontSize: "0.1rem", textAlign: 'start', color: '#313131B2' }}>
                    {pol}
                </Typography>
            </Box>
            <Typography variant='body1' sx={{ textAlign: 'start', color: '#003A9B', fontWeight: "bold", my: "0.25rem" }}>
                {portName}
            </Typography>
            <Typography variant='body1' sx={{ textAlign: 'start', color: '#1B1B1F' }}>
                {address}
            </Typography>
        </Box>
    </Box>
}
function ShipLocation({ lane, duration, shipName, doc, port, inland, vgm }: { lane: String, duration: String, shipName: String, doc: String, port: String, inland: String, vgm: String }) {
    return <Box sx={{ display: "flex", alignItems: "center", height: "12rem" }} >
        <Divider component="div" orientation="vertical" flexItem >
            <Image src={circularShipGreyIcon} alt="" style={{ height: "2rem", width: "2rem" }} />
        </Divider>
        <Box sx={{
            display: "flex",
            alignItems: "center",
            ml: "2rem",
            bgcolor: "#EFF6FF",
            width: "100%",
            p: "1.25rem",
            borderRadius: "1.25rem",
            justifyContent: "space-around",
        }}>
            <Box sx={{ display: "flex", alignItems: "center", }} >
                <Image src={circularShipBlackIcon} alt="" style={{ height: "2rem", width: "2rem" }} />
                <Box sx={{ mx: "1.25rem" }} >
                    <Typography variant='body2' sx={{ textAlign: 'start', color: '#1B1B1F', mb: "0.5rem" }}>
                        {lane}
                    </Typography>
                    <Typography variant='h6' sx={{ textAlign: 'start', color: '#003A9B', mb: "0.5rem" }}>
                        {shipName}
                    </Typography>
                    <Typography variant='body2' sx={{ textAlign: 'start', color: '#1B1B1F' }}>
                        {duration}
                    </Typography>
                </Box>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box sx={{ display: "flex", alignItems: "end", }} >
                <Box sx={{ mx: "1.25rem" }} >
                    <Typography variant='body1' sx={{ textAlign: 'start', color: '#1B1B1F', mb: "1rem" }}>
                        Cut off
                    </Typography>
                    <Typography variant='body2' sx={{ textAlign: 'start', color: '#1B1B1F' }}>
                        Doc
                    </Typography>
                    <Typography variant='body1' sx={{ textAlign: 'start', color: '#1B1B1F' }}>
                        {doc}
                    </Typography>
                </Box>
                <Box sx={{ mx: "1.25rem" }} >
                    <Typography variant='body2' sx={{ textAlign: 'start', color: '#1B1B1F' }}>
                        Inland
                    </Typography>
                    <Typography variant='body1' sx={{ textAlign: 'start', color: '#1B1B1F' }}>
                        {inland}
                    </Typography>
                </Box>
                <Box sx={{ mx: "1.25rem" }} >
                    <Typography variant='body2' sx={{ textAlign: 'start', color: '#1B1B1F' }}>
                        VGM
                    </Typography>
                    <Typography variant='body1' sx={{ textAlign: 'start', color: '#1B1B1F' }}>
                        {vgm}
                    </Typography>
                </Box>
                <Box sx={{ mx: "1.25rem" }} >
                    <Typography variant='body2' sx={{ textAlign: 'start', color: '#1B1B1F' }}>
                        Port
                    </Typography>
                    <Typography variant='body1' sx={{ textAlign: 'start', color: '#1B1B1F' }}>
                        {port}
                    </Typography>
                </Box>
            </Box>
        </Box>
    </Box>
}

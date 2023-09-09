import { Box, Typography, Grid, Link, Paper, IconButton, InputLabel, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Layout from '../../Layout'
import careerBackground from '../../../assets/career/career-background.png'
import { careerData } from "../../../data/careerData"
import { useRouter } from 'next/router'
import Image from 'next/image'
import PrimaryTextField from '@/components/PrimaryTextField'
import captcha from "../../../assets/images/captcha.png"
import reload from "../../../assets/icons/loop.png"
import PrimaryButton from '@/components/PrimaryButton'

export default function Home({ params }: { params: { jd: {} } }) {
    console.log(params);
    const data = careerData[0].jd;
    const theme = useTheme();
    return (
        <Layout image={careerBackground}>
            <Typography variant="h2" align='left'>
                {data.title}
            </Typography>
            <Grid container spacing={4} alignItems="center">

                <Grid item xs={12} sm={6} >
                    <Typography variant="h6" sx={{ color: "#000000", lineHeight: "1.5rem" }}>
                        {data.info}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <Image src={data.image} alt="" style={{ height: "auto", width: "100%" }} />

                </Grid>
            </Grid>
            <Box sx={{ my: theme.spacing(3) }}>

                <Grid container spacing={2} >
                    <Grid item xs={12} sm={6}>
                        <Typography textAlign={"start"} variant='h3' sx={{ color: "#031225", marginBottom: "1rem" }}>
                            Key Responsibilities
                        </Typography>
                        <Typography component={"ul"} textAlign={"start"} variant='body1' sx={{ color: "#031225", ml: "1.25rem" }} >
                            {data.responsibilites.map((item, index) => (
                                <Typography component={'li'} textAlign={"start"} variant='body1' sx={{ color: "#031225", mb: "1rem" }} key={index} >
                                    {item}
                                </Typography>
                            ))}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography textAlign={"start"} variant='h3' sx={{ color: "#031225", marginBottom: "1rem" }}>
                            Qualifications
                        </Typography>
                        <Typography component={"ul"} textAlign={"start"} variant='body1' sx={{ color: "#031225", ml: "1.25rem" }} >
                            {data.qualifications.map((item, index) => (
                                <Typography component={'li'} textAlign={"start"} variant='body1' sx={{ color: "#031225", mb: "1rem" }} key={index} >
                                    {item}
                                </Typography>
                            ))}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ mt: '4rem', mb: '2rem' }}>
                <Typography variant='h3' sx={{ textAlign: 'start', mb: '1rem', color: '#1B1B1F' }}>
                    Fill the form
                </Typography>
            </Box>
            <Paper sx={{ padding: '1rem', borderRadius: '16px' }}>
                <Grid container spacing={2}>
                    <Grid item sm={6} xs={12}>
                        <PrimaryTextField label='Name' placeholder='Enter your name' />
                        <PrimaryTextField label='Email' placeholder='Enter your email' />
                        <PrimaryTextField label='Mobile Number' placeholder='Enter your contact number' />
                        <PrimaryTextField label='Job Position' placeholder={data.title} disabled />
                        <PrimaryTextField label='Company' placeholder='Choose Company' select />
                        <InputLabel> Upload CV</InputLabel>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <PrimaryButton text='Choose File' />
                            <Typography sx={{ marginLeft: "1rem" }}>
                                No File Choosen
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <PrimaryTextField label='Current Salary (Monthly)' placeholder='Enter Current Salary' />
                        <PrimaryTextField label='Expected Salary (Monthly)' placeholder='Enter Expected Salary' />
                        <PrimaryTextField label='Availability / Notice Period' placeholder='Enter Current Notice Period' />
                        <PrimaryTextField label='Reason for leaving' placeholder='Enter your reason' multiline />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <PrimaryTextField label='Captcha' placeholder='Enter Captcha' />

                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Image
                                    src={captcha}
                                    alt='reload'
                                    style={{ height: '2rem', width: 'auto', marginRight: '0.5rem' }}
                                />
                                <IconButton>
                                    <Image src={reload} alt='reload' style={{ height: '1.5rem', width: 'auto' }} />
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ display: 'flex', justifyContent: 'end', marginBottom: '1rem',alignItems:"center" }}>
                    <PrimaryButton text='Submit' />
                </Box>
            </Paper>

        </Layout>
    )
}
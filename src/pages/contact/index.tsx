import { Box, Grid, Typography, InputLabel, TextField, Button } from '@mui/material'
import Layout from '../Layout'
import Image from 'next/image'
import contactBackground from '../../assets/contact/contact-background.png'
import PrimaryTextField from '@/components/PrimaryTextField'
import theme from '@/styles/theme'
import reload from "../../assets/icons/loop.png";
import map from "../../assets/contact/map_temp.png";

export default function Home() {
    return (
        <Layout title='We would love to deliver your goods' image={contactBackground} >

            <Grid container spacing={2} sx={{ width: '100%', mb: "5rem" }}>
                <Grid item xs>
                    <Box >
                        <Image src={map} alt="map" style={{
                            height: "18.75rem", width: "32.75rem"
                        }} />
                    </Box>
                </Grid>
                <Grid item xs>
                    <Box justifyContent={"left"}>
                        <Typography variant='h3' color={"#031225"} sx={{ mb: "1.5rem" }}>
                            Muskaan group of Companies
                        </Typography>
                        <Grid container item spacing={4} >
                            <Grid item xs>
                                {customTextFirst(" Registered Office", "Muskan Tower, Plot no.83, Old Palam Rd, Shiv Park, kakrola Mor,NEW DELHI - 110078")}
                                {customTextFirst("Telephone No.", "011 41587468/40687469")}
                            </Grid>
                            <Grid item xs>
                                {customTextFirst("Email ID", "info@mclpl.co.in")}
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
            <Box mb={theme.spacing(2)}>
                <Typography variant='h3' color={"#031225"} sx={{ mb: "0.85rem", textAlign: "left" }}>
                    Write to Us
                </Typography>
                <Typography variant='body1' color={"#031225"} sx={{ textAlign: "left" }}>
                    We'd love to hear from you
                </Typography>
            </Box>
            <Box sx={{ backgroundColor: "#FFFFFF", padding: theme.spacing(1), borderRadius: "1.25rem" }}>
                <Grid container spacing={2}>
                    <Grid item xs>

                        <PrimaryTextField
                            label="Name"
                            placeholder="Enter your name"
                        />

                        <PrimaryTextField
                            label="Email"
                            placeholder="Enter your email"
                        />
                        <Box sx={{ mb: '1rem' }}>
                            <InputLabel>{"Massage"}</InputLabel>
                            <Box sx={{ backgroundColor: '#0312251A', borderRadius: '0.5rem' }}>
                                <TextField
                                    variant="standard"
                                    placeholder={"Enter your massage"}
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                    inputProps={{
                                        style: {
                                            padding: '0.5rem',
                                            height: '3.6rem',
                                        },
                                    }}
                                    fullWidth
                                    multiline
                                    sx={{ input: { color: '#031225', fontWeight: 600 } }}
                                />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs>
                        <PrimaryTextField
                            label="Mobile Number"
                            placeholder="Enter your contact number"
                        />

                        <PrimaryTextField
                            label="Enquiry Type"
                            placeholder="Please select an enquiry type"
                        />

                        <Box sx={{ mb: '1rem' }}>
                            <InputLabel>{"Captcha"}</InputLabel>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }} >
                                <Box sx={{ backgroundColor: '#0312251A', borderRadius: '8px', marginRight: "1rem", width: "60%" }}>
                                    <TextField
                                        variant="standard"
                                        placeholder={"Enter Captcha"}
                                        InputProps={{
                                            disableUnderline: true,
                                        }}
                                        inputProps={{
                                            style: {
                                                padding: '0.5rem',
                                                height: '1.6rem',
                                            },
                                        }}
                                        fullWidth
                                        sx={{ input: { color: '#031225', fontWeight: 600 } }}
                                    />
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: '#0312251A', borderRadius: '8px', paddingX: "1rem", width: "40%" }}>
                                    <Typography sx={{ textAlign: "center" }}>456818</Typography>
                                    <Image src={reload} alt='"' style={{
                                        height: '1.5rem',
                                        width: '1.5rem',
                                        // margin: '1rem',
                                    }} />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
                <Box sx={{ display: "flex", justifyContent: "right", marginBottom: "1rem" }}>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            textTransform: 'capitalize',
                            borderRadius: '6px',
                            width: '9.8rem',
                            height: '2.8rem',
                            backgroundColor: '#003A9B',
                        }}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
        </Layout>
    )
}

function customTextFirst(label: String, body: String) {
    return <Box mb={"1rem"}>
        <Typography variant='body2' color={"#003A9B"} sx={{ mb: "0.5rem", fontWeight: "500" }}>
            {label}                               </Typography>
        <Typography variant='body2' color={"#1B1B1F"}>
            {body}
        </Typography>
    </Box>
}


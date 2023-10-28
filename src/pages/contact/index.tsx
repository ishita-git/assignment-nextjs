import React from 'react'
import Image from 'next/image'
import { Box, Grid, Typography, IconButton, InputLabel, Paper, FormControl, Select, MenuItem } from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'
import Layout from '../Layout'
import contactBackground from '../../assets/contact/contact-background.png'
import PrimaryTextField from '../../components/PrimaryTextField'
import reload from '../../assets/icons/loop.png'
import captcha from '../../assets/images/captcha.png'
import PrimaryButton from '../../components/PrimaryButton'
import MuskaanGroupHq from '../../components/MuskaanGroupHq'

export default function Home() {
    const [enquiryType, setEnquiryType] = React.useState('')

    const handleChange = (event: SelectChangeEvent) => {
        setEnquiryType(event.target.value as string)
    }

    return (
        <Layout image={contactBackground} title="Let's Talk" subtitle='We would love to deliver your goods'>
            <Box sx={{ mx: '5rem', my: '2rem' }}>
                <MuskaanGroupHq />
                <Box sx={{ mt: '4rem', mb: '2rem' }}>
                    <Typography variant='h3' sx={{ textAlign: 'start', mb: '1rem', color: '#1B1B1F' }}>
                        Write to Us
                    </Typography>
                    <Typography variant='body1' textAlign='start' sx={{ color: '#031225' }}>
                        We'd love to hear from you
                    </Typography>
                </Box>
                <Paper sx={{ padding: '1rem', borderRadius: '16px' }}>
                    <Grid container spacing={2}>
                        <Grid item sm={6} xs={12}>
                            <PrimaryTextField label='Name' placeholder='Enter your name' />
                            <PrimaryTextField label='Email' placeholder='Enter your email' />
                            <PrimaryTextField label='Message' placeholder='Enter your message' multiline />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <PrimaryTextField label='Mobile Number' placeholder='Enter your contact number' />

                            <Box sx={{ mb: '1rem' }}>
                                <InputLabel>Enquiry Type</InputLabel>
                                <FormControl fullWidth>
                                    <Select
                                        value={enquiryType}
                                        onChange={handleChange}
                                        displayEmpty
                                        renderValue={
                                            enquiryType !== ''
                                                ? () => (
                                                      <Typography
                                                          textAlign='start'
                                                          sx={{ color: '#03122580', fontWeight: 600, ml: '-0.25rem' }}
                                                      >
                                                          {enquiryType}
                                                      </Typography>
                                                  )
                                                : () => (
                                                      <Typography
                                                          textAlign='start'
                                                          sx={{ color: '#03122580', fontWeight: 600, ml: '-0.25rem' }}
                                                      >
                                                          Please select an enquiry type
                                                      </Typography>
                                                  )
                                        }
                                    >
                                        <MenuItem value=''>
                                            <em>Please select an enquiry type</em>
                                        </MenuItem>
                                        <MenuItem value='General Enquiry'>General Enquiry</MenuItem>
                                        <MenuItem value='Feedback'>Feedback</MenuItem>
                                        <MenuItem value='Claims'>Claims</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>

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
                    <Box sx={{ display: 'flex', justifyContent: 'end', marginBottom: '1rem' }}>
                        <PrimaryButton text='Submit' />
                    </Box>
                </Paper>
            </Box>
        </Layout>
    )
}

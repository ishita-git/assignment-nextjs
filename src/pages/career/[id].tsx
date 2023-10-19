import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import {
    Box,
    Typography,
    Grid,
    Paper,
    IconButton,
    InputLabel,
    FormControl,
    Select,
    Slide,
    Snackbar,
    MenuItem,
} from '@mui/material'
import MuiAlert from '@mui/material/Alert'
import { SelectChangeEvent } from '@mui/material/Select'
import { useTheme } from '@mui/material/styles'
import Layout from '../Layout'
import PrimaryTextField from '../../components/PrimaryTextField'
import captcha from '../../assets/images/captcha.png'
import reload from '../../assets/icons/loop.png'
import PrimaryButton from '../../components/PrimaryButton'
import SecondaryButton from '../../components/SecondaryButton'
import careerBackground from '../../assets/career/career-background.png'
import careerBanner from '../../assets/career/marketing_lg.png'
import { fetchDataFromApi, postDataToApi } from '../../api/api'

interface JobType {
    id: number
    image: string | StaticImageData
    title: string
    company: string
    location: string
    description: string
    qualification: string
    requirements: string
}

export default function JobDetail() {
    const theme = useTheme()
    const router = useRouter()

    const { id } = router.query

    const [careerData, setCareerData] = useState<JobType[] | null>(null)

    useEffect(() => {
        async function fetchCareerData() {
            try {
                const response = await fetchDataFromApi('api/job-list/')
                setCareerData(response)
            } catch (error) {
                console.error('Error in fetching job data: ', error)
            }
        }
        fetchCareerData()
    }, [id])

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        current_salary: '',
        expected_salary: '',
        notice_period: '',
        reason: '',
        jobLocation: '',
    })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }
    const handleSelect = (event: SelectChangeEvent) => {
        setFormData({ ...formData, jobLocation: event.target.value })
    }

    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const [snackbarMessage, setSnackbarMessage] = useState('')

    const openSnackbar = (message: string) => {
        setSnackbarMessage(message)
        setSnackbarOpen(true)
    }
    const handleSnackbarClose = () => {
        setSnackbarOpen(false)
    }

    const handleFormSubmit = async () => {
        try {
            const response = await postDataToApi('api/job-create/', formData)
            console.log('Form submitted successfully:', response)
            openSnackbar('Form submitted successfully')
        } catch (error) {
            console.error('Error submitting the form:', error)
            openSnackbar('Form Submission Unsuccessful')
        }
    }

    const jobData = careerData ? careerData[id] : null

    return (
        <Layout image={careerBackground} title='Join Muskaan' subtitle='Unlock a World of Career Possibilities'>
            <Typography variant='h2' align='left' sx={{ mb: '2rem' }}>
                {jobData?.title}
            </Typography>
            <Grid container spacing={4} alignItems='center'>
                <Grid item xs={12} sm={6}>
                    <Typography variant='h6' sx={{ color: '#000000', lineHeight: '1.5rem', ml: '1.25rem' }}>
                        <div dangerouslySetInnerHTML={{ __html: jobData?.requirements }} />
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Image
                        src={jobData?.image || careerBanner}
                        alt='banner'
                        style={{ height: 'auto', width: '100%' }}
                    />
                </Grid>
            </Grid>
            <Box sx={{ my: theme.spacing(3) }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography textAlign='start' variant='h3' sx={{ color: '#031225', mb: '1rem' }}>
                            Key Responsibilities
                        </Typography>
                        <Typography variant='h6' sx={{ color: '#031225', ml: '1.25rem', lineHeight: '1.5rem' }}>
                            <div dangerouslySetInnerHTML={{ __html: jobData?.requirements }} />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography textAlign='start' variant='h3' sx={{ color: '#031225', mb: '1rem' }}>
                            Qualifications
                        </Typography>
                        <Typography variant='h6' sx={{ color: '#031225', ml: '1.25rem', lineHeight: '1.5rem' }}>
                            <div dangerouslySetInnerHTML={{ __html: jobData?.qualification }} />
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
                        <PrimaryTextField
                            label='Name'
                            placeholder='Enter your name'
                            name='name'
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        <PrimaryTextField
                            label='Email'
                            placeholder='Enter your email'
                            name='email'
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <PrimaryTextField
                            label='Mobile Number'
                            placeholder='Enter your contact number'
                            name='phone'
                            value={formData.phone}
                            onChange={handleInputChange}
                            startText
                        />
                        <PrimaryTextField label='Job Position' placeholder={jobData?.title} disabled />

                        <Box sx={{ mb: '1rem' }}>
                            <InputLabel>Job Location</InputLabel>
                            <FormControl fullWidth>
                                <Select
                                    value={formData.jobLocation}
                                    onChange={handleSelect}
                                    displayEmpty
                                    renderValue={
                                        formData.jobLocation !== ''
                                            ? () => (
                                                  <Typography
                                                      textAlign='start'
                                                      sx={{ color: '#03122580', fontWeight: 600, ml: '-0.25rem' }}
                                                  >
                                                      {formData.jobLocation}
                                                  </Typography>
                                              )
                                            : () => (
                                                  <Typography
                                                      textAlign='start'
                                                      sx={{ color: '#03122580', fontWeight: 600, ml: '-0.25rem' }}
                                                  >
                                                      Job Location
                                                  </Typography>
                                              )
                                    }
                                >
                                    <MenuItem value=''>
                                        <em>Select Location</em>
                                    </MenuItem>
                                    <MenuItem value='Delhi'>Delhi</MenuItem>
                                    <MenuItem value='Gujrat'>Gujrat</MenuItem>
                                    <MenuItem value='Mumbai'>Mumbai</MenuItem>
                                    <MenuItem value='Chennai'>Chennai</MenuItem>
                                    <MenuItem value='Kolkata'>kolkata</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <PrimaryTextField
                            label='Current Salary (Monthly)'
                            placeholder='Enter Current Salary'
                            name='current_salary'
                            value={formData.current_salary}
                            onChange={handleInputChange}
                        />
                        <PrimaryTextField
                            label='Expected Salary (Monthly)'
                            placeholder='Enter Expected Salary'
                            name='expected_salary'
                            value={formData.expected_salary}
                            onChange={handleInputChange}
                        />
                        <PrimaryTextField
                            label='Availability / Notice Period'
                            placeholder='Enter Current Notice Period'
                            name='notice_period'
                            value={formData.notice_period}
                            onChange={handleInputChange}
                        />
                        <PrimaryTextField
                            label='Reason for leaving current employment'
                            placeholder='Enter your reason'
                            name='reason'
                            value={formData.reason}
                            onChange={handleInputChange}
                            multiline
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mb: theme.spacing(2) }}>
                    <Grid item sm={6} xs={12}>
                        <InputLabel> Upload CV</InputLabel>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <PrimaryButton
                                text='Choose File'
                                onClick={() => {
                                    console.log('File Uploaded')
                                }}
                            />
                            <Typography sx={{ marginLeft: '1rem' }}>No File Choosen</Typography>
                        </Box>
                    </Grid>
                    <Grid item sm={6} xs={12}>
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

                <Box sx={{ display: 'flex', justifyContent: 'end', my: theme.spacing(1), alignItems: 'center' }}>
                    <SecondaryButton text='Cancel' />
                    <PrimaryButton text='Submit' onClick={handleFormSubmit} />
                </Box>
            </Paper>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={4000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                TransitionComponent={(props) => <Slide {...props} direction='right' />}
            >
                <MuiAlert elevation={6} variant='filled' severity='success'>
                    {snackbarMessage}
                </MuiAlert>
            </Snackbar>
        </Layout>
    )
}

import { Box, Container, Grid, Link, Typography } from '@mui/material'
import Navbar from '../../components/Navbar'
import FooterSection from '../../sections/FooterSection'
import { useTheme } from '@mui/material/styles'
import { usefulDownloads } from '../../data/downloadData'
import downloadIcon from '../../assets/icons/download.png'
import Image from 'next/image'

export default function Home() {
    const theme = useTheme()

    return (
        <Box>
            <Box
                sx={{
                    px: theme.spacing(4),
                    py: theme.spacing(2),
                    backgroundColor: '#003A9B',
                }}
            >
                <Navbar />
            </Box>
            <Box sx={{ mx: theme.spacing(4) }}>
                <Container maxWidth="xl" disableGutters>
                    <Box sx={{ my: "4rem" }}>
                        <Typography variant="h2" sx={{ color: "#003A9B" }} >
                            Useful Downloads
                        </Typography>
                        <Typography variant="body1" sx={{ color: "#313131",mx:"5rem"}} >
                            Explore a curated collection of resources that empower your decisions and enrich your understanding. From expert insights to informative guides, your journey of discovery awaits
                        </Typography>
                    </Box>

                    <Grid container spacing={2} wrap='wrap'>

                        {usefulDownloads.map((item, index) => (
                            <Grid item xs={12} sm={4} key={index} >
                                <Box sx={{ bgcolor: "#ffffff", padding: "1rem", borderRadius: "1.1rem" ,height:"100%"}}>
                                    <Typography variant='h6' sx={{ color: "#313131", mb:"1rem" }}>
                                        {item.title}
                                    </Typography >
                                    <Typography variant='body1' sx={{ color: " rgba(49, 49, 49, 0.80)", textAlign: "start", mb:"0.5rem" }}>
                                        {item.description}
                                    </Typography>
                                    <Link href="/">
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Typography variant='h6' sx={{ color: "#313131" }}>
                                                Downloads
                                            </Typography>
                                            <Image src={downloadIcon} alt="" style={{ width: "1.25rem", height: "auto",marginLeft:"0.25rem" }} />
                                        </Box>
                                    </Link>

                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
            <FooterSection />
        </Box>
    )
}

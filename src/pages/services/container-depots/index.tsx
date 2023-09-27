import { Box, Grid, Typography } from '@mui/material'
import ServicesLayout from '../ServicesLayout'
import Image from 'next/image'
import backgroundImg from "../../../assets/services/empty_container_bg.png"
import titleImg from "../../../assets/services/empty_container_img.png"

export default function Home() {
    return (
        <ServicesLayout image={backgroundImg} title='Services'>
            <Box sx={{ mb: "2.5rem" }}>
                <Typography variant='h3' sx={{ textAlign: "start", color: "#031225", marginBottom: "2.5rem" }}>
                    Empty Container Depots
                </Typography>
                <Grid container spacing={2} alignItems="center" sx={{mb:"1rem"}}>
                    <Grid item xs={12} sm={6}>
                        <Typography paragraph variant='h5' sx={{ color: "#031225", fontWeight: "400", textAlign: "start" }}>
                            Muskan Container Lines is a prominent player in the logistics sector, operating depots in key Indian cities such as Nhava Sheva, Chennai, Dadri, Ludhiana, Hyderabad, Mundra, Ahmedabad, and Kolkata. These depots are purpose-built to offer uninterrupted, round-the-clock services to our clients, featuring modern amenities and top-notch security measures.
                        </Typography>
                        <Typography paragraph variant='h5' sx={{ color: "#031225", fontWeight: "400", textAlign: "start" }}>
                            Our Empty Container Depots boast exceptional capacity, with paver-blocked storage areas capable of accommodating over 12,000 TEUs. These facilities are equipped with CCTV cameras to ensure the safety and security of both assets and cargo.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Image src={titleImg} alt="" style={{ width: "100%", height: "auto" }} />
                    </Grid>
                </Grid>
                <Typography paragraph variant='h5' sx={{ color: "#031225", fontWeight: "400", textAlign: "start" }}>
                    Moreover, we adhere to International Institute of Container Lessors (IICL) standards, guaranteeing meticulous maintenance and repair services for all our equipment.
                </Typography>
                <Typography paragraph variant='h5' sx={{ color: "#031225", fontWeight: "400", textAlign: "start" }}>
                    Muskan Container Lines is a trusted partner for major shipping lines, particularly in the storage and maintenance of Reefer Containers across our depots. Our extensive inventory of essential equipment, including Top Lifters, Loaded Reach Stackers, Side Lifters, and Forklifts, enables us to efficiently manage container operations, ensuring the highest quality of service.
                </Typography>
                <Typography paragraph variant='h5' sx={{ color: "#031225", fontWeight: "400", textAlign: "start" }}>
                    Our Top Lifters facilitate the precise handling of heavy containers, optimizing storage and logistics processes. Loaded Reach Stackers are versatile machines used for lifting, transporting, and stacking containers with efficiency. Side Lifters offer unique capabilities for safe and efficient container transport, while Forklifts play a vital role in cargo movement within our depots.
                </Typography>
                <Typography paragraph variant='h5' sx={{ color: "#031225", fontWeight: "400", textAlign: "start" }}>
                    In essence, Muskan Container Lines stands out as a premier depot management provider, offering a comprehensive range of services across strategically located depots. Our unwavering commitment to excellence, security, and equipment maintenance makes us a preferred partner for clients seeking top-tier logistics and container management solutions.
                </Typography>
            </Box>
        </ServicesLayout>
    )
}

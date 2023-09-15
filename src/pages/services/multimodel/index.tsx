import { Box, Grid, Typography } from '@mui/material'
import ServicesLayout from '../ServicesLayout'
import Image from 'next/image'
import backgroundImg from "../../../assets/services/multi_model_bg.png"
import titleImg from "../../../assets/services/multi_model_img.png"

export default function Home() {
    return (
        <ServicesLayout image={backgroundImg} title='Services'>
            <Box sx={{ mb: "2.5rem" }}>
                <Typography variant='h3' sx={{ textAlign: "start", color: "#031225", marginBottom: "2.5rem" }}>
                    Multi Model - Transportation
                </Typography>
                <Grid container spacing={2} alignItems="center" sx={{mb:"1rem"}}>
                    <Grid item xs={12} sm={6}>
                        <Typography paragraph variant='h5' sx={{ color: "#031225", fontWeight: "400", textAlign: "start" }}>
                            Muskan Container Lines Pvt. Ltd. excels in Multimodal Transport services, seamlessly integrating air, sea, and land transportation into an efficient and interconnected chain. This holistic approach ensures cost-effective, door-to-door cargo movement from a single source. Our extensive network, a key component of our Supply Chain Management System, enhances overall cargo efficiency.
                        </Typography>
                        <Typography paragraph variant='h5' sx={{ color: "#031225", fontWeight: "400", textAlign: "start" }}>
                            We are dedicated to proactively addressing transportation challenges, aligning solutions with your specific needs. Beyond our reputation as a shipping company, our expertise in multimodal transport sets us apart.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Image src={titleImg} alt="" style={{ width: "100%", height: "auto" }} />
                    </Grid>
                </Grid>
                <Typography paragraph variant='h5' sx={{ color: "#031225", fontWeight: "400", textAlign: "start" }}>
                    We have a proven record in managing cargo across multiple modes under a single contract. Our strong network of relationships with transport operators enables us to offer top-tier services.
                </Typography>
                <Typography paragraph variant='h5' sx={{ color: "#031225", fontWeight: "400", textAlign: "start" }}>
                    Containerization's profound impact on our industry is evident in our commitment to multimodal transport. This approach streamlines coordination and minimizes time loss and risks associated with cargo handling at trans-shipment points. In essence, our multimodal services provide a comprehensive solution to modern logistics challenges.
                </Typography>
                <Typography paragraph variant='h5' sx={{ color: "#031225", fontWeight: "400", textAlign: "start" }}>
                    In recent years, we've seen significant growth in our NVOCC activities, particularly in Europe and the Gulf, as we've actively promoted them alongside our overseas partners. Our commitment to door-to-door services remains unwavering, even in the realm of NVOCC.
                </Typography>
            </Box>
        </ServicesLayout>
    )
}

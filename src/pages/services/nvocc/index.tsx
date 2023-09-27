import { Box, Grid, Typography } from '@mui/material'
import ServicesLayout from '../ServicesLayout'
import Image from 'next/image'
import backgroundImg from "../../../assets/services/nvocc_bg.png"
import titleImg from "../../../assets/services/nvocc_img.png"

export default function Home() {
    return (
        <ServicesLayout image={backgroundImg}title='Services'>
            <Box sx={{ mb: "2.5rem" }}>
                <Typography variant='h3' sx={{ textAlign: "start", color: "#031225", marginBottom: "2.5rem" }}>
                    NVOCC (NON Vessel Operating Common Carrier)
                </Typography>
                <Grid container spacing={2} alignItems="center" sx={{mb:"1rem"}}>
                    <Grid item xs={12} sm={6}>
                        <Typography paragraph variant='h5' sx={{ color: "#031225", fontWeight: "400", textAlign: "start" }}>
                            Muskan Container Lines Pvt Ltd is a renowned NVOCC player with a strong presence not only in India but also across the Middle East, Far East, and South East Asia. Our extensive fleet of over 1000 TEUs signifies our commitment to excellence, and we're expanding our services to the CIS countries.
                        </Typography>
                        <Typography paragraph variant='h5' sx={{ color: "#031225", fontWeight: "400", textAlign: "start" }}>
                            We take pride in our proactive approach to logistics, actively engaging with shipping lines, port agents, local carriers, and other partners to ensure the safe and timely delivery of your shipments worldwide. Our competent staff possesses the expertise to handle all aspects of ocean cargo logistics efficiently.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Image src={titleImg} alt="" style={{ width: "100%", height: "auto" }} />
                    </Grid>
                </Grid>
                <Typography paragraph variant='h5' sx={{ color: "#031225", fontWeight: "400", textAlign: "start" }}>
                    Our network is fortified by robust domestic and international alliances, enhancing our capacity to meet our clients' diverse requirements. We excel in export/import services and leverage strong IT infrastructure to provide real-time shipment status updates, ensuring transparency at every stage.
                </Typography>
                <Typography paragraph variant='h5' sx={{ color: "#031225", fontWeight: "400", textAlign: "start" }}>
                    In recent years, we've seen significant growth in our NVOCC activities, particularly in Europe and the Gulf, as we've actively promoted them alongside our overseas partners. Our commitment to door-to-door services remains unwavering, even in the realm of NVOCC.
                </Typography>
                <Typography paragraph variant='h5' sx={{ color: "#031225", fontWeight: "400", textAlign: "start" }}>
                    In conclusion, Muskan Container Lines Pvt Ltd is a trusted NVOCC leader serving global markets. Our large fleet, proactive collaborations, competent team, and advanced IT systems position us as a reliable partner for seamless logistics solutions. We are dedicated to delivering excellence, ensuring that your cargo reaches its destination safely and on time.
                </Typography>
            </Box>
        </ServicesLayout>
    )
}

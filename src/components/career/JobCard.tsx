import { Grid, Box, Typography } from "@mui/material";
import Link from "next/link";
import Image, { StaticImageData } from 'next/image'

declare type JobCardProps = {
    image: string | StaticImageData,
    jobTitle: String,
    jobDes: String,
    page: any,
}

export default function JobCard({ image, jobTitle, jobDes, page }: JobCardProps) {
    return (
        <Grid item xs={6} sm={4} >
            <Link href={`/career/${{jd:page}}`} >
                <Box sx={{ bgcolor: "#FFFFFF", padding: "2rem", borderRadius: "1.25rem", height: "100%" }}>
                    <Image src={image} alt="" style={{ width: "25%", height: "auto", marginBottom: "1.5rem", }} />
                    <Typography variant='h6' sx={{ color: "#313131", textAlign: "center" }} gutterBottom >
                        {jobTitle}
                    </Typography>
                    <Typography variant='body1' sx={{ color: "rgba(49, 49, 49, 0.80)", marginBottom: "1rem" }} >
                        {jobDes}
                    </Typography>
                </Box>
            </Link>
        </Grid>
    )
}


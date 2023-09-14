import { Box, Typography, Grid ,Link} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Layout from '../Layout'
import careerBackground from '../../assets/career/career-background.png'
import { careerData } from "../../data/careerData"
import JobCard from '../../components/career/JobCard'




export default function Home() {
    const theme = useTheme();    
    return (
        <Layout image={careerBackground}>
            <Box sx={{ my: theme.spacing(3) }}>
                <Typography variant="h2" gutterBottom>
                    Interested? We are Hiring
                </Typography>
                <Typography variant='h6' sx={{ color: "#031225", textAlign: "center" }}>
                    We're looking for amazing people to join our team. Check out our current job openings
                </Typography>
            </Box>
            <Grid container spacing={2} wrap='wrap'>
                {careerData.map((item, index) => (
                    <JobCard page={item.jd} jobTitle={item.title} jobDes={item.subtitle} image={item.image} key={index} />
                ))}
            </Grid>
        </Layout>
    )
}
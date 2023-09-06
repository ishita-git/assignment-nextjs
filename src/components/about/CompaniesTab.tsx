import { Container, Typography, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { companiesTabData } from "../../data/aboutData"
import Image, { StaticImageData } from 'next/image'


export default function CompaniesTab() {
    const theme = useTheme()

    return (
        <Container maxWidth="xl">
            <Box >
                <Typography
                    variant="h2"
                    textAlign="start"
                    sx={{ my: theme.spacing(2) }}
                >
                    India
                </Typography>
                {companiesTabData.map((item, index) => (
                    item.country == 'INDIA' ? <CompanyInfoCard des={item.des} coverImage={item.image} title={item.name} key={index} />
                        : <></>
                ))}
            </Box>
            <Box >
                <Typography
                    variant="h2"
                    textAlign="start"
                    sx={{ margin: "4rem 0 2rem 0" }}
                >
                    Overseas
                </Typography>
                {companiesTabData.map((item, index) => (
                    item.country != 'INDIA' ? <CompanyInfoCard des={item.des} coverImage={item.image} title={item.name} key={index} />
                        : <></>
                ))}
            </Box>
        </Container>
    )
}


function CompanyInfoCard({ title, des, coverImage }: { title: String, des: String, coverImage: string | StaticImageData }) {
    const theme = useTheme();
    return (
        <Box sx={{ position: "relative", mb: "1.5rem" }} >
            <Image
                src={coverImage}
                alt="card background"
                style={{
                    width: '100%',
                    height: 'auto',

                }}
            />
            <Box sx={{
                p: theme.spacing(2.5),
                top: 0,
                left: 0,
                width: "60%",
                position: "absolute"
            }}>
                <Typography variant="h3" sx={{ textAlign: "start", mb: "1.5rem" }} >
                    {title}
                </Typography>
                <Typography paragraph variant='body1' sx={{ lineHeight: "1.5rem", fontWeight: "400", color: "#FFFFFF", textAlign: "start" }}>
                    {des}
                </Typography>
            </Box>
        </Box>
    )
}
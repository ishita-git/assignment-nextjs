import { Typography, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { companiesTabData } from "../../data/aboutData"
import  CompanyInfoCard  from './CompanyInfoCard'


export default function CompaniesTab() {
    const theme = useTheme()

    return (
        <Box>
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
        </Box>
    )
}


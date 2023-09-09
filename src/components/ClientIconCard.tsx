import { Box } from '@mui/material'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'

function ClientIconCard({ icon }: { icon: string | StaticImageData }) {
    return (
        <Box>
            <Image src={icon} alt='client icon' style={{ width: '100%', height: '4rem', cursor: 'pointer' }} />
        </Box>
    )
}

export default ClientIconCard

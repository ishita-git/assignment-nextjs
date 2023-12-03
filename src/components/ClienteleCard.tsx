import { Box, Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useState } from 'react'

declare type ClienteleCardProps = {
    cardImage: string
    title?: string
    subtitle?: string
}
interface BlogEntry {
    id: number;
    title: string;
    subtitle: string;
    cardImage: string
  }
  const blogEntries: BlogEntry[] = [
    { id: 1, title: 'Blog 1', subtitle: 'Content 1', cardImage: 'blog1.jpeg' },
    { id: 2, title: 'Blog 2', subtitle: 'Content 2', cardImage: 'blog1.jpeg' },
    { id: 3, title: 'Blog 3', subtitle: 'Content 2', cardImage: 'blog1.jpeg' },
    { id: 4, title: 'Blog 4', subtitle: 'Content 2', cardImage: 'blog1.jpeg' },
    { id: 5, title: 'Blog 5', subtitle: 'Content 2', cardImage: 'blog1.jpeg' },
    { id: 6, title: 'Blog 6', subtitle: 'Content 2', cardImage: 'blog1.jpeg' },
    { id: 6, title: 'Blog 7', subtitle: 'Content 2', cardImage: 'blog1.jpeg' },
    { id: 6, title: 'Blog 8', subtitle: 'Content 2', cardImage: 'blog1.jpeg' },
    // Add more blog entries here
]

export default function ClienteleCard({ cardImage,  title, subtitle }: ClienteleCardProps) {
    const theme = useTheme()
    const [editingBlog, setEditingBlog] = useState<BlogEntry | null>(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState<BlogEntry[]>(blogEntries);

 


    return (
        <Box  alignItems='center' padding='20px' display='flex' flexDirection='column' justifyContent='center'  border='1px solid gray' margin='10px' >
            <Grid item xs={4.2}>
                <img src={cardImage} alt='card image' width='100%' height='auto' />
            </Grid>
            <Grid item xs={7.8} sx={{ px: theme.spacing(5), pt: theme.spacing(4) }}>
                
                <Typography
                    variant='subtitle2'
                    sx={{
                        fontWeight: 600,
                        fontSize: '2rem',
                        mt: theme.spacing(2),
                        mb: theme.spacing(1),
                    }}
                >
                    {title}
                </Typography>
                <Typography variant='subtitle2' textAlign='justify'>
                    {subtitle}
                </Typography>
                {/* Modal for editing */}
      
               
            </Grid>
        </Box>
    )
}

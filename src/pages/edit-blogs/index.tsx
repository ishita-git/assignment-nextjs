import React, { ChangeEvent, useState } from 'react'

import { Box, Input } from '@mui/material'

import Navbar from '@/components/Navbar'
import ClienteleCard from '@/components/ClienteleCard'

interface BlogEntry {
    id: number
    title: string
    cardImage: string
    subtitle: string
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


export default function Home() {
   
   
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredBlogs, setFilteredBlogs] = useState<BlogEntry[]>(blogEntries);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const term: string = e.target.value
        setSearchTerm(term)

        // Filter blogEntries based on the search term
        const filtered: BlogEntry[] = blogEntries.filter((entry) => entry.title.toLowerCase().includes(term.toLowerCase()))
        setFilteredBlogs(filtered)
    }
    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <Navbar />
            <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                <h1>Edit Blogs</h1>
                <Input placeholder='Search Blogs' value={searchTerm} onChange={handleSearch} />
                <Box display={'grid'} gridTemplateColumns={'auto auto auto auto'}>
                    {/* Display filtered blogs */}
                    {filteredBlogs.map((blog) => (
                        <ClienteleCard cardImage={blog.cardImage} title={blog.title} subtitle={blog.subtitle} />
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

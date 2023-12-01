import axios from 'axios'

const baseUrl = 'https://test.muskan-group.com'

// GET request
export async function fetchDataFromApi(endpoint: string): Promise<any> {
    try {
        const response = await axios.get(`${baseUrl}/${endpoint}`)
        return response.data
    } catch (error) {
        throw error
    }
}

// POST request
export async function postDataToApi(endpoint: string, data: any): Promise<any> {
    try {
        const response = await axios.post(`${baseUrl}/${endpoint}`, data)
        return response.data
    } catch (error) {
        throw error
    }
}

// PUT request
export async function updateDataInApi(endpoint: string, data: any): Promise<any> {
    try {
        const response = await axios.put(`${baseUrl}/${endpoint}`, data)
        return response.data
    } catch (error) {
        throw error
    }
}

// DELETE request
export async function deleteDataFromApi(endpoint: string): Promise<any> {
    try {
        const response = await axios.delete(`${baseUrl}/${endpoint}`)
        return response.data
    } catch (error) {
        throw error
    }
}

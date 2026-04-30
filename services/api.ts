//  data fetch logic

import { ApiResponse } from '@/types'

const API_URL = process.env.API_URL
const API_KEY = process.env.API_KEY

export async function getProducts(): Promise<ApiResponse> {
    try {
    const response = await fetch(API_URL!, {
        headers: {
            'x-api-key': API_KEY!,
        },
    })
    if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`)
        }
        return response.json()
    }
    catch (error) {
        console.error(error) 
        throw error
    }
}
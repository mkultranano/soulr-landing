import axios from 'axios';

const API_URL = 'https://api.soulr.com/v1'; // Replace with your actual API endpoint

export interface WaitlistResponse {
  success: boolean;
  message: string;
}

export async function joinWaitlist(email: string): Promise<WaitlistResponse> {
  try {
    // For demo purposes, we'll simulate an API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In production, replace this with your actual API call:
    // const response = await axios.post(`${API_URL}/waitlist`, { email });
    // return response.data;
    
    return {
      success: true,
      message: 'Successfully joined the waitlist!'
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to join waitlist');
    }
    throw error;
  }
}
import axios, { AxiosInstance } from 'axios'

export default class AxiosService {
  private axiosInstance: AxiosInstance

  constructor(baseURL: string, token?: string) {
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
  }

  async post(url: string, body: any): Promise<any> {
    const response = await this.axiosInstance.post(url, body)
    console.log(response.data)
    return response.data
  }

  async get(url: string): Promise<any> {
    const response = await this.axiosInstance.get(url)
    return response.data
  }

  async delete(url: string): Promise<any> {
    const response = await this.axiosInstance.delete(url)
    return response.data
  }

  async put(url: string): Promise<any> {
    const response = await this.axiosInstance.put(url)
    return response.data
  }
}

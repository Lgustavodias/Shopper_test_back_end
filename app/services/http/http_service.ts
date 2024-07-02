import ApplicationException from '#exceptions/application_exception'

type ContentType = 'application/json' | 'text/html'

export class HttpClient {
  constructor(private uri: string) {}

  private async transform(content_type: ContentType, response: Response) {
    const converter = {
      'text/html': async (resp: Response) => await resp.text(),
      'application/json': async (resp: Response) => await resp.json(),
    }

    return converter[content_type](response)
  }

  private async http<T = unknown>(path: string, config: RequestInit) {
    const sanitizedPath = path.startsWith('/') ? path.slice(1) : path

    const request = new Request(`${this.uri}/${sanitizedPath}`, config)
    const response = await fetch(request)
    const contentType = response.headers.get('content-type')?.split(';')[0]

    const data = await this.transform(contentType as ContentType, response)

    // Change to handle errors custom
    if (!response.ok) {
      throw new ApplicationException('Erro', { status: response.status, code: response.statusText })
    }

    return data as T
  }

  async get<T = unknown>(path: string, config?: Omit<RequestInit, 'method'>) {
    const init: RequestInit = { method: 'GET', ...config }
    return await this.http<T>(path, init)
  }

  async post<T = unknown, U = unknown>(
    path: string,
    body: T,
    config?: Omit<RequestInit, 'method'>
  ): Promise<U> {
    const init: RequestInit = {
      method: 'POST',
      body: JSON.stringify(body),
      ...config,
    }

    return await this.http<U>(path, init)
  }

  async put<T = unknown, U = unknown>(
    path: string,
    body: T,
    config?: Omit<RequestInit, 'method'>
  ): Promise<U> {
    const init = { method: 'PUT', body: JSON.stringify(body), ...config }
    return await this.http<U>(path, init)
  }
}

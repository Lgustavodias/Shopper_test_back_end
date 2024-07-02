const url = process.env.DATABASE_URL

export function getHost(): string | undefined {
  return url !== undefined ? url.split('@')[1].split(':')[0] : undefined
}

export function getPort(): number | undefined {
  return url !== undefined ? Number.parseInt(url.split(':')[3].split('/')[0]) : undefined
}

export function getUser(): string | undefined {
  return url !== undefined ? url.split('/')[2].split(':')[0] : undefined
}

export function getPassword(): string | undefined {
  return url !== undefined ? url.split(':')[2].split('@')[0] : undefined
}

export function getDbName(): string | undefined {
  return url !== undefined ? url.split('/')[3] : undefined
}

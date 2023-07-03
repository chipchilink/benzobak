export interface Located {
  location: string
}

export const byLocation = (location: string | null) => (itm: Located) => {
  if (location === null) return true
  return itm.location === location
}

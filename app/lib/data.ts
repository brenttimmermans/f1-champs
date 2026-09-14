import type { Driver, DriversList } from '~/types'

import DRIVERS from '~/data/drivers.json'
import CHAMPIONS from '~/data/champions.json'

export function getAllDrivers(): string[] {
  return DRIVERS
}

export function getAllChampions(): DriversList {
  return CHAMPIONS
}

export function getChampionsSince(year: number): DriversList {
  return Object.fromEntries(
    Object.entries(getAllChampions()).filter(([key]) => parseInt(key) > year),
  )
}

export function getChampionByYear(year: number): Driver | undefined {
  return getAllChampions()[year]
}

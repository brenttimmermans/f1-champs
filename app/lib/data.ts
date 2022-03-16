import type { Driver, DriversList } from '~/types'

import DRIVERS from '~/data/drivers.json'
import CHAMPIONS from '~/data/champions.json'

export async function getAllDrivers(): Promise<DriversList> {
  const drivers = DRIVERS as unknown as DriversList
  return drivers
}

export async function getAllChampions(): Promise<DriversList> {
  const champions = CHAMPIONS as unknown as DriversList
  return champions
}

export async function getChampionsSince(year: number): Promise<DriversList> {
  const drivers = await getAllChampions()

  return Object.fromEntries(
    Object.entries(drivers).filter(([key]) => {
      return parseInt(key) > year
    }),
  )
}

export async function getChampionByYear(
  year: number,
): Promise<Driver | undefined> {
  const drivers = await getAllChampions()
  return drivers[year]
}

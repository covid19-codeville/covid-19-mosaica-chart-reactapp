import { useState, useEffect } from 'react'
import { toChartDateString } from '../lib'
import Service from '../service'

/*
  Fetch countries list
*/
export function useCountriesFetcher () {
  const [ countries, setCountries ] = useState([])
  useEffect(() => {
    async function fetchData () {
      const [err, countriesList] = await Service.fetchCountries()

      if (!err) {
        setCountries(countriesList)
      }
    }

    fetchData()
  }, [])

  return countries
}

/*
  Fetch country chart data
*/
export function useCountryChartData (currentCountry) {
  const [ chartData, setChartData ] = useState([])

  useEffect(() => {
    async function fetchData () {
      const [err, data] = await Service.fetchChartData(currentCountry)

      if (!err) {
        setChartData(data.map(item => ({
          ...item,
          updated: toChartDateString(new Date(item.updated))
        })))
      }
    }

    fetchData()
  }, [currentCountry])

  return chartData
}
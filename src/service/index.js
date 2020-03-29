import { DATA_SOURCE } from '../config'

class Covid19ChartService {
  constructor (sourceUrl) {
    if (!sourceUrl) {
      throw new Error('Check your data source for service!')
    }
    this.sourceUrl = sourceUrl
  }

  async fetchChartData (city = 'russia') {
    try {
      const response = await fetch(`${this.sourceUrl}api/v1/chart/${city}`)
      const data = await response.json()

      return [null, data]
    }
    catch (e) {
      return [e.message, null]
    }
  }

  async fetchCountries () {
    try {
      const response = await fetch(`${this.sourceUrl}api/v1/countries`)
      const data = await response.json()

      return [null, data]
    }
    catch (e) {
      return [e.message, null]
    }
  }
}

export default new Covid19ChartService(DATA_SOURCE)
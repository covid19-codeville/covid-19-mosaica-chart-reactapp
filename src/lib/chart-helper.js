import React from 'react'
import DefaultTooltipContent from 'recharts/es6/component/DefaultTooltipContent'

/*
  Render tooltip content
*/
export const renderDynamicLegend = (props) => {
  const { payload, ...other } = props;

  const updatedPayload = payload.map((entry, index) => {
    let dataKey = entry.dataKey
    let value = entry.value

    switch (entry.dataKey) {
      case 'dynamics.recovered':
        dataKey = 'recoveredTotal'
        value = `${value > 0 ? `+${value}` : `${value}`} (Всего ${entry.payload[dataKey]})`
        break
      case 'dynamics.deaths' :
        dataKey = 'deathsTotal'
        value = `${value > 0 ? `+${value}` : `${value}`} (Всего ${entry.payload[dataKey]})`
        break
      case 'dynamics.cases' :
        dataKey = 'casesTotal'
        value = `${value > 0 ? `+${value}` : `${value}`} (Всего ${entry.payload[dataKey]})`
        break
      default:
        dataKey = entry.dataKey
        break
    }

    return {
      ...entry,
      dataKey,
      value
    }
  })

  return <DefaultTooltipContent {...other} payload={updatedPayload} />
}
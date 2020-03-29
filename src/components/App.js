import React, { useState } from 'react'

import {
  Line, LineChart, XAxis, Tooltip, Legend,ResponsiveContainer
} from 'recharts';

import {
  renderDynamicLegend
} from '../lib/chart-helper'

import {
  useCountriesFetcher,
  useCountryChartData
} from '../lib/chart-hooks'

import Countries from './Countries'

import { DEFAULT_COUNTRY_NAME } from '../config'

function Covid19Chart() {
  const [ currentCountry, setCurrentCountry ] = useState(DEFAULT_COUNTRY_NAME)

  const countries = useCountriesFetcher()
  const chartData = useCountryChartData(currentCountry)

  const onCountrySelect = e => setCurrentCountry(e.target.value)

  return (
    <React.Fragment>
    {chartData.length > 0 ? (
      <div className="Covid19Chart">
        <Countries countries={countries} onChange={onCountrySelect} value={currentCountry} />

        <ResponsiveContainer width='100%' height={300}>
          <LineChart data={chartData}>
            <Line
              type="monotone"
              name="Заболеваемость"
              dataKey="dynamics.cases"
              fill="#e36e79"
              strokeWidth="1"
              stroke="#e36e79"
              legendType="rect"
            />
            <Line type="monotone"
              name="Выздоравливаемость"
              dataKey="dynamics.recovered"
              fill="#4dcd85"
              strokeWidth="1"
              stroke="#4dcd85"
              legendType="rect"
            />
            <Line type="monotone"
              name="Смертность"
              dataKey="dynamics.deaths"
              fill="#383838"
              strokeWidth="1"
              stroke="#383838"
              legendType="rect"
            />
            <XAxis dataKey="updated" />
            <Tooltip content={renderDynamicLegend} />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    ) : ''}
    </React.Fragment>

  );
}

export default Covid19Chart;

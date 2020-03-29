import React from 'react'
import { __ } from '../lib'

export default function Countries ({ countries, onChange = __, value }) {
  return <select onChange={onChange} value={value}>
    {countries.map((countryObj, index) => (
      <option key={index} value={countryObj.name}>{countryObj.label}</option>
    ))}
  </select>
}
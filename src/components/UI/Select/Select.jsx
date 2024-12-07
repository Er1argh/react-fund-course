import React from 'react'

const Select = ({ options, defaultValue, value, onChange }) => {
  return (
    <select value={value} onChange={event => onChange(event.target.value)}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map(o => (
        <option key={o.value} value={o.value}>
          {o.name}
        </option>
      ))}
    </select>
  )
}

export default Select

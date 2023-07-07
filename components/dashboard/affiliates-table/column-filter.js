import React from 'react'

export default function ColumnFilter({column}) {
    const { getFilterValue , setFilterValue } = column.column
    return (
        <input 
            type="text"
            value={getFilterValue() || ''}
            onChange={(e)=>{setFilterValue(e.target.value)}}
        />
    )
}

'use client'

import { useState } from 'react'
import styles from './affiliates-table.module.css'
import {columns} from './columns'
import Filter from './filter'
import {
    useReactTable,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getFilteredRowModel,
    getFacetedUniqueValues,
    getFacetedMinMaxValues,
} from '@tanstack/react-table'


export default function AffiliatesTable({data}) {
    // console.log(data)

    const [filter,setFilter]=useState('')

    const table = useReactTable(
        {
            data,
            columns,
            getCoreRowModel: getCoreRowModel(),
            getPaginationRowModel: getPaginationRowModel(),
            getFilteredRowModel:getFilteredRowModel(),
            state:{
                globalFilter:filter
            },
            getFacetedUniqueValues: getFacetedUniqueValues(),
            getFacetedMinMaxValues: getFacetedMinMaxValues(),
            onGlobalFilterChange:setFilter,
        }
    )

  return (
    <div>
        <h1>Tabla de afiliados</h1>
        <input type="text"
          value={filter} 
          style={{"margin":"10px"}} 
          placeholder='Busqueda general...'
          onChange={(e)=>{
            setFilter(e.target.value)
          }} 
        />
        <table className={styles.table}>
            <thead>
            {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                    <th key={header.id} className={styles.headerCell}>
                    {
                        flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                        )
                    }
                    {/* <Filter column={header} setFilter={setFilter}/> */}
                    <Filter column={header.column} table={table} />
                    </th>
                ))}
                </tr>
            ))}
            </thead>
            <tbody>
            {table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                    <td key={cell.id} className={styles.cell}> 
                    {
                        flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                            )
                        }
                    </td>
                ))}
                </tr>
            ))}
            </tbody>
        </table>

        {/* PAGINADO  */}

        <div className="h-2" />
        <div className="flex items-center gap-2">
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              table.setPageIndex(page)
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={e => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {[2, 5, 10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <div>{table.getRowModel().rows.length} Rows</div>
      <pre>{JSON.stringify(table.getState().pagination, null, 2)}</pre>
    </div>
  )
}

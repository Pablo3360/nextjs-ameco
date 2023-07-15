'use client'

import { useState } from 'react'
import styles from './affiliates-table.module.css'
import {columns} from './columns'
import Filter from './filter'
import Actions from './actions'
import {
    useReactTable,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getFilteredRowModel,
    getFacetedUniqueValues,
    getFacetedMinMaxValues,
} from '@tanstack/react-table'


export default function EmployersTable({data}) {

    const [filter,setFilter]=useState('')

    const table = useReactTable(
        {
            data,
            columns,
            getCoreRowModel: getCoreRowModel(),
            getPaginationRowModel: getPaginationRowModel(),
            getFilteredRowModel:getFilteredRowModel(),           
            initialState: {
                pagination: { pageSize: 12, pageIndex: 0, }, 
            },
            state:{
              globalFilter:filter,
            },
            getFacetedUniqueValues: getFacetedUniqueValues(),
            getFacetedMinMaxValues: getFacetedMinMaxValues(),
            onGlobalFilterChange:setFilter,
        }
    )
    return (
    <div>
        <input type="text"
          value={filter} 
          style={{"margin":"10px"}} 
          placeholder='Busqueda general...'
          onChange={(e)=>{
            setFilter(e.target.value)
          }} 
        />
        <h1>({table.getFilteredRowModel().rows.length})</h1>
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
                   {
                    header.id==='recaudador'||header.id==='localidad'?
                    <Filter column={header.column} table={table} />:
                    null
                   }
                    </th>
                ))}
                </tr>
            ))}
            </thead>
            <tbody>
            {table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                {row.getVisibleCells().map(cell => {
                  return (
                    <td key={cell.id} className={styles.cell}> 
                    { cell.column.columnDef.accessorKey==='actions'?<Actions/>:
                      cell.column.columnDef.accessorKey==='nacimiento' || cell.column.columnDef.accessorKey==='FechaDeAlta'?
                      flexRender(
                        numberToDate(cell.getValue()),
                        cell.getContext()
                      ):
                      flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                      )
                    }
                    </td>
                )})}
                </tr>
            ))}
            </tbody>
        </table>

        {/* PAGINADO  */}

        <div className="h-2" />
            <div className={styles.buttons}>
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
            </div>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
    </div>
  )
}

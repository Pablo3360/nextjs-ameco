import React from 'react'
import {columns} from './columns'
import { numberToDate } from '@/app/functions'
import Actions from './actions'
import {
    useReactTable,
    flexRender,
    getCoreRowModel,
} from '@tanstack/react-table'
import styles from './participantes-table.module.css'

export default function ParticipantesTable({data}) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })
  return (
    <div>
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
                    { cell.column.columnDef.accessorKey==='actions'?<Actions affiliateId={cell.row.original.id}/>:
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
    </div>
  )
}


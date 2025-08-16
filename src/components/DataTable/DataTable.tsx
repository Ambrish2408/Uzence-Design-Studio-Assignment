import React, { useState } from 'react'

export interface Column<T> {
  key: keyof T
  header: string
}

export interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
  loading?: boolean
  selectable?: boolean
  onRowSelect?: (selectedRows: T[]) => void
}

const DataTable = <T extends { id: number | string }>({ data, columns, loading, selectable, onRowSelect }: DataTableProps<T>) => {
  const [selected, setSelected] = useState<T[]>([])

  const toggleRow = (row: T) => {
    let updated: T[]
    if (selected.includes(row)) {
      updated = selected.filter((r) => r !== row)
    } else {
      updated = [...selected, row]
    }
    setSelected(updated)
    onRowSelect?.(updated)
  }

  if (loading) return <div>Loading...</div>
  if (!data.length) return <div>No data available</div>

  return (
    <table className="min-w-full border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          {selectable && <th className="p-2 border">Select</th>}
          {columns.map((col) => (
            <th key={String(col.key)} className="p-2 border text-left">{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={String(row.id)} className="hover:bg-gray-50">
            {selectable && (
              <td className="p-2 border">
                <input type="checkbox" checked={selected.includes(row)} onChange={() => toggleRow(row)} />
              </td>
            )}
            {columns.map((col) => (
              <td key={String(col.key)} className="p-2 border">{String(row[col.key])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DataTable
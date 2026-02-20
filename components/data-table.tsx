type DataTableProps = {
  columns: string[]
  rows: string[][]
}

export function DataTable({ columns, rows }: DataTableProps) {
  return (
    <div className="table-scroll border border-border">
      <table className="min-w-[980px] w-full border-collapse text-sm">
        <thead>
          <tr className="bg-accent text-[#0f0f0f]">
            {columns.map((col) => (
              <th key={col} className="border border-[#b89335] px-4 py-3 text-left font-semibold">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={`${row[0]}-${i}`}
              className={
                (i % 2 === 0 ? 'bg-card ' : 'bg-section ') +
                'transition-colors hover:bg-[#c9a84c12]'
              }
            >
              {row.map((cell, idx) => (
                <td key={`${cell}-${idx}`} className="border border-border px-4 py-3 text-[#d9d9d9]">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

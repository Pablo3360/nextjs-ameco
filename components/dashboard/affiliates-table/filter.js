import React from "react";

export default function Filter({
    column,
    table,
  }) {
    const firstValue = table
      .getPreFilteredRowModel()
      .flatRows[0]?.getValue(column.id);
  
    const columnFilterValue = column.getFilterValue();
  
    const sortedUniqueValues = React.useMemo(
      () =>
        typeof firstValue === 'number'
          ? []
          : Array.from(column.getFacetedUniqueValues().keys()).sort(),
      [column.getFacetedUniqueValues()]
    );
    function dateToNumber(fecha) {
      if (typeof(fecha)==='string'){
        var partes = fecha.split('-');
        var fechaObjeto = new Date(partes[0], partes[1] - 1, partes[2]);
        var numero = fechaObjeto.getTime();
        return numero;
      } else return fecha
  }
    return typeof firstValue === 'number' ? (
      <div>
        <div className="flex space-x-2">
          <div>
            <span style={{'fontSize':'10px'}}>Min</span>
            <DebouncedInput
              type="date"
              min={column.getFacetedMinMaxValues()?.[0] ?? ''}
              max={column.getFacetedMinMaxValues()?.[1] ?? ''}
              onChange={(value) =>{
                let dateInNumber=dateToNumber(value)
                column.setFilterValue((old) => [dateInNumber, old?.[1]])
              }}
              className="w-24 border shadow rounded"
            />
          </div>
          <div>
          <span style={{'fontSize':'10px'}}>max</span>
          <DebouncedInput
            type="date"
            min={column.getFacetedMinMaxValues()?.[0] ?? ''}
            max={column.getFacetedMinMaxValues()?.[1] ?? ''}
            onChange={(value) =>{
              let dateInNumber=dateToNumber(value)
              column.setFilterValue((old) => [old?.[0], dateInNumber])
            }}
            className="w-24 border shadow rounded"
          />
          </div>
        </div>
        <div className="h-1" />
      </div>
    ) : (
      <>
        <datalist id={column.id + 'list'}>
          {sortedUniqueValues.slice(0, 5000).map((value,index) => (
            <option value={value} key={value+index} />
          ))}
        </datalist>
        <DebouncedInput
          type="text"
          value={(columnFilterValue ?? '')}
          onChange={(value) => column.setFilterValue(value)}
          placeholder={`Search... (${column.getFacetedUniqueValues().size})`}
          className="w-36 border shadow rounded"
          list={column.id + 'list'}
        />
        <div className="h-1" />
      </>
    );
  }
  
  function DebouncedInput({
    value: initialValue,
    onChange,
    debounce = 500,
    ...props
  }) {
    const [value, setValue] = React.useState(initialValue);
  
    React.useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);
  
    React.useEffect(() => {
      const timeout = setTimeout(() => {
        onChange(value);
      }, debounce);
  
      return () => clearTimeout(timeout);
    }, [value]);
  
    return (
      <input {...props} value={value} onChange={(e) => setValue(e.target.value)} />
    );
  }
  
import { useState,useEffect } from "react";
import styles from './debouncedInput.module.css'

export default function DebouncedInput({
    value: initialValue,
    onChange,
    debounce = 500,
    ...props
  }) {
    const [value, setValue] = useState(initialValue);
  
    useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);
  
    useEffect(() => {
        const timeout = setTimeout(() => {
        onChange(value);
    }, debounce);
        return () => clearTimeout(timeout);
    }, [value]);
  
    return (
      <input {...props} value={value} onChange={(e) => setValue(e.target.value)} className={styles.input}/>
    );
}
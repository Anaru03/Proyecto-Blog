import { useState } from "react"

function Input({ label, type, onChange, name }) {
    const [value, setValue] = useState('')

    const ChangeType = (change) => {
        setValue (change.target.value)
        onChange(change)
    }

    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <input
                type={type}
                className="form-control"
                onChange={ChangeType}
                name = {name}
                value={value || ''}
            />
        </div>
    )
}



export default Input
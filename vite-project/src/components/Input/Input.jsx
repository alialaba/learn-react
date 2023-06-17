import "./Input.css"
export default function Input({type, onChange,placeholder, id, name, value,label, autoComplete, defaultValue, error, autoFocus}){
    return(
        <div className="field__wrap">
            <label className="field__label">
                {label}

             </label>
            <input
            id={id}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            name={name}
            value={value}
            defaultValue={defaultValue}
            // autoComplete={autoComplete}
            // autoFocus={autoFocus}
            className="field__input"
            />
           
            {error && <span className="field__error">{error}</span>}
        </div>
    );
}
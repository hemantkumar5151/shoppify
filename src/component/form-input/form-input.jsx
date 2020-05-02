import React from 'react'
import './form-input.scss';
export default function form_input({handleChange, label, ...otherProps}) {
    return (
        <div className="group">
            <input className="form-input"
                onChange={handleChange}
                {...otherProps} />
                {
                    label ? (<label className={`props.value.length ? 'shrink' : '' `}>{label}</label>) : ''
                        
                }
        </div>
    )
}

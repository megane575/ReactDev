import './style.css';

export const TextArea = ({
    desabled=false,
    value,
    placeholder,
    onChange,
}) => (
 <textarea 
    desabled={desabled}
    className="text"
    value={value}
    placeholder={placeholder}
    onChange={onChange}
 />
);
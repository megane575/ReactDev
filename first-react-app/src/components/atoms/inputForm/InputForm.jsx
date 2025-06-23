export const InputForm = ({
    disabled,
    value,
    placeholder,
    onChange,
    onKeyDown,
}) => (
    <input
        disabled={disabled}
        className='input'
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
    />
);
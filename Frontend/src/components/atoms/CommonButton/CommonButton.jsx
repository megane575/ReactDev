import './style.css';

export const CommonButton = ({ type, label, onClick}) => (
 <button className='button' type={type} onClick={onClick}>
    {label}
 </button>
);
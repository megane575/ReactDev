import './style.css';

export const CommonButton = ({ type, label, onClick}) => (
 <button className='button' type={type} onClicj={onClick}>
    {label}
 </button>
);
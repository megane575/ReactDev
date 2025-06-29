import { NavLink } from 'react-router-dom';
import './style.css'

export const NavigationLink = ({linkPath, title}) => (
    <li className="li">
        <NavLink to={linkPath}>{title}</NavLink>
    </li>
);
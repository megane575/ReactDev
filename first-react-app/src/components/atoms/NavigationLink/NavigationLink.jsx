import { NavLink } from 'react-router';
import './style.css'

export const NavigationLink = ({linkPath, title}) => (
    <li className="li">
        <NavLink to={linkPath}>{title}</NavLink>
    </li>
);
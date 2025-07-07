import { NavigationLink } from '../../atoms/NavigationLink';
import { NAVIGATION_PATH } from "../../../constants/navigation";
import './style.css'

export const Navigation = () => (
    <nav>
        <ul className="ul">
            <NavigationLink title={'Top'} linkPath={NAVIGATION_PATH.TOP}/>
            <NavigationLink title={'Create'} linkPath={NAVIGATION_PATH.CREATE}/>
        </ul>
    </nav>
);
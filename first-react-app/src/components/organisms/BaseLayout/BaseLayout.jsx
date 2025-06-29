import { Navigation } from '../../molecules/Navigation';
import './style.css';

export const BaseLayout = ({children,title}) => (
 <div className='container'>
    <section className='common'>
     <Navigation/>
    </section>
    <h1 className='title'>{title}</h1>
    {children}
 </div>
);
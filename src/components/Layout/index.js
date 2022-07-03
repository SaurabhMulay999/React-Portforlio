import './index.scss'
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return <>
        <Sidebar />
        <div className="page">
            <span className="tags top-tags">&lt;body&gt;</span>

            <Outlet />
            <span className="tags botton-tags">
                &lt;/body&gt;
                <br />
                <span className="bottom-tag-html">
                &lt;/html&gt;
                </span>


            </span>
            


        </div>

</>

}

export default Layout;
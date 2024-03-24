import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import styles from './Breadcrumbs.module.css';

const Breadcrumbs = () => {
    let location = useLocation();
    let pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className={`${styles.breadcrumbItem}`}><Link to="/">Home</Link></li>
                {pathnames.map((value, index) => {
                    let to = `/${pathnames.slice(0, index + 1).join("/")}`;
                    let isCurrentPage = location.pathname === to;

                    // Capitalize the first letter of the value
                    let capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);

                    return (
                        <li className={isCurrentPage ? styles.breadcrumbItemSelected : styles.breadcrumbItem} key={index}>
                            {index >= 0 && <span className={styles.separator}>/</span>}
                            <Link to={to}>{capitalizedValue}</Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

export default Breadcrumbs;

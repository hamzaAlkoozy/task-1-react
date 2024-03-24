import styles from "./PageSize.module.css";

const PageSize = ({pageSize, setPageSize}) => {
    const handlePageSizeChange = async (event) => {
        const newSize = event.target.value;
        setPageSize(newSize);
    };

    return (
        <div className="d-flex justify-content-start align-items-center">
            <select id="pageSize" value={pageSize} onChange={handlePageSizeChange}
                    className={`form-select ${styles.customSelect}`}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
            </select>
            Entries
        </div>
    );
};

export default PageSize;

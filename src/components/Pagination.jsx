import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

const Pagination = ({context}) => {
    const totalPages = Math.ceil(context.totalCount / context.pageSize);

    const handlePageChange = (newPage) => {
        context.setCurrentPage(newPage);
    }

    return (
        <nav className="d-flex justify-content-center">
            <ul className="pagination">
                <li className={`page-item ${context.currentPage === 1 ? 'disabled' : ''}`}>
                    <button className="page-link"
                            style={{
                                border: 'none',
                                background: 'none',
                                color: context.currentPage === 1 ? 'var(--grey)' : 'var(--black)'}}
                            onClick={() => handlePageChange(context.currentPage - 1)}>
                        <FaArrowLeft/>
                    </button>
                </li>
                {[...Array(totalPages)].map((_, index) => (
                    <li key={index} className={`page-item ${index + 1 === context.currentPage ? 'active' : ''}`}>
                        <button className="page-link"
                                style={{
                                    border: 'none',
                                    background: 'none',
                                    color: 'var(--black)',
                                    fontWeight: index + 1 === context.currentPage ? 'bold' : 'normal',
                                    transform: index + 1 === context.currentPage ? 'translateY(-6px)' : 'none'
                                }}
                                onClick={() => handlePageChange(index + 1)}>
                            {index + 1}
                        </button>
                    </li>
                ))}
                <li className={`page-item ${context.currentPage === totalPages ? 'disabled' : ''}`}>
                    <button className="page-link"
                            style={{
                                border: 'none',
                                background: 'none',
                                color: context.currentPage === totalPages ? 'var(--grey)' : 'var(--black)'}}
                            onClick={() => handlePageChange(context.currentPage + 1)}>
                        <FaArrowRight/>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;

import DataTable from "../components/DataTable";
import {useContext} from "react";
import {ProductContext} from "../store/ProductContext";

const UsersPage = () => {
    const productContext = useContext(ProductContext);

    if (productContext.isLoading) {
        return (
            <div>
                Loading....
            </div>
        )
    }

    const tableLabels = [
        "TITLE",
        "BRAND",
        "CATEGORY",
    ];

    const tableFields = [
        "title",
        "brand",
        "category",
    ]

    const filteringDropdownFields = [
        {label: 'Category', keyProp: 'category'},
    ]

    return (
        <div>
            <DataTable
                context={productContext}
                labels={tableLabels}
                fields={tableFields}
                filteringFields={[]}
                filteringDropdownFields={filteringDropdownFields}
            />
        </div>
    );
};

export default UsersPage;

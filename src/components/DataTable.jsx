import Pagination from "./Pagination";
import PageSize from "./PageSize";
import Search from "./Search";
import FieldSearch from "./FieldSearch";
import FieldDropDownSearch from "./FieldDropDownSearch";
import DataTableContent from "./DataTableContent";
import styles from "./DataTable.module.css";


const DataTable = ({context, labels, fields, filteringFields, filteringDropdownFields}) => {
    const handleSearchKeyChange = (key) => {
        context.setFieldSearchKey(key);
        if (key !== context.fieldSearchKey) {
            context.setFieldSearchTerm('');
        }
    };

    return (
        <div className="mt-2">
            <div className="d-flex justify-content-start align-items-center mb-2">
                <div className={`${styles.componentMargin} ${styles.sectionBordered}`}>
                    <PageSize pageSize={context.pageSize} setPageSize={context.setPageSize}/>
                </div>

                <div className={`${styles.componentMargin} ${styles.sectionBordered}`}>
                    <Search data={context.data}
                            searchTerm={context.searchTerm}
                            setSearchTerm={context.setSearchTerm}
                            isSearchVisible={context.isSearchVisible}
                            setIsSearchVisible={context.setIsSearchVisible}
                            setSearchFilteredData={context.setSearchFilteredData}
                    />
                </div>


                {filteringFields.map(field => (
                    <div className={styles.componentMargin}>
                        <FieldSearch label={field.label}
                                     keyProp={field.keyProp}
                                     setSearchKey={handleSearchKeyChange}
                                     setSearchValue={context.setFieldSearchTerm}
                                     activeInput={context.activeFieldSearch}
                                     setActiveInput={context.setActiveFieldSearch}
                        />
                    </div>
                ))}

                {filteringDropdownFields.map(field => (
                    <div className={styles.componentMargin}>
                        <FieldDropDownSearch label={field.label}
                                             options={context.categoryOptions}
                                             selectedOption={context.selectedCategory}
                                             setSelectedOption={context.setSelectedCategory}
                        />
                    </div>
                ))}
            </div>

            {/* Table */}
            <DataTableContent
                data={context.searchTerm.trim() === "" ? context.data : context.searchFilteredData}
                labels={labels}
                fields={fields}
            />

            {/* Pagination */}
            <Pagination context={context}/>
        </div>
    );
};

export default DataTable;

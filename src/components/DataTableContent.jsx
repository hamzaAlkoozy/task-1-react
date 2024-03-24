const DataTableContent = ({data, labels, fields}) => {
    return (
        <table className="table table-responsive table-bordered table-hover">
            <thead>
            <tr className="bg-color-blue text-color-black">
                {labels.map((label, index) => (
                    <th key={index} className="bg-color-blue text-color-black text-center align-middle">{label}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
                <tr key={index} className="text-blue">
                    {fields.map((field, index) => (
                        <td className="text-color-black" key={index}>{item[field]}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default DataTableContent;

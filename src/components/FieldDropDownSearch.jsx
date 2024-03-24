const FieldDropDownSearch = ({label, options, selectedOption, setSelectedOption}) => {
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <label style={{marginRight: '10px'}}>{label}</label>
            <select className="p-1" value={selectedOption} onChange={handleChange}>
                <option value="all">All</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FieldDropDownSearch;

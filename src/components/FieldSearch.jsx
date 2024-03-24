import styles from "./FieldSearch.module.css";
import {FaCaretDown} from "react-icons/fa";

const FieldSearch = ({label, keyProp, setSearchKey, setSearchValue, activeInput, setActiveInput}) => {
    const isInputVisible = activeInput === keyProp;

    const handleFocus = () => {
        setActiveInput(keyProp);
        setSearchKey(keyProp);
    };

    const handleBlur = () => {
        if (activeInput === keyProp) {
            setActiveInput('');
        }
    };

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div>
            {isInputVisible ? (
                <input type="text" onBlur={handleBlur} onChange={handleChange} autoFocus/>
            ) : (
                <button onClick={handleFocus} className={styles.labelButton}>
                    {label} <FaCaretDown/>
                </button>
            )}
        </div>
    );
};

export default FieldSearch;

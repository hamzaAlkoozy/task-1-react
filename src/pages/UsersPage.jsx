import DataTable from "../components/DataTable";
import {useContext} from "react";
import {UserContext} from "../store/UserContext";

const UsersPage = () => {
    const userContext = useContext(UserContext);

    if (userContext.isLoading) {
        return (
            <div>
                Loading....
            </div>
        )
    }

    const tableLabels = [
        "FIRST NAME",
        "LAST NAME",
        "MAIDEN NAME",
        "AGE",
        "GENDER",
        "EMAIL",
        "USERNAME",
        "BLOODGROUP",
        "EYECOLOR",
        "BIRTHDATE"
    ];

    const tableFields = [
        "firstName",
        "lastName",
        "maidenName",
        "age",
        "gender",
        "email",
        "username",
        "bloodGroup",
        "eyeColor",
        "birthDate"
    ]

    const filteringFields = [
        {label: 'First Name', keyProp: 'firstName'},
        {label: 'Email', keyProp: 'email'},
        {label: 'Birth Date', keyProp: 'birthDate'},
        {label: 'Gender', keyProp: 'gender'}
    ];

    return (
        <div>
            <DataTable
                context={userContext}
                labels={tableLabels}
                fields={tableFields}
                filteringFields={filteringFields}
                filteringDropdownFields={[]}
            />
        </div>
    );
};

export default UsersPage;

import { useDispatch, useSelector } from 'react-redux';
import {
    addItem,
    editItem,
    changeItem,
    deleteItem,
    changeFormFields,
} from '../redux/actions/actionCreators';
import AddItem from './AddItem';
import ItemsList from './ItemsList';

function Main() {
    const dispatch = useDispatch();
    const { items, formFields } = useSelector((state) => state.services);

    const handleFormChange = (evt) => {
        const { name, value } = evt.target;
        dispatch(changeFormFields(name, value));
    };

    const handleAddItem = (evt) => {
        evt.preventDefault();
        const { id, service, price } = formFields;
        if (formFields.id === null) {
            dispatch(addItem(service, price));
            return;
        }
        dispatch(changeItem(id, service, price));
    };

    const handleEditClick = (id) => {
        dispatch(editItem(id));
    };

    const handleRemoveClick = (id) => {
        dispatch(deleteItem(id));
    };

    return (
        <>
            <AddItem
                formData={formFields}
                onFormChange={handleFormChange}
                onAddItem={handleAddItem}
            />
            <ItemsList
                items={items}
                onEditClick={handleEditClick}
                onRemoveClick={handleRemoveClick}
            />
        </>
    );
}

export default Main;

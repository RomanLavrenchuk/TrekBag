import AddItemForm from './AddItemForm';
import ButtonGroup from './ButtonGroup';

export default function SideBar({
    handleAddItem,
    handleRemoveAllItems,
    handleResetToInitial,
    handleMarkAllAsComplete,
    handleMarkAllAsInComplete,
}) {
    return (
        <div className='sidebar'>
            <AddItemForm onAddItem={handleAddItem} />
            <button onClick></button>

            <ButtonGroup
                handleRemoveAllItems={handleRemoveAllItems}
                handleResetToInitial={handleResetToInitial}
                handleMarkAllAsComplete={handleMarkAllAsComplete}
                handleMarkAllAsInComplete={handleMarkAllAsInComplete}
            />
        </div>
    );
}

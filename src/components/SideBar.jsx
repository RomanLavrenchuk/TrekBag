import AddItemForm from './AddItemForm';
import ButtonGroup from './ButtonGroup';

export default function SideBar({
    onAddItem,
    handleRemoveAllItems,
    handleResetToInitial,
    handleMarkAllAsComplete,
    handleMarkAllAsInComplete,
}) {
    return (
        <div className='sidebar'>
            <AddItemForm onAddItem={onAddItem} />

            <ButtonGroup
                handleRemoveAllItems={handleRemoveAllItems}
                handleResetToInitial={handleResetToInitial}
                handleMarkAllAsComplete={handleMarkAllAsComplete}
                handleMarkAllAsInComplete={handleMarkAllAsInComplete}
            />
        </div>
    );
}

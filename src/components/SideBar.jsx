import AddItemForm from './AddItemForm';
import ButtonGroup from './ButtonGroup';
import { useItemsContext } from '../lib/hooks';

export default function SideBar() {
    const { handleAddItem } = useItemsContext();
    return (
        <div className='sidebar'>
            <AddItemForm onAddItem={handleAddItem} />
            <ButtonGroup />
        </div>
    );
}

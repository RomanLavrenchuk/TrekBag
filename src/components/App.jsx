import BackgroundHeading from './BackgroundHeading';
import Footer from './Footer';
import ItemList from './ItemList';
import Header from './Header';
import SideBar from './SideBar';
import { initialItems } from '../lib/constants';
import { useState } from 'react';

function App() {
    const [items, setItems] = useState(initialItems);

    const handleAddItem = (newItemText) => {
        const newItem = {
            id: new Date().getTime(),
            name: newItemText,
            packed: false,
        };
        const newItems = [...items, newItem];
        setItems(newItems);
    };

    const handleRemoveAllItems = () => {
        setItems([]);
    };

    const handleResetToInitial = () => {
        setItems(initialItems);
    };

    const handleMarkAllAsComplete = () => {
        const newItems = items.map((item) => {
            return { ...item, packed: true };
        });
        setItems(newItems);
    };

    const handleMarkAllAsInComplete = () => {
        const newItems = items.map((item) => {
            return { ...item, packed: false };
        });
        setItems(newItems);
    };

    return (
        <>
            <BackgroundHeading />
            <main>
                <Header />
                <ItemList items={items} />
                <SideBar
                    onAddItem={handleAddItem}
                    handleRemoveAllItems={handleRemoveAllItems}
                    handleResetToInitial={handleResetToInitial}
                    handleMarkAllAsComplete={handleMarkAllAsComplete}
                    handleMarkAllAsInComplete={handleMarkAllAsInComplete}
                />
            </main>

            <Footer />
        </>
    );
}

export default App;

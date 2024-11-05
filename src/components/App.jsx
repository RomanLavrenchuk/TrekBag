import BackgroundHeading from './BackgroundHeading';
import Footer from './Footer';
import ItemList from './ItemList';
import Header from './Header';
import SideBar from './SideBar';
import { initialItems } from '../lib/constants';
import { useState } from 'react';

function App() {
    const [items, setItems] = useState(initialItems);

    return (
        <>
            <BackgroundHeading />
            <main>
                <Header />
                <ItemList items={items} />
                <SideBar setItems={setItems} />
            </main>

            <Footer />
        </>
    );
}

export default App;

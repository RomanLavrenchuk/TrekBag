import BackgroundHeading from './BackgroundHeading';
import Footer from './Footer';
import ItemList from './ItemList';
import Header from './Header';
import SideBar from './SideBar';
import ItemsContextProvider from '../contexts/ItemsContextProvider';

function App() {
    return (
        <>
            <BackgroundHeading />
            <main>
                <ItemsContextProvider>
                    <Header />
                    <ItemList />
                    <SideBar />
                </ItemsContextProvider>
            </main>
            <Footer />
        </>
    );
}

export default App;

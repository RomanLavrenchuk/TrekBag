import BackgroundHeading from './BackgroundHeading';
import Footer from './Footer';
import ItemList from './ItemList';
import Header from './Header';
import SideBar from './SideBar';

function App() {
    return (
        <>
            <BackgroundHeading />
            <main>
                <Header />
                <ItemList />
                <SideBar />
            </main>

            <Footer />
        </>
    );
}

export default App;

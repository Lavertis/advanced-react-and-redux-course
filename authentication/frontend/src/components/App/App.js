import Header from "../Header/Header";

function App({children}) {
    return (
        <div className="App">
            <Header/>
            {children}
        </div>
    );
}

export default App;

import Header from "../Header";

function App({children}) {
    return (
        <div className="App">
            <Header/>
            {children}
        </div>
    );
}

export default App;

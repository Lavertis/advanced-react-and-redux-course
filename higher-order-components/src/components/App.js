import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App" data-testid="App">
            <Routes>
                <Route path="/post" element={<CommentBox/>}/>
                <Route path="/" element={<CommentList/>}/>
            </Routes>
        </div>
    );
}

export default App;

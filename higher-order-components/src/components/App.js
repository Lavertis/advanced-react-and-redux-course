import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import {Link, Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";

function App() {
    const auth = useSelector(state => state.auth)

    const renderButton = () => {
        if (auth)
            return <button>Sign Out</button>
        else
            return <button>Sign In</button>
    }

    const renderHeader = () => {
        return (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/post">Post A Comment</Link></li>
                <li>{renderButton()}</li>
            </ul>
        )
    }

    return (
        <div className="App" data-testid="App">
            {renderHeader()}
            <Routes>
                <Route path="/post" element={<CommentBox/>}/>
                <Route path="/" element={<CommentList/>}/>
            </Routes>
        </div>
    );
}

export default (App);

import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
} from "react-router-dom";
import { EmployeeTurnScreen } from '../screens/EmployeeTurn';
import MenuNavigation from '../components/navbar/MenuNavigation';
import { HomeScreen } from '../screens/Home';

type Props = {}

const RootRouter = (props: Props) => {
    return (
        <Router>

            <div>
                {/* <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav> */}
                <MenuNavigation />
                <Routes>
                    <Route path="/home-screen" Component={HomeScreen} />
                    <Route path="/employee-turn-screen" Component={EmployeeTurnScreen} />
                </Routes>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

            </div>
        </Router>
    )
}

export default RootRouter
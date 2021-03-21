import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { About } from "../components/about/About";
import { Home } from "../components/home/Home";
import { Navbar } from "../components/ui/Navbar";

export const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path="./emanuel-julia/" component={Home} />
                    <Route exact path="./emanuel-julia/about" component={About} />
                    <Route path="./emanuel-julia/" component={Home} />
                </Switch>
            </div>
        </Router>
    )
}

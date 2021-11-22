import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from '../../helpers/history';
import { Home } from '../home/Home';

export const App = () => {
    return (
        <div className="App-Conteiner" data-testid="App-Conteiner">
            {/* Layout or Template component to define the look and feel of the monolith */}
            <Router history={history}>
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

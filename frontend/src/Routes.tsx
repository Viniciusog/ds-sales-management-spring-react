/*'pages/Home' funciona pois a pasta inicial é 'src/' */
import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

/*'Classe' responsável por especificar as rotas do nosso sistema*/
function Routes () {
    return (    
        <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/dashboard">
                <Dashboard/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;
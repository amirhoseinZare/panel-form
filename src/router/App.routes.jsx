import { Switch, Route } from "react-router-dom"
import { DashboardPage, FormPage } from "../pages/index.js"

export const AppRouter = () =>(
    <>
        <Switch>
            <Route exact path="/" component={DashboardPage} />
            <Route exact path="/form" component={FormPage} />
        </Switch>
    </>
)
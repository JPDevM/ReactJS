// Dependencies
import { Switch, Route } from 'react-router-dom';

// Components
import Active from  './Active';
import PopularList from './PopularList';
import Detail from './Detail';

const index = () => {
  return (
    <Switch>
      <Route exact path="/subscriptions" component={Active} />
      
      <Route path="/subscriptions/popular">
        <PopularList />
      </Route>

      <Route path="/subscriptions/detail/:id" component={Detail} />
    </Switch>
  )
}

export default index;
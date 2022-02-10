import React, { useState } from 'react';
import { Networkconnection } from './Component';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';

import { Home, 
         Admin, 
         Error404notfound, 
         Readnews,
         Homenews,
         Assistant,
         LoginForm,
         Hashtag,
         TEST,
         BaiDang,
         VideoIframe,
         HomeDashboard,
         AdminAccount,
         LoginRegister } from './Page';

import AuthRoute from './Page/Authenticial/AuthRoute';
import { signIn } from './Page/Authenticial/auth';

import Profile from './Page/Administrator/Container/Profile/Profile';

function App() {

const [NguoiDung, setUser] = useState(null);
const authenticated = NguoiDung != null;

const login = ({ email, password }) => setUser(signIn({ email, password }));
// const logout = () => setUser(null);
  return (
    <div className="App">

    <Networkconnection />

    <Router>

      <Switch>
        
        <Route
            path="/Administrator/Authenticial/login/"
            render={props => (
              <LoginForm authenticated={authenticated} login={login} {...props} />
            )}
          />
          <AuthRoute
            authenticated={authenticated}
            path="/Administrator/Dashboard/"
            render={props => <HomeDashboard NguoiDung={NguoiDung} {...props}/>}
          />
          <AuthRoute
            authenticated={authenticated}
            path="/Administrator/News/Post/"
            render={props => <Admin NguoiDung={NguoiDung} {...props}/>}
          />

          <AuthRoute
            authenticated={authenticated}
            path="/Administrator/News/News-post/"
            render={props => <BaiDang NguoiDung={NguoiDung} {...props}/>}
          />

          <AuthRoute
            authenticated={authenticated}
            path="/Administrator/News/News-iframe-video-post/"
            render={props => <VideoIframe NguoiDung={NguoiDung} {...props}/>}
          />

          <AuthRoute
            authenticated={authenticated}
            path="/Administrator/Account/Management-account-admin/"
            render={props => <AdminAccount NguoiDung={NguoiDung} {...props}/>}
          />

          <AuthRoute
            authenticated={authenticated}
            path="/Administrator/Account/Profile/"
            render={props => <Profile NguoiDung={NguoiDung} {...props}/>}
          />

        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/test/" render={() => <TEST />} />
        <Route exact path="/News/" render={() => <Homenews />} />
        <Route exact path="/Login/" render={() => <LoginRegister />} />
        <Route exact path="/News/:hashtag/:news/" render={props => <Readnews/>} />
        <Route exact path="/News/:hashtag/" render={props => <Hashtag/> } />
        <Route exact path="/Assistant/Support/" render={() => <Assistant />} />
        <Route path="*" render={() => <Error404notfound />} />

      </Switch>
    </Router>

    </div>
  );
}

export default App;

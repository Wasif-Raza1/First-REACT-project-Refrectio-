
import './App.css';
import Auth from './Component/auth-login/Auth';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './Component/auth-login/login';
import Signup from './Component/auth-login/register';
import Recover from './Component/auth-login/recoverPassword';
import Subscription from './Component/subscription/subscription';
import Workspace from './Component/workspace';
import FormComp from './Component/subscription/formcomp';
import DashBoard from './Component/opportunity/dashboard';
import Opportunity from './Component/opportunity/opportunities';
import Billing from './Component/opportunity/billing';
import Team from './Component/opportunity/team';
import Questions from './Component/opportunity/questions';
import Information from './Component/opportunity/information';
import Draft from './Component/opportunity/Draft';



function App() {
  return (
    <Routes>
      <Route path='' element={<Navigate to="auth" />} />
      <Route path='auth' element={<Auth />} >
        <Route path='' element={<Navigate to="login" />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Signup />} />
        <Route path='recover' element={<Recover />} />
      </Route>
      <Route path='subscription' element={<Subscription />} />
      <Route path='workspace' element={<Workspace />} />
      <Route path='subscription1' element={<FormComp />} />
      <Route path='dashboard' element={<DashBoard />} >
        <Route path='' element={<Navigate to="opportunities" />} />
        <Route path='opportunities' element={<Opportunity />} />
        <Route path='draft' element={<Draft/>}>
        <Route path='' element={<Questions/>}/>
          <Route path='questions' element={<Questions/>}/>
          <Route path='info' element={<Information/>}/>
        </Route>
        
        <Route path='billing' element={<Billing />} />
        <Route path='team' element={<Team />} />

      </Route>
    </Routes>
  );
}

export default App;

import { LoginForm, RegisterForm } from '../../modules/index';
import { Route, Routes } from 'react-router-dom';


import './Auth.scss';

const Auth = () =>(
    <section className='auth'>
      <div className='auth__content'>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm/>}/>
        </Routes>
      </div>
    </section>
)

export default Auth;
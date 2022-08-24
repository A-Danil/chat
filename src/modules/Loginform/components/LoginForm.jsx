import { Button, Form, Input } from 'antd';
import { LockOutlined, MailOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { WhiteBlock} from '../../../components';
import { validateField } from 'utils/helper';

const LoginForm = props => {

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    dirty
  } = props;


    return (
        <div>
            <div className='auth__top'>
              <h2>Войти в аккаунт</h2>
              <p>Пожалуйста, войдите в свой аккаунт</p>
            </div>
            <WhiteBlock>
                <Form
                  className="login-form"
                  onSubmit={handleSubmit}
                >
                  <Form.Item
                    name="username"
                    hasFeedback 
                    validateStatus={validateField("email", touched, errors)}
                    help={!touched.email ? "" : errors.email}
                  >
                      <Input 
                        id='email'
                        prefix={<MailOutlined className="site-form-item-icon" />} 
                        size="large" 
                        placeholder="E-mail" 
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    hasFeedback
                    validateStatus={validateField("password", touched, errors)}
                    help={!touched.password ? "" : errors.password}
                  >
                    <Input
                      id='password'
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      size="large"
                      type="password"
                      placeholder="Пароль"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button onClick={handleSubmit} type="primary" className="login-form-button" size="large">
                      Войти в аккаунт
                    </Button>
                  </Form.Item>

                  <Form.Item>
                    <Link to='/register' className='auth__register-link'>Зарегестрироваться</Link>
                  </Form.Item>
                </Form>
            </WhiteBlock>
        </div>
    )
}

export default LoginForm;
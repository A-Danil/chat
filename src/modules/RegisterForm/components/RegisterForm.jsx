import { Button, Form, Input} from 'antd';
import { LockOutlined, UserOutlined, MailOutlined, InfoCircleTwoTone} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { WhiteBlock} from '../../../components';
import { validateField } from 'utils/helper';


const RegisterForm = props => {
  const success = false;

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
              <h2>Регистрация</h2>
              <p>Для входа в чат, вам нужно зарегестрироваться</p>
            </div>
            <WhiteBlock>
              {!success ?
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
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        prefix={
                        <MailOutlined className="site-form-item-icon"/>} 
                        size="large" 
                        type="email"
                        placeholder="E-Mail" />
                  </Form.Item>

                  <Form.Item name="nickname">
                      <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        size="large"
                        type="user"
                        label="Nickname"
                        placeholder="Ваше имя"
                      />
                  </Form.Item>

                  <Form.Item
                    name="confirm"
                    hasFeedback
                    validateStatus={validateField("password", touched, errors)}
                    help={!touched.password ? "" : errors.password}
                  >
                      <Input
                        id='password'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        size="large"
                        type="password"
                        placeholder="Введите ваш пароль"
                      />
                  </Form.Item>

                  <Form.Item name="password2">
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      size="large"
                      type="password2"
                      placeholder="Повторите ваш пароль"
                    />
                  </Form.Item>

                  <Form.Item>
                    {dirty && !isValid && <span>Ошибка!</span>}
                    <Button onClick={handleSubmit} type="primary" className="login-form-button" size="large">
                      Зарегестрироваться
                    </Button>
                  </Form.Item>

                  <Form.Item>
                    <Link to='/' className='auth__register-link'>Войти в аккаунт</Link>
                  </Form.Item>
                </Form> : 
                <div className='auth__success-block'>
                  <div>
                    <InfoCircleTwoTone style={{ fontSize: '50px' }}/>
                  </div>
                  <h2>Подтвердите свой аккаунт</h2>
                  <p>На Вашу почту отправлено письмо с ссылкой на подтверджениее аккаунта.</p>
                </div>
                }
            </WhiteBlock>
        </div>
    )
}

export default RegisterForm;
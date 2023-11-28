import React, { useState } from "react";
import './Form.css'

function Form(){
  const [form, setForm] = useState({
    name: '',
    surname: '',
    tel: '',
    email: '',
    password: '',
    repeatPassword: ''
  })

  const [isError, setError] = useState(false);
  const [isChecked, setChecked] = useState(false);

  function handleInputChange(e) {
    const {name, value} = e.target
    setForm({
      ...form,
      [name]: value
    });
  }

  function handleSetFormBtnClick() {
    for (const key in form) {
      if (form[key].trim() === '' || form.password !== form.repeatPassword) {
        setError(true)
        return
      }
    }

    if (!isChecked) {
      return
    }

    setError(false)
    setChecked(false)

    alert(`
      Регистрация прошла успешно
      Имя: ${form.name}
      Фамилия: ${form.surname}
      Телефон: ${form.tel}
      Почта: ${form.email}
    `)
    console.log(form)
  }

  return (
    <div className="form">
      <input
        className="input" 
        type="text" 
        name="name" 
        value={form.name}
        onChange={handleInputChange}
        placeholder="Имя"/>
      <input 
        className="input"
        type="text" 
        name="surname" 
        value={form.surname}
        onChange={handleInputChange}
        placeholder="Фамилия"/>
      <input 
        className="input"
        type="tel" 
        name="tel" 
        value={form.tel}
        onChange={handleInputChange}
        placeholder="Номер телефона"/>
      <input 
        className="input" 
        type="email" 
        name="email" 
        value={form.email}
        onChange={handleInputChange}
        placeholder="Email"/>
      <input 
        className="input"
        type="password" 
        name="password" 
        value={form.password}
        onChange={handleInputChange}
        placeholder="Пароль"/>
      <input 
        className="input"
        type="password" 
        name="repeatPassword"
        value={form.repeatPassword} 
        onChange={handleInputChange}
        placeholder="Повторите пароль"/>
      <label>
        <input 
          className="checkbox"
          type="checkbox"
          checked={isChecked} 
          onChange={e => setChecked(e.target.checked)}
          name="checkbox-example"
          />
        <span className="custom-checkbox"></span>
        <span className="checkbox-text">Подтверждаю пароль</span>
      </label>

      <button 
        className="btn"
        onClick={handleSetFormBtnClick}>
        Продолжить
      </button>

      {isError ? (<p>Ошибка в форме</p>) : ''}
      <hr />

      <p className="text"> 
        Уже есть аккаунт ? 
        <a 
          className="link"
          target="blank" 
          href="https://cs11.pikabu.ru/post_img/big/2019/10/18/8/1571404138194228435.jpg"> 
          Войти -{">"}
        </a> 
      </p>
    </div>
    
  )
}

export default Form;
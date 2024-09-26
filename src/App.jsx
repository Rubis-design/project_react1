import { useState } from 'react';
import './App.css';
import './components/UserCard/UserCard.css';
import Welcome from './components/welcome';
import { Button } from './components/Button';
import { UserCard } from './components/UserCard/UserCard';
import { Product } from './components/Product';
import { Article } from './components/Article';

function App() {
  const handleClick = (text) => {
    console.log(text);
  };

  return (
    <div>
      <UserCard name="Irina" age={37} /> <br />
      <Product name="Новенький айфон 16" description="Новинка от apple" price="$$$$$$" /> <br />
      <Article title="Заголовок 1" text="Первый текст" />
      <Article title="Заголовок 2" text="Второй текст" />
      <Article title="Заголовок 3" text="Третий текст" /> <br />
      <Button onClick={handleClick} text="Была нажата кнопка" />
    </div>
  );
}

export default App;

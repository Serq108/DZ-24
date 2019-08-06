import React from 'react'
import './Parent.css';

function Header() {
  return (
        <div className="header">
             <div className="header-content">
                 <ul className="hr">
                   <li><a href="#">Обучение</a></li>
                   <li><a href="#">Компаниям</a></li>
                   <li><a href="#">Работа</a></li>
                   <li><a href="#">Блог</a></li>
                   <li><a href="#">+7 499 582 56 56</a></li>
                 </ul>
            </div>
        </div>
  );
}
export default Header;

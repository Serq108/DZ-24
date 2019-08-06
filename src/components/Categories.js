import React from 'react'
import './Parent.css';

function Categories() {
  return (
        <div className="category">
             <div className="header-content">
                 <ul className="hr">
                   <li><a href="#">Программирование</a></li>
                   <li><a href="#">Эксплуатация</a></li>
                   <li><a href="#">Data Science</a></li>
                   <li><a href="#">Управление</a></li>
                   <li><a href="#">Информационная безопасность</a></li>
                 </ul>
             </div>
        </div>
  );
}
export default Categories;

import React from 'react'
import './Parent.css';

function Footer() {
  return (
         <footer className="footer">
            <div className="about">
                 <ul className="hr">
                   <li>О нас</li>
                   <li>СМИ о нас</li>
                   <li>Отзывы</li>
                   <li>Контакты</li>
                   <li>FAQ</li>
                 </ul>
            </div>
            <div className="bottom">
                  Created 2019 by tutorial
            </div>
       </footer>
  );
}
export default Footer;

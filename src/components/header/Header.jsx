import React from "react";

import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.fons}>
        <div className={style.fon}>
          <div className={style.blackfon}></div>
          <div className={style.basic}>
            <div className={style.head}>
              <div className={style.logo}>NerotexAI</div>
              <div className={style.menu}>
                <nav>
                  <a href="#">Продукт</a>
                  <a href="#functional">Функционал</a>
                  <a href="#advantage">Преимущества</a>
                  <a href="#price">Стоимость</a>
                  <a href="#contact">Контакты</a>
                </nav>
              </div>
            </div>
            <div className={style.description}>
              <div className={style.descName}>ASPAS</div>
              <div className={style.desctext}>
                Система интеллектуальной поддержки и прогнозирования аварийных
                ситуаций на опасных производственных объектах.
              </div>
              <button className={style.descButton}>Показать демо версию</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

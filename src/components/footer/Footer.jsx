import React from "react";
import Form from "../others/FormRegist/Form";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={s.wrap}>
      <div className={s.blocks} id='contact'>
        <div className={s.block1}>
          <div className={s.titleBlock1}>Свяжитесь с нами</div>
          <Form />
          <div className={s.textReg}>
            © Все права защищены. ООО "НЕЙРОТЕКС ИИ"ИНН: 9729333614 ОГРН:
            1227700746690г. Москва, Тер Ленинские горы, д. 1 стр. 77 ком. 104-1В
          </div>
        </div>
        <div className={s.block2}>
          <div className={s.titleBlock2}>Контакты</div>
          <div className={s.adress}>
            <div className={s.text1Adress}>invest@nerotexai.ru</div>
            <div className={s.text1Adress}>@DanilaKutuzov</div>
            <div className={s.text1Adress}>+7 922 450 79 99</div>
            <div className={s.text1Adress}>+7 922 067 06 16</div>
          </div>
          <div className={s.textCont}>
            Мы также набираем команду специалистов: Data Scientist / Front-end
            developer / Product Manager / Big Data engineer
          </div>
          <div className={s.end}>Made by Artemov Vyacheslav</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

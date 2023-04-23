import React from "react";
import Slaider from "../others/slaider/Slaider";
import style from "./Main.module.css";
import slaid from "./../../assets/images/Rectangle.png";
import slaid2 from "./../../assets/images/Rectangle2.png";
import perc1 from "./../../assets/images/pers1.png";
import perc2 from "./../../assets/images/pers2.png";
import pr1 from "./../../assets/images/pr1.png";
import pr2 from "./../../assets/images/pr2.png";
import User from "../others/user/User";
import Andrey from "./../../assets/images/Andrey.png";
import Danila from "./../../assets/images/Danila.png";
import Kirill from "./../../assets/images/Kirill.png";
import Vyacheslav from "./../../assets/images/Vyacheslav.png";
import Ivan from "./../../assets/images/Ivan.png";

const Main = () => {
  return (
    <div className={style.wrap}>
      <div className={style.desc}>
        <div className={style.titleDesc}>ASPAS</div>
        <div className={style.textDesc}>
          Наше решение работает совместно с вашей АСУТП: легко встраивается в
          используемую систему.
        </div>
        <div className={style.textOpac}>NerotexAI Software</div>
      </div>
      <div className={style.slaid}>
        <Slaider />
        <img src={slaid2} alt="" className={style.leftSlaid} />
        <img src={slaid} alt="" className={style.rightSlaid} />
      </div>

      {/* FUNCTIONAL */}

      <div className={style.functional} id="functional">
        <div className={style.func}>
          <div className={style.titleFunc}>Функционал</div>
          <div className={style.blocks}>
            <div className={style.block}>
              <div className={style.titleBlock}>Информирование</div>
              <div className={style.textBlock}>
                Комплексное информирование подразделений, ответственных за
                контролируемый участок производства.
              </div>
            </div>
            <div className={style.block}>
              <div className={style.titleBlock}>Рекомендации</div>
              <div className={style.textBlock}>
                Рекомендации оператору по предотвращению аварийных и нештатных
                ситуаций.
              </div>
            </div>
            <div className={style.block}>
              <div className={style.titleBlock}>Анализ</div>
              <div className={style.textBlock}>
                Анализ архивных данных, поиск корреляций между предыдущими
                аварийными ситуациями и нынешнем ТУ.
              </div>
            </div>
            <div className={style.block}>
              <div className={style.titleBlock}>Контроль</div>
              <div className={style.textBlock}>
                Контроль технологических параметров оборудования, отслеживание
                износа.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ADVANTAGE */}

      <div className={style.advantage} id="advantage">
        <div className={style.titleAdvan}>Преимущества</div>
        <div className={style.blockAdvan}>
          <div className={style.textAdvan}>
            Внедрение системы автоматизации в процесс прогнозирования,
            предотвращения и локализации опасных и аварийных ситуаций будет
            способствовать значительному повышению уровня безопасности
            производственных объектов.
          </div>
          <div className={style.blockAnaliz}>
            <div className={style.textAnaliz}>
              Благодаря глубокому анализу архивных данных с использованием
              искусственного интеллекта предсказываем возникновение АС.
            </div>
            <div className={style.numbAnaliz}>85%</div>
            <div className={style.commentAnaliz}>
              Точность предсказания аварийных ситуаций hекуррентно -
              прогнозирующей нейронной сети
            </div>
          </div>
        </div>
      </div>

      {/* ISSUES */}

      <div className={style.issues} id="issues">
        <div className={style.titleIss}>Проблематика</div>
        <div className={style.containerIss}>
          <div className={style.percentIss}>
            <div className={style.perc}>
              <img src={perc1} alt="" />
            </div>
            <div className={style.fauls}>
              <div className={style.titleFaul}>
                Ошибки человеческого фактора
              </div>
              <div className={style.textFaul}>
                Усталость / Нарушение регламентов / Отвлечение внимания
              </div>
            </div>
          </div>

          <div className={style.percentIss}>
            <div className={style.perc}>
              <img src={perc2} alt="" />
            </div>
            <div className={style.fauls}>
              <div className={style.titleFaul}>
                Ошибки сбоев и неполадок оборудования
              </div>
              <div className={style.textFaul}>
                Обрывы связи / Сбои АО и ПО / Внешние факторы / Износ
                оборудования
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PRICE */}

      <div className={style.price} id="price">
        <div className={style.titlePrice}>Стоимость</div>
        <div className={style.blocksPrice}>
          <div className={style.blockPr1}>
            <div className={style.imgPr}>
              <img src={pr1} alt="" />
            </div>
            <div className={style.descPr}>
              Программное обеспечение + установка
            </div>
            <div className={style.pr}>800 000₽</div>
            <div className={style.commentPr}>
              Лицензия на программное обеспечение + Установка системы на
              определенный узел производства.
            </div>

            <a href="#contact" className={style.btnPr}>
              Оставить заявку
            </a>
          </div>

          <div className={style.blockPr2}>
            <div className={style.imgPr}>
              <img src={pr2} alt="" />
            </div>
            <div className={style.descPr}>Дополнительное рабочее место</div>
            <div className={style.pr}>400 000₽</div>
            <div className={style.commentPr}>
              Лицензия на программное обеспечение + Установка системы на
              определенный узел производства.
            </div>
            <a href="#contact" className={style.btnPr}>
              Оставить заявку
            </a>
          </div>
        </div>
      </div>

      {/* TEAM */}

      <div className={style.team}>
        <div className={style.titleTeam}>Команда</div>
        <User
          name={"Устамчук Андрей"}
          professional={"CFO, Co - founder"}
          job={
            'Co - founder PCON, co founder "Домаптека", сотрудник финансового отдела в группе компаний "Альфа банк".'
          }
          ava={Andrey}
        />
        <User
          name={"Данила Кутузов"}
          professional={"CEO, Co - founder"}
          job={
            'Победитель, амбассадор конкурса "Цифровой Прорыв", автор научно-технических работ, опыт работы в группе компаний "А-101 Group", Эксперт "WorldSkills", Co - founder, CTO PCON'
          }
          ava={Danila}
        />
        <User
          name={"Демченко Кирилл"}
          professional={"Customer Support"}
          job={
            "Ассистент Ученого кафедры высшей математики и компьютерных технологий РГУ им. Губкина. Автор научных работ в сфере энергетики"
          }
          ava={Kirill}
        />
        <User
          name={"Артемов Вячеслав"}
          professional={"UI/UX Designer"}
          job={
            'Магистрант факультета бизнес технологий,  UI/UX Designer стартап проекта "PCON Учет и оптимизация электроэнергии”, приглашенный спикер университета "Синергия". Автор научных работ в сфере менеджмента организаций.'
          }
          ava={Vyacheslav}
        />

        <User
          name={"Нетиевский Иван"}
          professional={"UI/UX Designer"}
          job={
            "Призёр молодёжного IT-акселератора «ЮНIT»,участник регионального роботехнического соревновения «РОБОФЕСТ»,бизнес-аналитик,QA and Python Engineer"
          }
          ava={Ivan}
        />
      </div>
    </div>
  );
};

export default Main;

import React from "react";
import "../Context/java";
function Aside() {
  return (
    <div className="aside">
      <h2 className="ae-title">Фильтрация</h2>
      <div className="ae-top">
        <div className="checks">
          <input type="checkbox" />{" "}
          <p className="check-label">Можно собирать</p>
        </div>
        <div className="checks">
          <input type="checkbox" /> <p className="check-label">Новинки</p>
        </div>
        <div className="hr"></div>
      </div>
      <div className="ae-top2">
        <h2 className="ae-titles">Цена от и до:</h2>
        <div className="ae-inp-row">
          <input type="text" name="" id="" className="ae-inp" />
          <input type="text" name="" id="" className="ae-inp" />
        </div>
        <div className="hr"></div>
      </div>
      <div className="ae-center">
        <h2 className="ae-titles">Ингредиенты:</h2>
        <div className="checks">
          <input type="checkbox" /> <p className="check-label">Сырный соус</p>
        </div>
        <div className="checks">
          <input type="checkbox" /> <p className="check-label">Моцарелла</p>
        </div>
        <div className="checks">
          <input type="checkbox" /> <p className="check-label">Чеснок</p>
        </div>
        <div className="checks">
          <input type="checkbox" />{" "}
          <p className="check-label">Солённые огурчики</p>
        </div>
        <div className="checks">
          <input type="checkbox" /> <p className="check-label">Красный лук</p>
        </div>
        <div className="checks">
          <input type="checkbox" /> <p className="check-label">Томаты</p>
        </div>
        <ul id="myUL">
          <li>
            <p className="view-all orange">+ Показать всё 90 751 18 10</p>
            <span onClick={() => setOpen(!open)} class="caret">
              <p className="view-all orange">+ Показать всё 90 751 18 10</p>
            </span>
            <ul className={open ? "nasted active" : "nasted"}>
              <ul class="nested">
                <li>Black Tea</li>
                <li>White Tea</li>
                <li></li>
              </ul>
              <li></li>
            </ul>
          </li>
        </ul>
        <div className="view">
          <div className="checks">
            <input type="checkbox" /> <p className="check-label">Чеснок</p>
          </div>
          <div className="checks">
            <input type="checkbox" />{" "}
            <p className="check-label">Солённые огурчики</p>
          </div>
          <div className="checks">
            <input type="checkbox" /> <p className="check-label">Красный лук</p>
          </div>
          <div className="checks">
            <input type="checkbox" /> <p className="check-label">Томаты</p>
          </div>
        </div>
      </div>
      <div className="ae-bottom">
        <h2 className="ae-titles">Тип теста:</h2>
        <div className="checks">
          <input type="checkbox" /> <p className="check-label">Традиционное</p>
        </div>
        <div className="checks">
          <input type="checkbox" /> <p className="check-label">Тонкое</p>
        </div>
        <button className="send">Применить</button>
      </div>
    </div>
  );
}

export default Aside;

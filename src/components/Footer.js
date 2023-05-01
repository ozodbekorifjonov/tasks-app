import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Icon from '../assets/icons/Icon';

const FooterBox = styled.div`
  padding-bottom: 50px;

  @media only screen and (min-width: 320px) and (max-width: 720px) {
    background-color: #0e1014;
    padding: 0 14px 60px 14px;
  }

  .footer-bottom {
    text-align: right;

    @media only screen and (min-width: 320px) and (max-width: 720px) {
      text-align: left;
    }

    h5,
    a {
      font-family: Montserrat, Open-Sans, Sans-Serif, serif;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      color: #e4e5ea;
    }

    a {
      transition: all linear 0.2s;

      &:hover {
        color: rgba(64, 119, 243, 1);
      }
    }
  }
`;

const MenuBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 124px;

  @media only screen and (min-width: 320px) and (max-width: 720px) {
    flex-direction: column;
    margin-top: 40px;
    padding: 41px 0;
  }

  .box-1 {
    display: flex;
    justify-content: flex-start;

    @media only screen and (min-width: 320px) and (max-width: 720px) {
      flex-direction: column;
    }

    ul {
      margin-right: 98px;

      .middle-list-item {
        display: flex;

        ul {
          margin-right: 32px;
        }
      }
    }
  }

  .box-2 {
    ul {
      text-align: end;

      @media only screen and (min-width: 320px) and (max-width: 720px) {
        text-align: left;
        margin-top: 30px;

        .phone {
          font-size: 16px;
          line-height: 19px;
        }
      }

      li {
        a {
          margin-bottom: 22px;
        }
      }
    }
  }

  ul {
    list-style-type: none;

    li {
      h5 {
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #656566;
        margin-bottom: 20px;

        @media only screen and (min-width: 320px) and (max-width: 720px) {
          font-size: 12px;
          line-height: 15px;
        }
      }

      a {
        display: inline-block;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-decoration: none;
        color: #e4e5ea;
        margin-bottom: 10px;
        transition: all linear 0.2s;

        &:hover {
          color: rgba(64, 119, 243, 1);
        }

        @media only screen and (min-width: 320px) and (max-width: 720px) {
          font-size: 14px;
          line-height: 17px;
        }
      }

      .icon-link {
        margin-left: 14px;

        @media only screen and (min-width: 320px) and (max-width: 720px) {
          margin-right: 14px;
          margin-left: 0;
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterBox>
      <MenuBox>
        <div className="box-1">
          <ul>
            <li>
              <h5>О компании</h5>
            </li>
            <li>
              <Link to={'/task-2'}>Партнёрская программа</Link>
            </li>
            <li>
              <Link to={'/task-2'}>Вакансии</Link>
            </li>
          </ul>
          <ul>
            <li>
              <h5>Меню</h5>
            </li>
            <li className="middle-list-item">
              <ul>
                <li>
                  <Link to={'/task-2'}>Расчёт стоимости</Link>
                </li>
                <li>
                  <Link to={'/task-2'}>Услуги</Link>
                </li>
                <li>
                  <Link to={'/task-2'}>Виджеты</Link>
                </li>
                <li>
                  <Link to={'/task-2'}>Интеграции</Link>
                </li>
                <li>
                  <Link to={'/task-2'}>Наши клиенты</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to={'/task-2'}>Кейсы</Link>
                </li>
                <li>
                  <Link to={'/task-2'}>Благодарственные письма</Link>
                </li>
                <li>
                  <Link to={'/task-2'}>Сертификаты</Link>
                </li>
                <li>
                  <Link to={'/task-2'}>Блог на Youtube</Link>
                </li>
                <li>
                  <Link to={'/task-2'}>Вопрос / Ответ</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="box-2">
          <ul>
            <li>
              <h5>Контакты</h5>
            </li>
            <li>
              <a className="phone" href="tel:75555555555" rel="noreferrer" target="_blank">
                +7 555 555-55-55
              </a>
            </li>
            <li>
              <a href="https://www.amocrm.ru/" target="_blank" className="icon-link" rel="noreferrer">
                <Icon type={'telegram'} />
              </a>
              <a href="https://www.amocrm.ru/" target="_blank" className="icon-link" rel="noreferrer">
                <Icon type={'phone'} />
              </a>
              <a href="https://www.amocrm.ru/" target="_blank" className="icon-link" rel="noreferrer">
                <Icon type={'whatsapp'} />
              </a>
            </li>
            <li>
              <Link to={'/task-2'}>Москва, Путевой проезд 3с1, к 902</Link>
            </li>
          </ul>
        </div>
      </MenuBox>
      <div className="footer-bottom">
        <h5>©WELBEX 2022. Все права защищены.</h5>
        <Link to={'/task-2'}>Политика конфиденциальности</Link>
      </div>
    </FooterBox>
  );
};

export default Footer;

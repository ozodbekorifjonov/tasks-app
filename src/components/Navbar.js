import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Icon from '../assets/icons/Icon';
import logo from '../assets/images/logo.png';

const NavbarBox = styled.div`
  @media only screen and (min-width: 320px) and (max-width: 720px) {
    background-color: #0e1014;
    padding: 20px 16px;

    display: flex;
    width: 100%;
  }

  ul {
    display: flex;
    list-style-type: none;
    align-items: self-start;

    @media only screen and (min-width: 320px) and (max-width: 720px) {
      max-width: 350px;
      overflow-x: auto;
    }

    li {
      &.link {
        margin-right: 15px;

        a {
          backdrop-filter: blur(33px);
          background-blend-mode: overlay;
          background: rgba(255, 255, 255, 0);
          border-radius: 5px;
          transition: all linear 0.2s;
          padding: 8px 8px;

          &:hover {
            background: rgba(255, 255, 255, 0.15);
          }
        }
      }

      a {
        color: #e4e5ea;
        text-decoration: none;
        font-family: Inter, Open-Sans, Sans-Serif, serif;
        font-weight: 500;

        .logo-abstract {
          font-family: Montserrat, Open-Sans, Sans-Serif, serif;
          font-weight: 300;
          font-size: 10px;
          line-height: 12px;
          color: #e4e5ea;
          margin-top: 10px;
        }

        @media only screen and (min-width: 320px) and (max-width: 720px) {
          font-size: 12px;
          line-height: 15px;
          text-transform: uppercase;
        }
      }
    }

    .last-item {
      margin-left: auto;
      margin-right: 0;

      ul {
        li {
          margin-left: 30px;
        }
      }
    }

    @media only screen and (min-width: 320px) and (max-width: 720px) {
      .logo,
      .last-item {
        display: none;
      }
    }
  }
`;

const LogoImg = styled.img`
  width: 140px;
  height: 24px;
  object-fit: contain;
  margin-right: 22px;
`;

const Navbar = () => {
  return (
    <NavbarBox>
      <ul>
        <li className="logo">
          <Link to={'/'}>
            <LogoImg src={logo} alt={'logo'} />
            <h6 className="logo-abstract">
              крупный интегратор CRM <br /> в Росcии и ещё 8 странах
            </h6>
          </Link>
        </li>
        <li className="link">
          <Link to={'/task-2'}>Услуги</Link>
        </li>
        <li className="link">
          <Link to={'/task-2'}>Виджеты</Link>
        </li>
        <li className="link">
          <Link to={'/task-2'}>Интеграции</Link>
        </li>
        <li className="link">
          <Link to={'/task-2'}>Кейсы</Link>
        </li>
        <li className="link">
          <Link to={'/task-2'}>Сертификаты</Link>
        </li>
        <li className="last-item">
          <ul>
            <li>
              <a href="tel:75555555555" target="_blank" rel="noreferrer">
                +7 555 555-55-55
              </a>
            </li>
            <li>
              <a href="https://www.amocrm.ru/" target="_blank" rel="noreferrer">
                <Icon type={'telegram'} />
              </a>
            </li>
            <li>
              <a href="https://www.amocrm.ru/" target="_blank" rel="noreferrer">
                <Icon type={'phone'} />
              </a>
            </li>
            <li>
              <a href="https://www.amocrm.ru/" target="_blank" rel="noreferrer">
                <Icon type={'whatsapp'} />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </NavbarBox>
  );
};

export default Navbar;

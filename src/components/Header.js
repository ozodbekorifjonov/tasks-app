import React from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';
import Icon from '../assets/icons/Icon';

const HeaderBox = styled.div`
  margin-top: 94px;
  width: inherit;
  position: relative;

  @media only screen and (min-width: 320px) and (max-width: 720px) {
    margin-top: 40px;
    padding: 0 14px;
  }

  .left-box {
    float: left;

    h2 {
      &.first-line {
        font-weight: 400;
        font-size: 48px;
        line-height: 58px;
        color: #e4e5ea;

        @media only screen and (min-width: 320px) and (max-width: 720px) {
          font-weight: 400;
          font-size: 36px;
          line-height: 44px;
        }
      }

      &.middle-line {
        font-weight: 900;
        font-size: 48px;
        line-height: 58px;
        background: -webkit-linear-gradient(left, #fcb045 27.14%, #ff3f78 121.36%), #e4e5ea;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        @media only screen and (min-width: 320px) and (max-width: 720px) {
          font-size: 36px;
          line-height: 44px;
        }
      }
    }

    p {
      font-family: Montserrat, Open-Sans, Sans-Serif, serif;
      margin-top: 30px;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;

      @media only screen and (min-width: 320px) and (max-width: 720px) {
        margin-top: 15px;
        font-size: 18px;
        line-height: 22px;
      }
    }
  }

  .right-box {
    float: right;
    text-align: right;

    @media only screen and (min-width: 320px) and (max-width: 720px) {
      margin-top: 45px;
      text-align: left;
      float: left;
    }

    .first-line {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;

      @media only screen and (min-width: 320px) and (max-width: 720px) {
        font-size: 18px;
        line-height: 22px;
      }
    }

    .span {
      text-transform: uppercase;
      font-weight: 700;

      .span-text-1 {
        background: linear-gradient(90deg, #fcb045 15%, #fd1d1d 50%),
          linear-gradient(0deg, #e4e5ea, #e4e5ea);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .span-text-2 {
        background: -webkit-linear-gradient(left, #fcb045 27.14%, #ff3f78 121.36%), #e4e5ea;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    ul {
      display: flex;
      list-style-type: none;
      justify-content: flex-end;
      margin-top: 40px;

      @media only screen and (min-width: 320px) and (max-width: 720px) {
        margin-top: 20px;
        justify-content: flex-start;
      }

      &:nth-child(odd) {
        margin-top: 30px;

        @media only screen and (min-width: 320px) and (max-width: 720px) {
          margin-top: 14px;
        }
      }

      li {
        margin-left: 31px;

        @media only screen and (min-width: 320px) and (max-width: 720px) {
          margin-left: 0;
          margin-right: 10px;
        }

        h4 {
          font-weight: 500;
          font-size: 18px;
          line-height: 22px;
          letter-spacing: 0.05em;
          text-transform: uppercase;

          @media only screen and (min-width: 320px) and (max-width: 720px) {
            display: none;
          }
        }

        p {
          font-family: Montserrat, Open-Sans, Sans-Serif, serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;

          @media only screen and (min-width: 320px) and (max-width: 720px) {
            display: none;
          }
        }
      }
    }

    button {
      margin-top: 61px;

      @media only screen and (min-width: 320px) and (max-width: 720px) {
        display: none;
      }
    }
  }

  .clear-float {
    clear: both;
  }
`;

const ListItemMB = styled.div`
  display: none;
  align-items: center;
  font-family: Montserrat, Open-Sans, Sans-Serif, serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  img {
    margin-right: 5px;
  }

  @media only screen and (min-width: 320px) and (max-width: 720px) {
    display: flex;
  }
`;

const Header = () => {
  return (
    <HeaderBox>
      <div className="left-box">
        <h2 className="first-line">
          Зарабатывайте <br /> больше
        </h2>
        <h2 className="middle-line">с WELBEX</h2>
        <p>
          Развиваем и контролируем <br /> продажи за вас
        </p>
      </div>
      <div className="right-box">
        <h4 className="first-line">
          Вместе с{' '}
          <span className="span">
            <span className="span-text-1">бесплатной</span> <br />{' '}
            <span className="span-text-2">консультацией</span>
          </span>{' '}
          мы дарим:
        </h4>
        <ul>
          <li>
            <ListItemMB>
              <Icon type="lineMB" />
              Skype аудит
            </ListItemMB>
            <h4>Виджеты</h4>
            <p>
              30 готовых <br /> решений
            </p>
          </li>
          <li>
            <ListItemMB>
              <Icon type="lineMB" />
              30 виджетов
            </ListItemMB>
            <h4>Dashboard</h4>
            <p>
              с показателями <br /> вашего бизнеса
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <ListItemMB>
              <Icon type="lineMB" />
              Dashboard
            </ListItemMB>
            <h4>Skype Аудит</h4>
            <p>
              отдела продаж <br /> и CRM системы
            </p>
          </li>
          <li>
            <ListItemMB>
              <Icon type="lineMB" />
              Месяц аmoCRM
            </ListItemMB>
            <h4>35 дней</h4>
            <p>
              использования <br /> CRM
            </p>
          </li>
        </ul>

        <Button value="Получить консультацию" />
      </div>
      <div className="clear-float" />
    </HeaderBox>
  );
};

export default Header;

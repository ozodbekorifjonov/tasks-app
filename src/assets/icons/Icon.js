import React from 'react';

import styled from 'styled-components';
import Telegram from './source/telegram.svg';
import Phone from './source/phone.svg';
import Whatsapp from './source/whatsapp.svg';
import LineMB from './source/line-mb.svg';

const IconImg = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  object-fit: contain;
`;

const ImgObj = {
  telegram: Telegram,
  phone: Phone,
  whatsapp: Whatsapp,
  lineMB: LineMB,
};

function Icon({ type, onClick, style }) {
  return <IconImg style={style} src={ImgObj[type]} onClick={onClick} alt={type} />;
}

export default Icon;

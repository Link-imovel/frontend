import { CardProps } from '@components/container/card/card.type';
import styled from 'styled-components';

const sizeMapper = {
  small: {
    height: '124px',
    width: '269px',
  },
  normal: {
    height: '265px',
    width: '246px',
  },
};

const CardBody = styled.div<CardProps>`
  height: ${({ size }) => size && sizeMapper[size].height};
  width: ${({ size }) => size && sizeMapper[size].width};
`;

const Wrapper = styled.div`
  padding: 14px;
`;

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const CardTitle = styled.span`
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme: { colors } }) => colors.greyBlue};
`;

const CardAddress = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  color: ${({ theme: { colors } }) => colors.blackGrey};
`;

const CardValue = styled.span`
  margin-top: 6px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme: { colors } }) => colors.blackGrey};
`;

const CardNeighborhood = styled.span`
  margin-top: 6px;
  font-size: 13px;
  line-height: 15px;
  color: ${({ theme: { colors } }) => colors.greyBlue};
`;

const IconWrapper = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 13px;
  line-height: 15px;
  color: ${({ theme: { colors } }) => colors.greyBlue};
`;

const Bed = styled.div`
  width: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  svg {
    margin-right: 13px;
  }
`;

const Bathroom = styled.div`
  width: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  svg {
    margin-right: 13px;
  }
`;

const Car = styled.div`
  width: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  svg {
    margin-right: 13px;
  }
`;

const ButtonsWrapper = styled.div`
  margin-top: 33px;
  display: flex;
  align-items: center;
`;

const ButtonWhatsApp = styled.div`
  margin-right: 22px;
`;

const ButtonNavigation = styled.div`
  margin-right: 6px;
`;

const ButtonContact = styled.div``;

export {
  CardBody,
  Wrapper,
  MainWrapper,
  CardTitle,
  CardAddress,
  CardValue,
  CardNeighborhood,
  IconWrapper,
  Bathroom,
  Bed,
  Car,
  ButtonsWrapper,
  ButtonWhatsApp,
  ButtonNavigation,
  ButtonContact,
};

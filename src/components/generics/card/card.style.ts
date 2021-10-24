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

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 16px 13px 0 13px;
`;

const CardTitle = styled.span`
  font-size: 14px;
  line-height: 16px;

  color: #7c98a7;
`;

const CardAddress = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;

  color: #363a42;
`;

const CardValue = styled.span`
  padding-top: 6px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  color: #363a42;
`;

const CardNeighborhood = styled.span`
  padding-top: 6px;
  font-size: 13px;
  line-height: 15px;

  color: #7c98a7;
`;

const IconWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 16px 13px 0 13px;

  font-size: 13px;
  line-height: 15px;

  color: #7c98a7;
`;

const Bed = styled.div``;

const Bathroom = styled.div``;

const Car = styled.div``;

export {
  CardBody,
  MainWrapper,
  CardTitle,
  CardAddress,
  CardValue,
  CardNeighborhood,
  IconWrapper,
  Bathroom,
  Bed,
  Car,
};

import { CardProps } from '@components/container/card/card.type';
import styled from 'styled-components';

const sizeMapper = {
  small: {
    height: '209px',
    width: '269px',
  },
  normal: {
    height: '265px',
    width: '464px',
  },
};

const CardBody = styled.div<CardProps>`
  height: ${({ size }) => size && sizeMapper[size].height};
  width: ${({ size }) => size && sizeMapper[size].width};
`;

const Wrapper = styled.div<{
  sizePadding?: string;
}>`
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ sizePadding }) =>
    sizePadding?.match(/^(?!(small)).*$/g) ? 'padding:20px' : 'padding:14px'};
  box-sizing: border-box;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const CardTitle = styled.span<{
  sizeWidth?: string;
}>`
  ${({ sizeWidth }) =>
    sizeWidth?.match(/^(?!(small)).*$/g) ? 'width:152px' : 'width:120px'};
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme: { colors } }) => colors.greyBlue};
`;

const CardAddress = styled.span<{
  sizeWidth?: string;
}>`
  ${({ sizeWidth }) =>
    sizeWidth?.match(/^(?!(small)).*$/g) ? 'width:152px' : 'width:120px'};
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  color: ${({ theme: { colors } }) => colors.blackGrey};
`;

const CardVisibility = styled.span<{
  sizeWidth?: string;
}>`
  ${({ sizeWidth }) =>
    sizeWidth?.match(/^(?!(small)).*$/g) ? 'width:110px' : 'width:0px'};
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  color: ${({ theme: { colors } }) => colors.greyBlue};
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  svg {
    margin-right: 13px;
  }
`;

const CardValue = styled.span<{
  sizeWidth?: string;
}>`
  ${({ sizeWidth }) =>
    sizeWidth?.match(/^(?!(small)).*$/g) ? 'width:152px' : 'width:120px'};
  margin-top: 6px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme: { colors } }) => colors.blackGrey};
`;

const CardNeighborhood = styled.span<{
  sizeWidth?: string;
}>`
  ${({ sizeWidth }) =>
    sizeWidth?.match(/^(?!(small)).*$/g) ? 'width:152px' : 'width:120px'};
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

const Bed = styled.div<{
  sizeWidth?: string;
}>`
  ${({ sizeWidth }) =>
    sizeWidth?.match(/^(?!(small)).*$/g) ? 'width:132px' : 'width:120px'};
  display: flex;
  flex-direction: row;
  align-items: center;
  svg {
    margin-right: 13px;
  }
`;

const Bathroom = styled.div<{
  sizeWidth?: string;
}>`
  ${({ sizeWidth }) =>
    sizeWidth?.match(/^(?!(small)).*$/g) ? 'width:132px' : 'width:120px'};
  display: flex;
  flex-direction: row;
  align-items: center;
  svg {
    margin-right: 13px;
  }
`;

const Car = styled.div<{
  sizeWidth?: string;
}>`
  ${({ sizeWidth }) =>
    sizeWidth?.match(/^(?!(small)).*$/g) ? 'width:132px' : 'width:120px'};
  display: flex;
  flex-direction: row;
  align-items: center;
  svg {
    margin-right: 13px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
`;

const CardInfo = styled.span`
  color: ${({ theme: { colors } }) => colors.blackGrey};
`;

const PermIdentity = styled.span<{
  sizeWidth?: string;
  sizePadding?: string;
}>`
  ${({ sizeWidth }) =>
    sizeWidth?.match(/^(?!(small)).*$/g) ? 'width:150px' : 'width:0px'};
  ${({ sizePadding }) =>
    sizePadding?.match(/^(?!(small)).*$/g)
      ? 'padding-top:12px'
      : 'padding-top:0px'};
  display: flex;
  flex-direction: row;
  align-items: center;
  svg {
    margin-right: 13px;
  }
  color: ${({ theme: { colors } }) => colors.greyBlue};
`;

const PhoneIphone = styled.span<{
  sizeWidth?: string;
  sizePadding?: string;
}>`
  ${({ sizeWidth }) =>
    sizeWidth?.match(/^(?!(small)).*$/g) ? 'width:150px' : 'width:0px'};
  ${({ sizePadding }) =>
    sizePadding?.match(/^(?!(small)).*$/g)
      ? 'padding-top:12px'
      : 'padding-top:0px'};
  display: flex;
  flex-direction: row;
  align-items: center;
  svg {
    margin-right: 13px;
  }
  color: ${({ theme: { colors } }) => colors.greyBlue};
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonWhatsApp = styled.div<{
  sizeMargin?: string;
}>`
  ${({ sizeMargin }) =>
    sizeMargin?.match(/^(?!(small)).*$/g)
      ? 'Margin-right:113px'
      : 'Margin-right:19px'};
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
  CardVisibility,
  CardValue,
  CardNeighborhood,
  IconWrapper,
  Bathroom,
  Bed,
  Car,
  InfoWrapper,
  CardInfo,
  PermIdentity,
  PhoneIphone,
  ButtonsWrapper,
  ButtonWhatsApp,
  ButtonNavigation,
  ButtonContact,
};

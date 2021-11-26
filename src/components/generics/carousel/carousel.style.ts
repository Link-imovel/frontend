import styled from 'styled-components';
import { CarouselBodyProp, CarouselImgProps } from './carousel.type';

const sizeMapper = {
  small: {
    height: '143px',
    width: '269px',
  },
  normal: {
    height: '265px',
    width: '246px',
  },
  size: {
    height: '100%',
    width: '100%',
  },
};

const border = {
  small: '10px 10px 0 0',
  normal: '10px 0 0 10px',
  size: '0',
};

const CarouselBody = styled.div<CarouselBodyProp>`
  position: relative;
  height: ${({ size }) => size && sizeMapper[size].height};
  width: ${({ size }) => size && sizeMapper[size].width};
  border-radius: ${({ size }) => size && border[size]};
  overflow: hidden;
`;

const CarouselSlider = styled.div<CarouselImgProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  transform: translate(-${({ selectedTab }) => `${selectedTab}00%`});
  transition: all 0.3s;
`;

const CarouselImage = styled.img`
  position: relative;
  flex: 0 0 100%;
  width: 100%;
  counter-increment: item;
`;

const CarouselArrowL = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  cursor: pointer;
  z-index: 1;
`;

const CarouselArrowR = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  cursor: pointer;
  z-index: 1;
`;

export {
  CarouselBody,
  CarouselSlider,
  CarouselArrowR,
  CarouselArrowL,
  CarouselImage,
};

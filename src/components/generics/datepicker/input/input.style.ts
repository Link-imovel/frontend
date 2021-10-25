import styled from 'styled-components';

const IconWrapper = styled.div`
  position: relative;

  & > svg {
    position: absolute;
    top: 25%;
    right: 14px;
  }
`;

const ContainerWrapper = styled.div`
  position: relative;

  ${IconWrapper} + div {
    position: absolute;
    z-index: 99999;
    top: calc(100% + 10px);
  }
`;

export { IconWrapper, ContainerWrapper };

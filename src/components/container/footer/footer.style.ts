import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 65px;
  padding: 25px 125px;
  background-color: inherit;
  @media ${({ theme: { device } }) => device.laptop.max} {
    padding: 15px;
    height: 100px;
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ theme }) => theme.colors.blackGrey};
  @media ${({ theme: { device } }) => device.laptop.max} {
    flex-wrap: wrap;
  }
`;

const FooterLabel = styled.label`
  font-weight: ${({ theme }) => theme.text.weight.medium};
  font-size: ${({ theme }) => theme.text.sizes.small};
`;

const FooterHref = styled.a`
  margin: 0 2.5px;
  font-weight: ${({ theme }) => theme.text.weight.medium};
  font-size: ${({ theme }) => theme.text.sizes.small};
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;

export { FooterContainer, FooterWrapper, FooterLabel, FooterHref };

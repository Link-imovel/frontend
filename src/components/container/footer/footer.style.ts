import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2% 8%;
  width: 100%;
  height: 90px;
  background-color: inherit;
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ theme }) => theme.colors.blackGrey};
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

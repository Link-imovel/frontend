import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 1020px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginWrapper = styled.div`
  max-width: 500px;
  height: 460px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LoginTitle = styled.span`
  color: ${({ theme: { colors } }) => colors.blackGrey};
  font-size: ${({ theme: { text } }) => text.sizes.large};
  line-height: 21px;
`;

export const LoginSubtitle = styled.span`
  color: ${({ theme: { colors } }) => colors.blackGrey};
  font-size: ${({ theme: { text } }) => text.sizes.large};
  line-height: 21px;
`;

export const InputWrapper = styled.div`
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LinkContainer = styled.span<{ reverse?: boolean }>`
  align-self: ${({ reverse }) => (reverse ? 'flex-start' : 'flex-end')};

  a {
    font-size: ${({ theme: { text } }) => text.sizes.small};
    text-decoration: none;
    color: ${({ theme: { colors } }) => colors.blackGrey};
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
    span {
      color: ${({ theme: { colors } }) => colors.orange};
    }
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  background-image: url('images/background-image-login.png');
  background-repeat: no-repeat;
  background-size: cover;
`;

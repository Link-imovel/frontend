import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const ContactContent = styled.div`
  padding: 8%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.span`
  color: ${({ theme: { colors } }) => colors.blackGrey};
  font-size: ${({ theme: { text } }) => text.sizes.large};
  line-height: 21px;
`;

export const Wrapper = styled.div`
  width: 350px;
  margin: 20px 0 20px 0;
  height: 196px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImageContent = styled.div`
  flex: 1;
  background-image: url('images/background-image-generic.png');
  background-repeat: no-repeat;
  background-size: cover;
  @media ${({ theme: { device } }) => device.laptop.max} {
    display: none;
  }
`;

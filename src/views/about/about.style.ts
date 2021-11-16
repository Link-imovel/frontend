import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2% 8%;
`;

export const Wrapper = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  align-self: center;
  color: ${({ theme: { colors } }) => colors.blackGrey};
  font-size: ${({ theme: { text } }) => text.sizes.xlarge};
  line-height: 21px;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  color: ${({ theme: { colors } }) => colors.blackGrey};
  font-size: ${({ theme: { text } }) => text.sizes.large};
`;

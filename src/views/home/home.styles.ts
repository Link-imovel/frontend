import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 142px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  color: ${({ theme: { colors } }) => colors.blackGrey};
  font-size: ${({ theme: { text } }) => text.sizes.large};
  line-height: 21px;
`;

export const Wrapper = styled.div`
  margin-top: 14px;
  width: inherit;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 142px;
  display: flex;
  flex-direction: column;
`;

export const CardWrapperTitle = styled.div`
  color: ${({ theme: { colors } }) => colors.blackGrey};
  font-size: ${({ theme: { text } }) => text.sizes.large};
  line-height: 21px;
`;

export const CardWrapper = styled.div`
  margin-top: 14px;
  width: inherit;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

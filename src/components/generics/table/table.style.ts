import styled from 'styled-components';

export const Table = styled.table`
  border-radius: 8px;
  border-collapse: collapse;
  font-size: 0.85rem;
  overflow: hidden;
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.lightGreyBlue};
`;

export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
  padding: 12px 20px;
  text-align: left;
  background-color: ${({ theme: { colors } }) => colors.orange};
  font-weight: ${({ theme: { text } }) => text.weight.bold};
  color: ${({ theme: { colors } }) => colors.whiteGrey};
`;

export const Tbody = styled.tbody``;

export const Td = styled.td`
  padding: 12px 20px;
  color: ${({ theme: { colors } }) => colors.greyBlue};
`;

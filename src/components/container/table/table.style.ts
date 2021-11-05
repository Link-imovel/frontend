import styled from 'styled-components';

export const Table = styled.table`
  border-radius: 8px;
  box-shadow: 0px 5px 20px 8px rgba(0, 0, 0, 0.05);
  border-collapse: collapse;
  font-size: 0.85rem;
  overflow: hidden;
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.greyBlue};
`;

export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
  padding: 12px 20px;
  text-align: left;
  background-color: ${({ theme: { colors } }) => colors.white};
  font-weight: 500;
  color: ${({ theme: { colors } }) => colors.blackGrey};
`;

export const Tbody = styled.tbody``;

export const Td = styled.td`
  padding: 12px 20px;
  color: ${({ theme: { colors } }) => colors.white};
`;

import styled, { css } from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  border-radius: 8px;
  box-shadow: 0 5px 10px ${({ theme: { colors } }) => colors.lightGrey};
  background-color: white;
  width: 100%;
  text-align: left;
  overflow: hidden;
`;

export const Thead = styled.thead`
  background-color: ${({ theme: { colors } }) => colors.grey};

  @media ${({ theme: { device } }) => device.laptop.max} {
    display: none;
  }
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme: { colors } }) => colors.lightGreyBlue};
  }
`;

export const Th = styled.th`
  padding: 20px 18px;
  font-weight: ${({ theme: { text } }) => text.weight.bold};
  color: ${({ theme: { colors } }) => colors.blackGrey};
`;

export const Tbody = styled.tbody``;

export const Td = styled.td<{
  type: 'default' | 'active' | 'pending';
  name?: string;
}>`
  @media ${({ theme: { device } }) => device.laptop.max} {
    &::before {
      content: attr(name);
      float: left;
    }
    display: block;
    text-align: right;
  }

  ${({ type }) => styles[type]}
`;

const styles = {
  default: css`
    padding: 12px 20px;
    color: ${({ theme: { colors } }) => colors.greyBlue};
  `,
  active: css`
    color: ${({ theme: { colors } }) => colors.green};
    background-color: ${({ theme: { colors } }) => colors.fadedGreen};
    text-align: center;
    @media ${({ theme: { device } }) => device.laptop.max} {
      text-align: center;
    }
  `,
  pending: css`
    color: ${({ theme: { colors } }) => colors.yellow};
    background-color: ${({ theme: { colors } }) => colors.fadedYellow};
    text-align: center;
    @media ${({ theme: { device } }) => device.laptop.max} {
      text-align: center;
    }
  `,
};

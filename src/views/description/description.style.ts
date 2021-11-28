import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 2% 8%;
  width: 100%;
  height: 100%;
`;

export const HeaderContent = styled.div`
  margin-bottom: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DropdownContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.span<{ variant: 'primary' | 'secondary' }>`
  ${({ variant }) => styles[variant]};
`;

export const Subtitle = styled.span`
  font-size: ${({ theme: { text } }) => text.sizes.small};
  color: ${({ theme: { colors } }) => colors.blackGrey};
  @media ${({ theme: { device } }) => device.laptop.max} {
    margin-top: 14px;
  }
`;

export const Address = styled.label`
  text-transform: capitalize;
`;

export const Value = styled.span`
  font-size: ${({ theme: { text } }) => text.sizes.large};
  color: ${({ theme: { colors } }) => colors.blackGrey};
  @media ${({ theme: { device } }) => device.laptop.max} {
    margin: 14px 0 20px 0;
  }
`;

export const Content = styled.div<{ variant: 'flex' | 'grid' }>`
  ${({ variant }) => styles[variant]}
`;

export const OverviewContent = styled.div`
  grid-area: columnA;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  @media ${({ theme: { device } }) => device.laptop.max} {
    height: 280px;
    display: flex;
    flex-direction: column;
  }
`;

export const IconContent = styled.div`
  margin-top: 22px;
  flex: 1;
  display: flex;
  flex-direction: row;
  @media ${({ theme: { device } }) => device.laptop.max} {
    display: flex;
    flex-direction: column;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 165px;
  @media ${({ theme: { device } }) => device.laptop.max} {
    display: flex;
    margin-right: 0;
  }
`;

export const DescriptionContent = styled.div`
  grid-area: columnA;
`;

export const Text = styled.p`
  margin-top: 22px;
  max-width: 571px;
  font-size: ${({ theme: { text } }) => text.sizes.small};
  color: ${({ theme: { colors } }) => colors.blackGrey};
  @media ${({ theme: { device } }) => device.laptop.max} {
    margin-top: 14px;
  }
`;

export const ContactContainer = styled.div`
  grid-area: columnB;
`;

export const LocateContent = styled.div`
  width: 100%;
  height: 545px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 8px;
  overflow: hidden;
`;

export const Line = styled.div<{ type: 'line-small' | 'line-large' }>`
  ${({ type }) => styles[type]};
`;

export const Wrapper = styled.div<{ hasIcon?: boolean }>`
  display: flex;
  ${({ hasIcon }) =>
    hasIcon
      ? `
        height: 24px;
        flex-direction: row; 
        align-items: center;
        svg {
          margin-right: 13px
        }
      `
      : 'flex-direction: column;'}
`;

const styles = {
  flex: css`
    margin-bottom: 45px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media ${({ theme: { device } }) => device.laptop.max} {
      margin-bottom: 14px;
      display: flex;
      flex-direction: column;
    }
  `,
  grid: css`
    margin-bottom: 45px;
    display: grid;
    grid-template-columns: 1fr 350px;
    grid-template-areas: 'columnA columnB';
    gap: 50px;
    @media ${({ theme: { device } }) => device.laptop.max} {
      display: flex;
      flex-direction: column;
    }
  `,
  primary: css`
    font-size: ${({ theme: { text } }) => text.sizes.large};
    font-weight: ${({ theme: { text } }) => text.weight.medium};
    color: ${({ theme: { colors } }) => colors.blackGrey};
    text-transform: uppercase;
  `,
  secondary: css`
    font-size: ${({ theme: { text } }) => text.sizes.medium};
    color: ${({ theme: { colors } }) => colors.greyBlue};
    @media ${({ theme: { device } }) => device.laptop.max} {
      margin-bottom: 14px;
    }
  `,
  'line-small': css`
    margin-left: 20px;
    height: 40px;
    color: ${({ theme: { colors } }) => colors.blackGrey};
  `,
  'line-large': css`
    margin: 45px 0;
    border: 1px solid ${({ theme: { colors } }) => colors.lightGrey};
  `,
};

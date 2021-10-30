import styled, { css } from 'styled-components';

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

export const Line = styled.div`
  margin: 45px 0;
  border: 1px solid ${({ theme: { colors } }) => colors.lightGrey};
`;

export const DescriptionContainer = styled.div`
  padding: 55px 75px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HeaderWrapper = styled.div`
  margin-bottom: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DescriptionWrapper = styled.div<{ variant: 'flex' | 'grid' }>`
  ${({ variant }) => styles[variant]}
`;

export const DescriptionTitle = styled.span`
  font-size: ${({ theme: { text } }) => text.sizes.large};
  font-weight: ${({ theme: { text } }) => text.weight.medium};
  color: ${({ theme: { colors } }) => colors.blackGrey};
`;

export const DescriptionSubtitle = styled.span`
  font-size: ${({ theme: { text } }) => text.sizes.small};
  color: ${({ theme: { colors } }) => colors.blackGrey};
`;

export const DescriptionValue = styled.span`
  font-size: ${({ theme: { text } }) => text.sizes.large};
  color: ${({ theme: { colors } }) => colors.blackGrey};
`;

export const DescriptionOverviewWrapper = styled.div`
  grid-area: columnA;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const DescriptionOverviewTitle = styled.span`
  font-size: ${({ theme: { text } }) => text.sizes.medium};
  color: ${({ theme: { colors } }) => colors.greyBlue};
`;

export const DescriptionIconContainer = styled.div`
  margin-top: 22px;
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const DescriptionIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 165px;
`;

export const DescriptionTextWrapper = styled.div`
  grid-area: columnA;
`;

export const DescriptionTextTitle = styled.span`
  font-size: ${({ theme: { text } }) => text.sizes.medium};
  color: ${({ theme: { colors } }) => colors.greyBlue};
`;

export const DescriptionText = styled.p`
  margin-top: 22px;
  max-width: 571px;
  font-size: ${({ theme: { text } }) => text.sizes.small};
  color: ${({ theme: { colors } }) => colors.blackGrey};
`;

export const DescriptionContactWrapper = styled.div`
  grid-area: columnB;
`;

export const DescriptionLocateWrapper = styled.div`
  width: 100%;
  height: 545px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DescriptionLocateTitle = styled.span`
  font-size: ${({ theme: { text } }) => text.sizes.medium};
  color: ${({ theme: { colors } }) => colors.greyBlue};
`;

export const DescriptionMapWrapper = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 8px;
  overflow: hidden;
`;

const styles = {
  flex: css`
    margin-bottom: 45px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  grid: css`
    margin-bottom: 45px;
    display: grid;
    grid-template-columns: 1fr 350px;
    grid-template-areas: 'columnA columnB';
    gap: 50px;
  `,
};

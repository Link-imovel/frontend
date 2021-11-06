import styled from 'styled-components';

const Container = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
`;

const DropzoneContainer = styled.div`
  border: dashed ${({ theme: { colors } }) => colors.lightGrey} 4px;
  position: absolute;
  inset: 0;
`;

const DropzoneWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  text-align: center;
`;

const DropzoneLabel = styled.label`
  color: ${({ theme: { colors } }) => colors.lightGrey};
  font-size ${({ theme: { text } }) => text.sizes.xlarge};
`;

const ImageContainer = styled.div`
  display: grid;
  grid-gap: 28px;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: column dense;
`;

const NoImage = styled.div`
  width: 181px;
  height: 166px;
  background: ${({ theme: { colors } }) => colors.orange}80;
  border: 0.5px solid ${({ theme: { colors } }) => colors.orange};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 181px;
  height: 166px;
`;

export {
  Container,
  DropzoneContainer,
  DropzoneWrapper,
  ImageContainer,
  ImageWrapper,
  DropzoneLabel,
  NoImage,
};

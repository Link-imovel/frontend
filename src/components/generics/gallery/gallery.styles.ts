import styled from 'styled-components';

const MainImageWrapper = styled.div`
  width: 40%;
  margin-right: 1%;
`;

const ImagesWrapper = styled.div`
  width: 60%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1%;
  grid-row-gap: 1%;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
`;

export { Image, ImagesWrapper, MainImageWrapper };

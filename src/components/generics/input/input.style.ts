import styled, { css } from 'styled-components';

const Error = styled.div`
  height: 0;
  font-size: 0.75rem;
  color: ${({ theme: { colors } }) => colors.red};
  padding-left: 0.8rem;
  transition: all 0.2s ease-in-out;
`;

const errorHeight = css`
  outline: 0.063rem solid ${({ theme: { colors } }) => colors.red};

  & ~ ${Error} {
    height: 0.375rem;
  }
`;

const Icon = styled.span`
  right: 1rem;
  top: 1.3rem;
  position: absolute;
`;

const border = {
  none: '0px',
  square: '8px',
};

const getRadius = (radius?: 'none' | 'square') => {
  return `
    border-radius: ${border[radius || 'square']};
  `;
};

const Wrapper = styled.div<{ radius?: 'none' | 'square' }>`
  position: relative;

  input {
    width: 100%;
    border: 1px solid ${({ theme: { colors } }) => colors.lightGrey};
    ${({ radius }) => getRadius(radius)}
    height: 3.063rem;
    outline: unset;
    font-size: 1rem;
    color: ${({ theme: { colors } }) => colors.blackGrey};
    box-sizing: border-box;
    padding-top: 1.8rem;
    padding-left: 0.8rem;
    padding-bottom: 0.5rem;
    border-radius: none;
    background-color: ${({ theme: { colors } }) => colors.whiteGrey};

    &::placeholder {
      color: ${({ theme: { colors } }) => colors.lightGrey};
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.85;
    }

    &[type='number']::-webkit-outer-spin-button,
    &input[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: textfield;
    }

    &[type='number'] {
      -moz-appearance: textfield;
    }

    &[invalid='true'] {
      ${errorHeight};
    }
  }
`;

const Label = styled.label`
  top: 0.5rem;
  left: 0.8rem;
  position: absolute;
  font-size: 0.875rem;
  color: ${({ theme: { colors } }) => colors.blackGrey};
`;

export { Error, Icon, Wrapper, Label };

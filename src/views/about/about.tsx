import React from 'react';

import { Page } from '@components/container/page';
import { Button } from '@components/generics/button';

import { Logo } from '@components/generics/icons/logo';
import { ArrowBefore } from '@components/generics/icons/arrowbefore';

import * as S from './about.style';
import { colors } from '@theme/theme/default';
import { AboutProps } from './about.type';

const About = ({
  title,
  description,
  buttons,
}: AboutProps): React.ReactElement => {
  return (
    <Page>
      <S.Container>
        <S.Wrapper>
          <Button
            variant="transparent"
            size="xsmall"
            radius="square"
            icon={<Logo fill={colors.blackGrey} />}
            onClick={buttons.BLogo.callback}
          />
          <Button
            variant="transparent"
            label={buttons.BArrowBefore.label}
            justifyContent="space-between"
            color={colors.blackGrey}
            size="xsmall"
            radius="square"
            iconReverse={true}
            icon={<ArrowBefore height={20} width={20} />}
            onClick={buttons.BArrowBefore.callback}
          />
        </S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Container>
    </Page>
  );
};

export { About };

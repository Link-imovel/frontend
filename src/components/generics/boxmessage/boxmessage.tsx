import React from 'react';
import { useBoxMessage } from '@hooks/boxmessage';

import { Button } from '../button';

import { Close } from '../icons/close';

import * as S from './boxmessage.style';
import { BoxMessageProps } from './boxmessage.type';
import { colors } from '@theme/theme/default';

const BoxMessage = ({
  open,
  reference,
}: BoxMessageProps): React.ReactElement => {
  const { closeModal } = useBoxMessage();

  return (
    <S.Container show={open}>
      <S.Wrapper>
        <S.Header>
          <S.Title>
            Tem certeza em excluir o anúncio: <strong>{reference}</strong>
          </S.Title>
          <Button
            variant="transparent"
            size="small"
            justifyContent="space-between"
            radius="square"
            icon={<Close width={20} height={20} fill={colors.blackGrey} />}
            onClick={closeModal}
          />
        </S.Header>
        <S.Content>
          <Button
            variant="primary"
            label="Sim"
            color={colors.whiteGrey}
            onClick={() => console.log()}
          />
          <Button
            variant="primary"
            label="Não"
            color={colors.whiteGrey}
            background={colors.red}
            onClick={closeModal}
          />
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
};

export { BoxMessage };

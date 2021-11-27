import React from 'react';
import { useRouter } from 'next/router';

import { Button } from '@components/generics/button';

import { Delete } from '@components/generics/icons/delete';

import * as S from './table.style';
import { colors } from '@theme/theme/default';
import { TableProps } from './table.type';
import { useBoxMessage } from '@hooks/boxmessage';

const Table = ({ users }: Required<TableProps>): React.ReactElement => {
  const router = useRouter();

  const { openModal } = useBoxMessage();

  const editUser = React.useCallback(() => {
    router.push('user/update');
  }, [router]);

  const renderStatus = React.useCallback(
    (status: boolean | undefined): JSX.Element => {
      if (status) {
        return <S.Td type="active">Ativo</S.Td>;
      } else {
        return <S.Td type="pending">Pendente</S.Td>;
      }
    },
    []
  );

  return (
    <S.Table>
      <S.Thead>
        <S.Tr>
          <S.Th>Nome</S.Th>
          <S.Th>Sobrenome</S.Th>
          <S.Th>E-mail</S.Th>
          <S.Th>CRECI</S.Th>
          <S.Th>Telefone</S.Th>
          <S.Th>CPF</S.Th>
          <S.Th>Data Nascimento</S.Th>
          <S.Th>Status</S.Th>
          <S.Th></S.Th>
          <S.Th></S.Th>
        </S.Tr>
      </S.Thead>
      <S.Tbody>
        {users.map((user) => (
          <S.Tr key={user?.id}>
            <S.Td type="default">{user?.firstName}</S.Td>
            <S.Td type="default">{user?.lastName}</S.Td>
            <S.Td type="default">{user?.email}</S.Td>
            <S.Td type="default">{user?.creci}</S.Td>
            <S.Td type="default">{user?.phone}</S.Td>
            <S.Td type="default">{user?.registry}</S.Td>
            <S.Td type="default">{user?.birthday}</S.Td>
            {renderStatus(user?.isActive)}
            <S.Td type="default">
              <Button
                variant="transparent"
                label="Editar"
                size="small"
                radius="square"
                color={colors.greyBlue}
                onClick={editUser}
              />
            </S.Td>
            <S.Td type="default">
              <Button
                variant="transparent"
                size="small"
                radius="square"
                icon={<Delete height={20} width={20} fill={colors.orange} />}
                onClick={() => openModal(user?.id || undefined)}
              />
            </S.Td>
          </S.Tr>
        ))}
      </S.Tbody>
    </S.Table>
  );
};

export { Table };

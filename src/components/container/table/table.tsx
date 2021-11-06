import React from 'react';

import { Button } from '@components/generics/button';

import * as S from './table.style';
import { Navigation } from '@components/generics/icons/navigation';
import { colors } from '@theme/theme/default';
import { TableProps } from './table.type';

const Table = ({ users }: Required<TableProps>): React.ReactElement => {
  return (
    <S.Table>
      <S.Thead>
        <S.Tr>
          <S.Th>Nome</S.Th>
          <S.Th>E-mail</S.Th>
          <S.Th>CRESCI</S.Th>
          <S.Th>Telefone</S.Th>
          <S.Th>Tipo</S.Th>
          <S.Th></S.Th>
          <S.Th></S.Th>
        </S.Tr>
      </S.Thead>
      <S.Tbody>
        {users.map((user) => (
          <S.Tr key={user.id}>
            <S.Td>{user.name}</S.Td>
            <S.Td>{user.email}</S.Td>
            <S.Td>{user.cresci}</S.Td>
            <S.Td>{user.telephone}</S.Td>
            <S.Td>{user.type}</S.Td>
            <S.Td>
              {' '}
              <Button
                variant="transparent"
                label="Editar"
                size="small"
                radius="square"
                color={colors.greyBlue}
              />
            </S.Td>
            <S.Td>
              {' '}
              <Button
                variant="transparent"
                size="small"
                radius="square"
                icon={
                  <Navigation height={20} width={20} fill={colors.orange} />
                }
              />
            </S.Td>
          </S.Tr>
        ))}
      </S.Tbody>
    </S.Table>
  );
};

export { Table };

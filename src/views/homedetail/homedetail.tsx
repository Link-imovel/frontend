import React from 'react';

import { Page } from '@components/container/page';
import { Button } from '@components/generics/button';
// import { BreadCrumb } from '@components/generics/breadcrumb';
import { Dropdown } from '@components/generics/dropdown';
import { Input } from '@components/generics/input';
import { DatePickerInput } from '@components/generics/datepicker';
import { TextArea } from '@components/generics/textarea';
import { ImageDnD } from '@components/generics/imagednd';

import * as S from './homedetail.style';
import { HomeDetailViewProps } from './homedetail.type';
import { colors } from '@theme/theme/default';
import { Logo } from '@components/generics/icons/logo';
import { ArrowBefore } from '@components/generics/icons/arrowbefore';
import { ArrowAfter } from '@components/generics/icons/arrowafter';
import { Formatters } from '@helpers/formatters';

const HomeDetail = ({
  title,
  buttons,
  // breadCrumb,
  handleData,
  handleValidation,
  data,
  valid,
}: HomeDetailViewProps): React.ReactElement => {
  return (
    <Page>
      <S.Container>
        <S.FormContent>
          <Button
            variant="transparent"
            size="xsmall"
            radius="square"
            icon={<Logo fill={colors.blackGrey} />}
            onClick={buttons.BLogo.callback}
          />
          {/* <BreadCrumb paths={breadCrumb.paths} /> */}
          <S.NavigationWrapper>
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
            <Button
              variant="transparent"
              label={buttons.BArrowAfter.label}
              justifyContent="space-between"
              color={colors.blackGrey}
              size="xsmall"
              radius="square"
              icon={<ArrowAfter height={20} width={20} />}
              onClick={buttons.BArrowBefore.callback}
            />
          </S.NavigationWrapper>
          <S.Title>{title}</S.Title>
          <S.Content>
            <S.Wrapper column="A">
              <Dropdown label="Tipo do anuncio" />
              <Input
                id="totalArea"
                label="Area total do imóvel"
                type="text"
                name="totalArea"
                placeholder="Informe area total do imóvel"
                onChange={(el) => handleData(el.target.id, el.target.value)}
                onValidation={({ valid }) =>
                  handleValidation('totalArea', valid)
                }
                value={data.totalArea}
                validators={[
                  {
                    type: 'Required',
                    message: 'Campo é requerido',
                  },
                  {
                    type: 'NotBlank',
                    message: 'O campo não pode estar em branco.',
                  },
                  {
                    type: 'OnlyNumbers',
                    message: 'Favor inserir somente números',
                  },
                ]}
              />
              <Dropdown label="Quarto" placeholder="Quantidade de Quarto" />
              <Dropdown label="Banheiro" placeholder="Quantidade de Banheiro" />
              <Dropdown
                label="Area de serviço"
                placeholder="Quantidade de Area de serviço"
              />
              <DatePickerInput
                selectedDate={new Date()
                  .toLocaleDateString('en-US')
                  .replace(/[/]/g, '-')}
                label="Ano da construção"
                name="constructionYear"
                handleValue={(value) => handleData('constructionYear', value)}
                onValidation={({ valid }) =>
                  handleValidation('constructionYear', valid)
                }
                validators={[
                  {
                    type: 'NotBlank',
                    message: 'A data não pode estar em branco.',
                  },
                  {
                    type: 'Required',
                    message: 'A data é necessário.',
                  },
                  {
                    type: 'Match',
                    message: 'Por favor digite uma data de nascimento válida.',
                    match: (value) => {
                      return (
                        !value ||
                        !!(value as string).match(
                          /^[0-9]{2}([/]|[-])[0-9]{2}([/]|[-])[0-9]{4}$/
                        )
                      );
                    },
                  },
                ]}
              />
            </S.Wrapper>
            <S.Wrapper column="B">
              <Input
                id="ref"
                label="Referencia"
                type="text"
                name="ref"
                placeholder="Informe uma referencia"
                onChange={(el) => handleData(el.target.id, el.target.value)}
                onValidation={({ valid }) => handleValidation('ref', valid)}
                value={data.ref}
                validators={[
                  {
                    type: 'Required',
                    message: 'Campo é requerido',
                  },
                  {
                    type: 'NotBlank',
                    message: 'O campo não pode estar em branco.',
                  },
                  {
                    type: 'OnlyLetters',
                    message: 'Digite somente letras.',
                  },
                ]}
              />
              <Input
                id="value"
                label="Valor do imóvel"
                type="text"
                name="value"
                placeholder="Informe o valor do imóvel"
                onChange={(el) =>
                  handleData(
                    el.target.id,
                    Formatters.formatPrice(el.target.value)
                  )
                }
                onValidation={({ valid }) => handleValidation('value', valid)}
                value={data.value}
                validators={[
                  {
                    type: 'Required',
                    message: 'Campo é requerido',
                  },
                  {
                    type: 'NotBlank',
                    message: 'O campo não pode estar em branco.',
                  },
                ]}
              />
              <Dropdown label="Sala" placeholder="Quantidade de Sala" />
              <Dropdown label="Cozinha" placeholder="Quantidade de Cozinha" />
              <Dropdown label="Garage" placeholder="Quantidade de Garage" />
              <TextArea withBorder={true} placeholder="Descrição" />
            </S.Wrapper>
          </S.Content>
          <Button
            variant="primary"
            label={buttons.BNext.label}
            size="large"
            radius="square"
            onClick={buttons.BNext.callback}
            disabled={!valid}
          />
        </S.FormContent>
        <S.ImageDndContent>
          <S.Title>Adicionar imagens do imóvel</S.Title>
          <ImageDnD />
        </S.ImageDndContent>
      </S.Container>
    </Page>
  );
};

export { HomeDetail };

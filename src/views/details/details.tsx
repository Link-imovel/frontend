import React from 'react';

import { Page } from '@components/container/page';
import { Button } from '@components/generics/button';
import { BreadCrumb } from '@components/generics/breadcrumb';
import { Dropdown } from '@components/generics/dropdown';
import { Input } from '@components/generics/input';
import { DatePickerInput } from '@components/generics/datepicker';
import { TextArea } from '@components/generics/textarea';
import { ImageDnD } from '@components/generics/imagednd';

import * as S from './details.style';
import { DetailsViewProps } from './details.type';
import { colors } from '@theme/theme/default';
import { options } from '@components/generics/dropdown/dropdown.options';
import { Logo } from '@components/generics/icons/logo';
import { ArrowBefore } from '@components/generics/icons/arrowbefore';
import { Formatters } from '@helpers/formatters';

const Details = ({
  title,
  buttons,
  breadCrumb,
  handleData,
  handleValidation,
  handleFiles,
  data,
  valid,
}: DetailsViewProps): React.ReactElement => {
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
          <BreadCrumb paths={breadCrumb.paths} />
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
          </S.NavigationWrapper>
          <S.Title>{title}</S.Title>
          <S.Content>
            <S.Wrapper column="A">
              <Input
                id="title"
                label="Titulo do anuncio"
                type="text"
                name="title"
                placeholder="Informe o titulo do anuncio"
                onChange={(el) => handleData(el.target.id, el.target.value)}
                onValidation={({ valid }) => handleValidation('title', valid)}
                value={data.title}
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
              <Dropdown
                label="Tipo do anuncio"
                placeholder="Escolha um"
                options={options.type}
                onSelect={(opt) => {
                  handleData('type', opt.label);
                  handleValidation('type', !!opt.label);
                }}
                selectedValue={data?.type}
              />
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
              <Dropdown
                label="Quarto"
                placeholder="Quantidade de Quarto"
                options={options.bedroom}
                onSelect={(opt) => {
                  handleData('bedroom', opt.label);
                  handleValidation('bedroom', !!opt.label);
                }}
                selectedValue={data?.bedroom}
              />
              <Dropdown
                label="Banheiro"
                placeholder="Quantidade de Banheiro"
                options={options.bathroom}
                onSelect={(opt) => {
                  handleData('bathroom', opt.label);
                  handleValidation('bathroom', !!opt.label);
                }}
                selectedValue={data?.bathroom}
              />
              <Dropdown
                label="Area de serviço"
                placeholder="Quantidade de Area de serviço"
                options={options.serviceArea}
                onSelect={(opt) => {
                  handleData('serviceArea', opt.label);
                  handleValidation('serviceArea', !!opt.label);
                }}
                selectedValue={data?.serviceArea}
              />
              <DatePickerInput
                selectedDate={new Date()
                  .toLocaleDateString('en-US')
                  .replace(/[/]/g, '-')}
                label="Ano da construção"
                name="buildAt"
                handleValue={(value) => handleData('buildAt', value)}
                onValidation={({ valid }) => handleValidation('buildAt', valid)}
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
                    message: 'Por favor digite uma data de construção válida.',
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
              <Dropdown
                label="Sala"
                placeholder="Quantidade de Sala"
                options={options.livingroom}
                onSelect={(opt) => {
                  handleData('room', opt.label);
                  handleValidation('room', !!opt.label);
                }}
                selectedValue={data?.room}
              />
              <Dropdown
                label="Cozinha"
                placeholder="Quantidade de Cozinha"
                options={options.kitchen}
                onSelect={(opt) => {
                  handleData('kitchen', opt.label);
                  handleValidation('kitchen', !!opt.label);
                }}
                selectedValue={data?.kitchen}
              />
              <Dropdown
                label="Garage"
                placeholder="Quantidade de Garage"
                options={options.garage}
                onSelect={(opt) => {
                  handleData('garage', opt.label);
                  handleValidation('garage', !!opt.label);
                }}
                selectedValue={data?.garage}
              />
              <TextArea
                withBorder={true}
                placeholder="Descrição"
                onChange={(evt) =>
                  handleValidation('description', !!evt.target.value)
                }
                value={data.description}
              />
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
          <ImageDnD getFiles={handleFiles} />
        </S.ImageDndContent>
      </S.Container>
    </Page>
  );
};

export { Details };

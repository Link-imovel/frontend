import React from 'react';

import { Page } from '@components/container/page';
import { Button } from '@components/generics/button';
import { BreadCrumb } from '@components/generics/breadcrumb';
import { Dropdown } from '@components/generics/dropdown';
import { Input } from '@components/generics/input';
import { DatePickerInput } from '@components/generics/datepicker';
import { TextArea } from '@components/generics/textarea';

import * as S from './homedetail.style';
import { HomeDetailProps } from './homedetail.type';
import { colors } from '@theme/theme/default';
import { Logo } from '@components/generics/icons/logo';
import { ArrowBefore } from '@components/generics/icons/arrowbefore';
import { ArrowAfter } from '@components/generics/icons/arrowafter';

const HomeDetail = ({
  title,
  buttons,
  breadCrumb,
  handleData,
}: Required<HomeDetailProps>): React.ReactElement => {
  return (
    <Page>
      <S.HomeDetailContainer>
        <S.HomeDetailWrapper>
          <Button
            variant="transparent"
            size="xsmall"
            radius="square"
            icon={<Logo fill={colors.blackGrey} />}
            onClick={buttons.BLogo.callback}
          />
          <BreadCrumb paths={breadCrumb.paths} />
          <S.HomeDetailNavigationWrapper>
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
          </S.HomeDetailNavigationWrapper>
          <S.HomeDetailTitle>{title}</S.HomeDetailTitle>
          <S.InputWrapper>
            <S.InputsColumnOne>
              <Dropdown label="Tipo do anuncio" />
              <Input
                id="totalArea"
                label="Area total do imóvel"
                type="text"
                name="totalArea"
                placeholder="Informe area total do imóvel"
                onChange={(el) => handleData(el.target.id, el.target.value)}
                validators={[
                  {
                    type: 'Required',
                    message: 'Campo é requerido',
                  },
                ]}
              />
              <Dropdown label="Quarto" />
              {/* <Input
                id="bedroom"
                label="Quant. Quarto"
                type="text"
                name="bedroom"
                placeholder="Informe a quantidade"
                onChange={(el) => handleData(el.target.id, el.target.value)}
                validators={[
                  {
                    type: 'Required',
                    message: 'Campo é requerido',
                  },
                ]}
              /> */}
              <Dropdown label="Banheiro" />
              {/* <Input
                id="bathroom"
                label="Quant. Banheiro"
                type="text"
                name="bathroom"
                placeholder="Informe a quantidade"
                onChange={(el) => handleData(el.target.id, el.target.value)}
                validators={[
                  {
                    type: 'Required',
                    message: 'Campo é requerido',
                  },
                ]}
              /> */}
              <Dropdown label="Area de serviço" />
              {/* <Input
                id="serviceArea"
                label="Quant. Area de serviço"
                type="text"
                name="serviceArea"
                placeholder="Informe a quantidade"
                onChange={(el) => handleData(el.target.id, el.target.value)}
                validators={[
                  {
                    type: 'Required',
                    message: 'Campo é requerido',
                  },
                ]}
              /> */}
              <DatePickerInput
                selectedDate={new Date()
                  .toLocaleDateString('en-US')
                  .replace(/[/]/g, '-')}
                label="Ano da construção"
                name="birthday"
                handleValue={(value) => handleData('birthday', value)}
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
                onValidation={(status) => console.log(status)}
              />
            </S.InputsColumnOne>
            <S.InputsColumnTwo>
              <Input
                id="ref"
                label="Referencia"
                type="text"
                name="ref"
                placeholder="Informe uma referencia"
                onChange={(el) => handleData(el.target.id, el.target.value)}
                validators={[
                  {
                    type: 'Required',
                    message: 'Campo é requerido',
                  },
                ]}
              />
              <Input
                id="value"
                label="Valor do imóvel"
                type="text"
                name="value"
                placeholder="Informe o valor do imóvel"
                onChange={(el) => handleData(el.target.id, el.target.value)}
                validators={[
                  {
                    type: 'Required',
                    message: 'Campo é requerido',
                  },
                ]}
              />
              <Dropdown label="Sala" />
              <Dropdown label="Cozinha" />
              <Dropdown label="Garage" />
              <TextArea withBorder={true} placeholder="Descrição" />
            </S.InputsColumnTwo>
          </S.InputWrapper>
          <Button
            variant="primary"
            label={buttons.BGeneric.label}
            size="large"
            radius="square"
            onClick={buttons.BGeneric.callback}
          />
        </S.HomeDetailWrapper>
        <S.HomeDetailContainerImages>
          <S.HomeDetailImagesTitle>
            Adicionar imagens do imóvel
          </S.HomeDetailImagesTitle>
        </S.HomeDetailContainerImages>
      </S.HomeDetailContainer>
    </Page>
  );
};

export { HomeDetail };

import _ from 'lodash';
import { useState } from 'react';
import { Input } from '../../../../components/input/input';
import { StyledInput } from '../../../../components/input/input.styles';
import { Text } from '../../../../components/text/text';
import { PlanEnum } from '../../../../services/authService/authService.types';
import {
  Container,
  ContentInput,
  DivRadioPlan,
  DivTypePlan,
  Inputstyle,
  SectionPlan,
} from './sideLeft.styles';

interface SideLeftProps {
  setValorPlano: (valorPlano: number | any) => void;
  valorPlano: number; }

interface Errors {
  nometitular?: string;
  ncartao?: number;
  validade?: number;
  cods?: number;
}

export const SideLeft = ({ setValorPlano, valorPlano }: SideLeftProps) => {
  const initialValue: PlanEnum | any= 50;

  const [errors, setErrors] = useState<Errors | null>(null);
  const [plan, setPlan] = useState<PlanEnum>(initialValue);
  const [nometitular, setNometitular] = useState('');
  const [ncartao, setNcartao] = useState('');
  const [validade, setValidade] = useState('');
  const [cods, setCods] = useState('');

  function validateFields() {
    let errorsArr: any = null;

    if (_.isEmpty(ncartao))
      errorsArr = { ...errorsArr, nome_completo: "Número do cartão não pode estar vazio" };
    if (_.isEmpty(validade)) errorsArr = { ...errorsArr, email: "Validade não pode estar vazio" };
    if (_.isEmpty(cods)) errorsArr = { ...errorsArr, senha: "Código não pode estar vazio" };

    setErrors(errorsArr);
    return errorsArr;
  }

  function updatePlan(selectedPlan: PlanEnum) {
    let valorPlano = initialValue; 
    if (selectedPlan === PlanEnum.plus1) {
      valorPlano = 50.0;
    } else if (selectedPlan === PlanEnum.plus2) {
      valorPlano = 100.0;
    } else if (selectedPlan === PlanEnum.familia) {
      valorPlano = 120.0;
    }

    setPlan(selectedPlan);
    setValorPlano(valorPlano ); 
  }

  return (
    <Container>
      <Text color="preto" size="24" height={50} weight={600}>
        Método de Pagamento
      </Text>
      <Text color="preto" size="20" height={31} weight={600}>
        Cartão de Crédito
      </Text>
      <Inputstyle>
        <Input
          label=""
          type="text"
          placeholder="Nome do titular do cartão"
          value={nometitular}
          className={errors && errors.nometitular ? 'error' : ''}
          onChange={(value: string) => {
            setNometitular(value);
            setErrors({ ...errors, nometitular: '' });
          }}
        />
        {errors && errors.nometitular ? <small>{errors.nometitular}</small> : null}
      </Inputstyle>
      <Inputstyle>
        <Input
          label="Número do cartão"
          placeholder="1234 5678 9101 1121"
          value={ncartao}
          onChange={(value: string) => {
            if (value === '') {
              setNcartao('');
              return;
            }

            const truncatedValue = value.slice(0, 16);
            const onlyPositiveNumbers = Math.abs(parseInt(truncatedValue));
            if (!isNaN(onlyPositiveNumbers)) {
              setNcartao(onlyPositiveNumbers.toString());
            }
          }}
        />
      </Inputstyle>
      <ContentInput>
        <Inputstyle>
          <Input
            label="Validade do cartão"
            value={validade}
            placeholder=" 00/00"
            onChange={(value: string) => {
              if (value === '') {
                setValidade('');
                return;
              }
              const truncatedValue = value.slice(0, 4);
              const onlyPositiveNumbers = Math.abs(parseInt(truncatedValue));
              if (!isNaN(onlyPositiveNumbers)) {
                setValidade(onlyPositiveNumbers.toString());
              }
            }}
          />
        </Inputstyle>
        <Inputstyle>
          <Input
            label="Cód. de segurança"
            placeholder="000"
            value={cods}
            onChange={(value: string) => {
              if (value === '') {
                setCods('');
                return;
              }
              const truncatedValue = value.slice(0, 3);
              const onlyPositiveNumbers = Math.abs(parseInt(truncatedValue));
              if (!isNaN(onlyPositiveNumbers)) {
                setCods(onlyPositiveNumbers.toString());
              }
            }}
          />
        </Inputstyle>
      </ContentInput>
      <DivTypePlan>
        <Text color="preto" size="20" height={30} weight={200}>
          Qual plano você deseja?
        </Text>
      </DivTypePlan>
      <DivRadioPlan>
        <SectionPlan>
          <StyledInput
            name="CheckPlan"
            onChange={() => updatePlan(PlanEnum.plus1)}
            checked={plan === PlanEnum.plus1}
            type="radio"
          />
          <Text color="preto" size="18" height={30} weight={300}>
            Plano Plus 1
          </Text>
        </SectionPlan>
        <SectionPlan>
          <StyledInput
            name="CheckPlan"
            onChange={() => updatePlan(PlanEnum.plus2)}
            checked={plan === PlanEnum.plus2}
            type="radio"
          />
          <Text color="preto" size="18" height={30} weight={300}>
            Plano Plus 2
          </Text>
        </SectionPlan>
        <SectionPlan>
          <StyledInput
            name="CheckPlan"
            onChange={() => updatePlan(PlanEnum.familia)}
            checked={plan === PlanEnum.familia}
            type="radio"
          />
          <Text color="preto" size="18" height={30} weight={300}>
            Plano Família
          </Text>
        </SectionPlan>
      </DivRadioPlan>
    </Container>
  );
};



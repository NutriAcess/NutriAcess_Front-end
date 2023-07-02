import React, { useState, useEffect } from 'react';
import { Text } from '../../../../components/text/text';
import { Container, Line, SectionValue, SectionValuePlan } from './resumepag.styles';
import { PlanEnum } from '../../../../services/authService/authService.types';

export interface ResumePagProps {
  valorPlano: number;
}

const initialValue = 50;

export const ResumePag = ({ valorPlano = initialValue }: ResumePagProps) => {
  const [formattedValorPlano, setFormattedValorPlano] = useState(initialValue);

  useEffect(() => {
    setFormattedValorPlano(valorPlano);
  }, [valorPlano]);

  return (
    <Container>
      <Text color="preto" height={40} size="28" weight={600}>
        Resumo do pagamento
      </Text>
      <SectionValue>
        <SectionValuePlan>
          <Text color="preto" height={10} size="24" weight={400}>
            Valor Plano
          </Text>
          <Text color="preto" height={0} size="24" weight={400}>
            {formattedValorPlano.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </Text>
        </SectionValuePlan>
        <Line />
        <SectionValuePlan>
          <Text color="preto" height={10} size="24" weight={600}>
            Total
          </Text>
          <Text color="vinho" height={0} size="24" weight={600}>
            {formattedValorPlano.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </Text>
        </SectionValuePlan>
      </SectionValue>
    </Container>
  );
};

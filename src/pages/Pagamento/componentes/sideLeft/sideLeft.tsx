import { useState } from 'react'
import _ from "validator"
import { Input } from '../../../../components/input/input'
import { Text } from '../../../../components/text/text'
import { PlanEnum } from '../../../../services/authService/authService.types'
import { StyledInput } from '../../../formulario/components/InputCheck/InputCheck.styles'
import { Container, ContentInput, DivRadioPlan, DivTypePlan, Inputstyle, SectionPlan } from './sideLeft.styles'
export const SideLeft = () => {
    const [plan, setPlan] = useState("");
    const [nometitular, setNometitular] = useState("");
    const [ncartao, setNcartao] = useState("");
    const [validade, setValidade] = useState("");
    const [cods, setCods] = useState("");
    function validateFields() {
        if (
          _.isEmpty(plan) ||
          _.isEmpty(nometitular) ||
          _.isEmpty(ncartao) ||
          _.isEmpty(validade) ||
          _.isEmpty(cods) 
        ) {
          return false;
        }
        if (!_.isAlpha(nometitular)) return false;
        if(!_.isNumeric(ncartao)) return false;
        if(!_.isNumeric(validade)) return false;
        if(!_.isNumeric(cods)) return false;
        return true
    }
    function updatePlan(plan: PlanEnum) {
        setPlan(plan);
        console.log(plan)
        //  setPlan((prev) => ({
        //   ...prev,
        //    plan,
        //  }));
    }
    return (
        <Container>
            <Text color='preto' size='24' height={50} weight={600}>Método de Pagamento</Text>
            <Text color='preto' size='20' height={31} weight={600}>Cartão de Crédito</Text>
            <Inputstyle>
                <Input label=''
                placeholder='Nome do titular do cartão'
                value={nometitular}
                onChange={(value: string) => setNometitular(value)}
                />
            </Inputstyle>
            <Inputstyle>
                <Input label=''
                placeholder='Número do cartão ' 
                value={ncartao} 
                onChange={(value: string) => setNcartao(value)}
                />
            </Inputstyle>
            <ContentInput>
                <Inputstyle>
                    <Input label='' 
                    value={validade}
                    onChange={(value: string) => setValidade(value)} 
                    />
                </Inputstyle>
                <Inputstyle>
                    <Input label=''
                    placeholder='Cód. de segurança' 
                    value={cods} 
                    onChange={(value: string) => setCods(value)}
                    />
                </Inputstyle>
            </ContentInput>
            <DivTypePlan>
                <Text color='preto' size='20' height={30} weight={200}>Qual plano você deseja?</Text>
            </DivTypePlan>           
            <DivRadioPlan>
                <SectionPlan>
                    <StyledInput name="CheckPlan"
                    onChange={() => updatePlan(PlanEnum.plus1)}
                    value={plan || ""}
                    
                    type='radio' />
                        <Text color='preto' size='18' height={30} weight={300}>
                        Plano Plus 1 </Text>
                </SectionPlan>
                <SectionPlan>
                    <StyledInput name="CheckPlan"
                    onChange={() => updatePlan(PlanEnum.plus2)}
                    value={plan || ""}
                    
                    type="radio" />
                        <Text color='preto' size='18' height={30} weight={300}>
                        Plano Plus 2 </Text>
                </SectionPlan>
                <SectionPlan>
                    <StyledInput name="CheckPlan"
                    onChange={() => updatePlan(PlanEnum.familia)}
                    value={plan || ""}
                    
                    type='radio' />
                        <Text color='preto' size='18' height={30} weight={300}>
                        Plano Família
                        </Text>
                </SectionPlan>
            </DivRadioPlan>
        </Container>
    )
}

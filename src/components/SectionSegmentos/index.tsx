import {Container, Content} from './style'
import {CardSeg} from './CardSeg/index'

import imgEcommerce from '../../assets/logo-ecommerce.svg'
import imgFintechs from '../../assets/logo-fintechs.svg'
import imgModbili from '../../assets/logo-mobilidade.svg'
import imgEntreteri from '../../assets/logo-entreterimento.svg'
import imgDireito from '../../assets/logo-direito.svg'
import imgHosp from '../../assets/logo-hospitalidade.svg'

export function SectionSegmentos(){
    return(
        <Container>
            <h1>Segmentos</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
            </p>
            <Content>
                <CardSeg img={imgEcommerce} title='E-commerce' desc ='We assist physical and digital retailers, wholesalers, 
                                                                and suppliers to automate commercial operations and 
                                                                business workflows.With e-commerce solutions, ERPS 
                                                                and improvised customer services.'
                />
                <CardSeg img={imgFintechs} title='FinTechs' desc='We assist physical and digital retailers, wholesalers, 
                                                                and suppliers to automate commercial operations and 
                                                                business workflows.With e-commerce solutions, ERPS 
                                                                and improvised customer services.'
                />
                <CardSeg img={imgModbili} title='Mobilidade' desc='We assist physical and digital retailers, wholesalers, 
                                                                and suppliers to automate commercial operations and 
                                                                business workflows.With e-commerce solutions, ERPS 
                                                                and improvised customer services.'
                />
                <CardSeg img={imgEntreteri} title='Entreterimento' desc='We assist physical and digital retailers, wholesalers, 
                                                                and suppliers to automate commercial operations and 
                                                                business workflows.With e-commerce solutions, ERPS 
                                                                and improvised customer services.'
                />
                <CardSeg img={imgDireito} title='Direito' desc='We assist physical and digital retailers, wholesalers, 
                                                                and suppliers to automate commercial operations and 
                                                                business workflows.With e-commerce solutions, ERPS 
                                                                and improvised customer services.'
                />
                <CardSeg img={imgHosp} title='Hospitalidade' desc='We assist physical and digital retailers, wholesalers, 
                                                                and suppliers to automate commercial operations and 
                                                                business workflows.With e-commerce solutions, ERPS 
                                                                and improvised customer services.'
                />
            </Content>
        </Container>
    )
}
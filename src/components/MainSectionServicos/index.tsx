import { ContainerMain, Main} from "./style";
import {Card} from '../Card/index'

export function MainSectionServicos(){
    return(
        <Main>
            <h1>Serviços</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's standard   
            </p>
            <ContainerMain>
                <Card Number='01' Title='UX Design' Text='o	Web Development o SaaS Platform Development
                                                          o	Full Stack Development'
                                                    Text2='We create innovative solutions to solve customer 
                                                          problems and giving you more control over product.'
                />

                <Card Number='02' Title='Front-end' Text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                                    Text2="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                />

                <Card Number='03' Title='Test' Text='Designing success through creative web design for your business to be the best.'
                                               Text2='Improving customer engagement with enhanced user experience.'
                />

                <Card Number='04' Title='Delivery' Text='Develop your MVP with our experts who help create a solution
                                                         that solves customer problems.'
                                                   Text2='We fill in the technology gaps for you.'
                />
            </ContainerMain>
        </Main>
    )
}
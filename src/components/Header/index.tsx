import imgLogo from '../../assets/logo.png'

import {Container} from '../Header/style';
import {Header} from '../Header/style';

export function Head(){
    return(
        <>
            <Container>
                <Header>
                    <div>
                        <img src={imgLogo}></img>
                    </div>
                    <nav>
                        <ul>
                            <li>Início</li>
                            <li>Localização</li>
                            <li>Serviços</li>
                            <li>Segmentos</li>
                        </ul>
                    </nav>
                </Header>
            </Container>
        </>
    )
}
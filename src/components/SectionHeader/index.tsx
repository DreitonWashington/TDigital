import imgHeader from '../../assets/imgAlvo.svg';
import {Section} from '../SectionHeader/style'

export function SectionHeader(){
    return(
        <Section>
            <div>
                <img src={imgHeader} alt="Imagem de um alvo"/>
            </div>

            <div>
                <h1>Transformação Digital</h1>
                <p>Lorem Ipsum is simply dummy
                   text of the printing and typesetting
                   industry. Lorem Ipsum has been the
                   industry's standard dummy text ever
                   since the 1500s.
                </p>
                <button>Ativar Notificações</button>
            </div>
        </Section>
    )
}
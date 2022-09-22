import {CardBody} from './style'

interface Card{
    img: string;
    title: string;
    desc: string;
}

export function CardSeg(prop:Card){

    return(
        <CardBody>
            <div>
                <img src={prop.img}/>
            </div>
            <h3>{prop.title}</h3>
            <p>{prop.desc}</p>
        </CardBody>
    )
}
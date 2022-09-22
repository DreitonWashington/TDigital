import {CardBody} from './style';

interface PropCard{
    Number: string;
    Title: string;
    Text: string;
    Text2: string;
}

export function Card(props:PropCard){
    return(
        <CardBody>
            <div>{props.Number}</div>
            <h2>{props.Title}</h2>
            <p>{props.Text}</p>
            <p>{props.Text2}</p>
        </CardBody>
    )
}
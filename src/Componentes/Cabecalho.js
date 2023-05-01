import { Alert } from "react-bootstrap";

export default function Cabecalho(props){
    return(

        <div>
            <Alert  className='text-center mb-0'>
                <h2>
                    {props.texto}
                </h2>

            </Alert>
        </div>
    );
}
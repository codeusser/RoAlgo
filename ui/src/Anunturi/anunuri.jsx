import React from 'react'
import './anunturi.scss'
import { useNavigate } from 'react-router-dom';

function CardA(props){
    const navigate = useNavigate();
    function traverse(){
        navigate(props.url)
    }
    return (
        <>
            <div className='body' onClick={traverse}>
                <h2>{props.title}</h2>
                <p>{props.date}</p>
            </div>
        </>
    )
}

export default function Anunturi(){
    const [Title, setTitle] = React.useState("Anunturi");
    const [OnStire, setStire] = React.useState(false);
    const [anunt, setAnunt] = React.useState();

    const Page1 = (event, param) => {
        console.log(event);
        console.log(param);
      };
    
    console.log(OnStire) 
    return (
        <>
            <div className='center'>
                <h1> <u>{Title}</u> </h1>
            </div>
            {OnStire==false && 
                <div className='carduri'>
                    <CardA title="RoAlgo back to school" date="17/09/2022" url="/post" ></CardA>

                </div>
            }
            {OnStire==true && 
                <>
                    <h3>{anunt}</h3>
                </>
            }
        </>
    )
}
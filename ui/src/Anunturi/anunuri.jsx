import React from 'react'
import './anunturi.scss'



function CardA(props){
    return (
        <>
            <div className='body'>
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
                    <CardA title="RoAlgo back to school" date="17/09/2022" ></CardA>

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
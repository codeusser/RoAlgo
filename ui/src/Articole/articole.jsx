import React from 'react'
import './articole.scss'
import { useNavigate } from 'react-router-dom';

function CardA(props){
    const navigate = useNavigate();
    function traverse(){
        window.location.replace(props.url);
    }
    return (
        <>
            <div className='body' onClick={traverse}>
                <h2>{props.title}</h2>
                <p>{props.author}</p>
            </div>
        </>
    )
}


export default function Articole(){
    const articolesIncepatori = [
        {name: 'Tablouri unidimensionale', author: 'Marius Nicoli', url: 'https://cppi.sync.ro/materia/parcurgerea_vectorilor.html'},
        {name: 'Vectori De frecventa', author: 'Marius Nicoli / Mihaela Grindeanu', url: 'https://cppi.sync.ro/materia/probleme_standard.html'},
       // {name: 'Arbori de intervale', author: 'Marius Nicoli', url: '/home'},
    ];
    const articolesMedii = [
        {name: 'Range Minimum Query', author: 'Marius Nicoli', url: 'https://cppi.sync.ro/materia/rmq_range_minimum_query.html'},
        {name: 'Stiva. Aplicatii', author: 'Emanuel Dicu', url: 'https://cppi.sync.ro/materia/stive.html'},
       // {name: 'Arbori de intervale', author: 'Marius Nicoli', url: '/home'},
    ];
    const articolesAvansat = [
        {name: 'Arbori indexati binar (AIB)', author: 'Marius Nicoli', url: 'https://cppi.sync.ro/materia/arbori_indexati_binar.html'},
        {name: 'Arbori de intervale (AINT)', author: 'Marius Nicoli / Emanuel Dicu', url: 'https://cppi.sync.ro/materia/arbori_de_intervale.html'},
       // {name: 'Arbori de intervale', author: 'Marius Nicoli', url: '/home'},
    ];
    return (
        <>
             <div className='center'>
                <h1> <u>Articole Stiintifice </u> </h1>
            </div>
            <div className='CenterMobile'>
                <h1>Nivel: incepatori</h1>
                <div className='carduri'>
                    {articolesIncepatori.map((articol) => (
                        <CardA url = {articol.url} author= {articol.author} title={articol.name}></CardA>
                        ))
                    }
                </div>
                <h1>Nivel: intermediar</h1>
                <div className='carduri'>
                    {articolesMedii.map((articol) => (
                        <CardA url = {articol.url} author= {articol.author} title={articol.name}></CardA>
                        ))
                    }
                </div>
                <h1>Nivel: avansat</h1>
                <div className='carduri'>
                    {articolesAvansat.map((articol) => (
                        <CardA url = {articol.url} author= {articol.author} title={articol.name}></CardA>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
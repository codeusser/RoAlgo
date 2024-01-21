import { useNavigate } from 'react-router-dom'
import './home.scss'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import ShowNice from '../ShowNice/ShowNice';

function CardProjects(props){
    return (
        <>
            <div className='body'>
                <h1>{props.comp}</h1>
                <p>{props.description}</p>
            </div>
        </>
    )
}


export default function Home(){
    const navigate = useNavigate();
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
      };
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    function becomeMember(){
    //    window.location.replace('https://codefrontend.com');
        
       navigate('/member');
    }
    function goToOJI(){
        window.location.replace('https://kilonova.ro/problem_lists/452');
    }
    return (
        <>
            <div className='Homepage'>
                <div className='P1'>
                    <p>Cine suntem?</p>
                    <h3>RoAlgo este cea mai mare comunitate românească de algoritmică, cu aproape 2000 de membri pe server. Printre altele, ne propunem să facem informatica mai distractivă, mai plăcută și să învățați de la cei mai buni și nu numai cât mai multe lucruri, atât legate de algoritmică și nu numai. Aici organizăm concursuri, facem proiecte frumoase împreună și devenim tot mai buni. </h3>
                    <button className='become' onClick={becomeMember}> Devino membru </button>
                </div>
                <div className='P2'>
                    <p>Proiectele noastre</p>
                    <div className='prs'>
                        <CardProjects comp="OJI" description="am incarcat toate problemele de la olimpiada judeteana de informatica romana"></CardProjects>    
                        <CardProjects comp="ONI" description="am incarcat toate problemele de la olimpiada nationala de informatica romana"></CardProjects>        
                        <CardProjects comp="Baraj Juniori" description="am incarcat toate problemele de la barajul de selectie pentru lotul romaniei de juniori"></CardProjects>        
                        <CardProjects comp="Baraj Seniori" description="am incarcat toate problemele de la barajul de selectie pentru lotul romaniei de seniori"></CardProjects>        
                    </div>
                    <div className='prs1'>
                        <CardProjects comp="Lot Juniori" description="am incarcat toate problemele de la Lotul de Juniori al romaniei"></CardProjects>    
                        <CardProjects comp="Lot Seniori" description="am incarcat toate problemele de la Lotul de Seniori al romaniei"></CardProjects>        
                        <CardProjects comp="RoAlgo Contests" description="Organizarea a 8 concursuri marca RoAlgo in care elevii pasionati pot concura, dar si distra rezolvand un set de probleme de algoritmica"></CardProjects>        
                    </div>
                </div>
                <ShowNice></ShowNice>
            </div>
        </>
    )
}
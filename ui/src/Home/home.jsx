import { useNavigate } from 'react-router-dom'
import './home.scss'


export default function Home(){
    const navigate = useNavigate();
    function becomeMember(){
    //    window.location.replace('https://codefrontend.com');
       navigate('/member');
    }
    return (
        <>
            <div classname="Center">
                <div className='Hcontainer'> 
                    <img src = 'homePage.jpg' className="homeLogo"/>
                    <div className='leftside'>
                        <h4>RoAlgo este un proiect care a fost demarat de Stefan Dăscalescu cu scopul de a uni comunitatea de programare competitivă din România, în același timp conectarea studenților pasionati de aceasi disciplina.

                        <br/>
                        <br/>
                        Serverul nostru are în prezent peste 1000 de membri din toată România și, pe lângă activități precum postarea problemelor și ajutarea oamenilor să devină mai buni la programare împreună, organizăm și concursuri și lucrăm în proiecte care includ următoarele:
                        <br/>
                        <br/>
                        Încărcarea regulată a problemelor noi și restaurarea datelor de la vechea Olimpiada Română și probleme de concurs pe platforma noastră parteneră, <a href='https://kilonova.ro/ '>https://kilonova.ro/ </a>.Am încărcat până acum toate problemele date începând cu anul 2000 la olimpiadele județene și naționale din România, plus multe alte probleme.
                        <br/>
                        <br/>
                        Organizam periodic concursuri cu probleme create de oamenii de pe serverul nostru, concursuri care sunt coordonate de membri seniori ai serverului.
                        <br/>
                        <br/>
                        De asemenea, colaborăm cu alte inițiative din România pentru a extinde acoperirea comunității noastre către fiecare elev interesat, inclusiv concursuri internaționale, activități de voluntariat pentru elevii școlii, activități care îi pregătesc să fie membri valoroși ai comunității noastre și potențiali viitori tutori care lucrează împreună cu noi. direct.
                        
                        
                        </h4>
                        <button className='become' onClick={becomeMember}> Devino membru </button>
                    </div>
                </div>
            </div>
        </>
    )
}
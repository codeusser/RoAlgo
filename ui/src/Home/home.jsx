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
            <div className='Hcontainer'> 
                <img src = 'homePage.jpg' className="homeLogo"/>
                <div className='leftside'>
                    <h4>RoAlgo is a project that has been started by Stefan Dascalescu with the goal of uniting the Romanian competitive programming community, while also connecting students with like-minded friends.

                    <br/>
                    <br/>
                    Our server currently has over 1000 members from across Romania, and in addition to activities such as posting problems and helping people become better at programming together, we also organize contests and work in projects including the following:
                    <br/>
                    <br/>
                    Regularly uploading new problems and restoring data from old Romanian Olympiad and contests problems to our partner platform, <a href='https://kilonova.ro/ '>https://kilonova.ro/ </a>. We uploaded so far all the problems given since 2000 at Romania's County and National Olympiads, plus many more problems.
                    <br/>
                    <br/>
                    We organize regular contests with problems created by the people from our server, contests which are coordinated by senior members of the server.
                    <br/>
                    <br/>
                    We also partner with other initiatives across Romania to broaden the reach of our community to every interested student, including international contests, volunteering activities for school students, activities which prepare them to be valuable members of our community and potential future tutors who work together with us directly.
                    
                    
                    </h4>
                    <button className='become' onClick={becomeMember}> Devino membru </button>
                </div>
            </div>
        </>
    )
}
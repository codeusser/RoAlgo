import './header.scss'
import { useNavigate } from 'react-router-dom';
export default function Header(){
    const navigate = useNavigate();
    function GoToHome(){
        navigate('/');
    }
    function GoToAnunturi(){
        navigate('/anunturi');
    }
    function GoToMember(){
        navigate('/member');
    }
    return (
        <>
            <div className='container'>
                <img src='RoAlgoLogo.png' className='logo'></img>
                <h3 onClick={GoToHome}>Acasa</h3>
                <h3 onClick={GoToAnunturi}>Anunturi</h3>
                <h3 onClick={GoToMember}>Devino membru</h3>
            </div>
        </>
    )
}
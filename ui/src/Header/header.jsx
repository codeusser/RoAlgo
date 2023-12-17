import './header.scss'
import { useNavigate } from 'react-router-dom';
import React from 'react'
export default function Header(){
    const navigate = useNavigate();
    const [Menu, setMenu] = React.useState("Desktop");
    function GoToHome(){
        if(Menu == "Mobile"){
            setMenu("Desktop");
        }
        navigate('/');
    }
    function GoToAnunturi(){
        if(Menu == "Mobile"){
            setMenu("Desktop");
        }
        navigate('/anunturi');
    }
    function GoToMember(){
        if(Menu == "Mobile"){
            setMenu("Desktop");
        }
        navigate('/member');
    }
    function GoToArticle(){
        if(Menu == "Mobile"){
            setMenu("Desktop");
        }
        navigate('/article');
    }
    return (
        <>
            <div className='container'>

                <img src='RoAlgoLogo.png' onClick={GoToHome} className='logo'></img>
                <div className='menu' onClick={() => {
                    if(Menu == "Desktop"){
                        setMenu("Mobile");
                    }else if(Menu == "Mobile"){
                        setMenu("Desktop");
                    }
                }}>
                    <span className='Red'></span>
                    <span className='Yellow'></span>
                    <span className='Blue'></span>

                </div>
                <div className={Menu}>
                    <h3 onClick={GoToHome}>Acasa</h3>
                    <h3 onClick={GoToAnunturi}>Anunturi</h3>
                    <h3 onClick={GoToArticle}>Articole</h3>
                    <h3 className="some" onClick={GoToMember}>Devino membru</h3>
                </div>
            </div>
        </>
    )
}
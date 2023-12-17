import React, { useEffect, useState } from 'react';
import './login.scss';
import { sha256 } from 'js-sha256';
import { useCookies } from 'react-cookie';
import RoAlgoError from '../RoAlgoError/roAlgoError';

export default function Login(props) {
    const [cookies, setCookie, removeCookie] = useCookies(['session']);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [logged, setLogged] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState("");
    const [gotError, setGotError] = useState(false);
    const [data, setData] = React.useState(null);
    
    React.useEffect(() => {
        fetch("/api/ping")
        .then((res) => {
           setData(res.status)
        })
    }, []);
    console.log("data is" + data);

    function send_request(e){
        e.preventDefault()
        let hash = sha256(password)
        /// fetch /api/admin/login
        fetch("/api/admin/login?username=" + username + "&password=" + hash)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if(data.succes){
                setCookie("session", data.session, { path: "/" });
                window.location.reload(false);
            }else{
                setGotError(true);
                setError(data.message);
            }
        });
    }

    function check_login(){
        let id = cookies['session'];
        if(id == undefined){
            setLogged(false)
            setLoaded(true);
        }else{
            fetch("/api/admin/get_username?id=" + id)
            .then((res) => res.json())
            .then((data) => {
                if(data.succes != undefined){
                    if(data.succes == false){
                        setLogged(false);
                    }else{
                        setUsername(data.username);
                        setLogged(true);
                    }
                    setLoaded(true);
                }
            })
        }
    }

    function logout(){
        removeCookie('session');
        setLogged(false)
    }

    useEffect(() => {
        check_login()
    }, []);

    return (
        <>
            {data != 200 && <RoAlgoError errorMessage={"cannot connect to the database"}></RoAlgoError>}
            {(loaded == false) && 
                <div className='container11'>
                    <div className='center11'>
                        <h1>Loading...</h1>
                    </div>
                </div>
            }
            {(loaded == true) &&
                <div>
                    
                    {(logged == true) &&
                        <div className='container11'>
                            <div className='center11'>
                                <p className='loading_text'>Bine ai venit, {username} !</p>
                                <button type='submit' style={{width: '50%', marginTop: '10px'}} onClick={logout}>log out</button>
                            </div>
                        </div>
                    }
                    {(gotError) === true && <RoAlgoError errorMessage={error}/>}
                    {(logged) == false &&

                        <div className='container11'>
                            <div className='center11'>
                                <form>
                                    <h1>Admin Login</h1>
                                    <div className="txt_field">
                                        <input type="text" id="fname" name="fname" required onChange={(e) => 
                                            setUsername(e.target.value)}/>
                                        <span></span>
                                        <label for="fname">username:</label>
                                    </div>
                                    <div className="txt_field2">
                                        <input type="password" id="lname" name="lname" required onChange={(e) => 
                                            setPassword(e.target.value)}/> 
                                        <span></span>
                                        <label for="lname">password:</label>
                                    </div>
                                    <button type='submit' onClick={send_request}>submit</button>
                                </form>
                            </div>
                        </div>
                    }
                </div>
            }
        </>
    )
}
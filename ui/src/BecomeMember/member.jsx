import './member.scss'

export default function Member(){

    function redirectToDiscord(){
        window.location.replace('https://discord.gg/E82gRbUBCJ');
    }

    return (
        <>
            <div className="Center">
            <div className='Membercontainer'>
                <div className='room'>
                    <img src="discord.png" className = 'discordLogo'/>
                    <div className='rightSide'>
                        <h2>Intra pe serverul nostru de discord</h2>
                        <button onClick = {redirectToDiscord} className='ButtonMember'>Devino membru</button>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
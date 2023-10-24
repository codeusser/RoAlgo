import React from 'react'
import ReactDom from 'react-dom'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'

import './post.scss'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you

const content = `

<center>

# RoAlgo League
</center>

<center>

####  -- sezonul 2023-24 --
</center>



### Concursurile RoAlgo ce vor avea loc începând din octombrie 2023 și până în iunie 2024 vor conta pe lângă obiectivele principale (încurajarea participării la concursuri și lucratul de probleme, precum și propusul problemelor pentru aceste concursuri) și la un clasament cumulat ce va ține cont de rezultatele participanților la rundele ce vor avea loc de-a lungul acestei perioade.

#### Concursurile vor fi de 3 categorii, precizate în prealabil pe serverul RoAlgo în anunțul de dinaintea rundei. Concursurile vor avea toate 3-5 ore și vor conține 5-7 probleme, aceste informații fiind transmise înaintea începerii fiecărei runde. 
> Se va putea obține pentru fiecare problemă un punctaj între 0 și 100 de puncte, punctele fiind împărțite pe subtaskuri, ca la olimpiadă. 
  Pentru a obține punctele pe un subtask, toate testele din acea grupă trebuie rezolvate corect.<br/><br/>
  Clasamentul final după fiecare rundă va fi stabilit de ordinea descrescătoare a punctajelor totale ale concurenților, concurenții plasați la egalitate fiind toți plasați pe același loc, obținând punctajul corespunzător acelui loc (dacă sunt 3 concurenți pe locul 4, vor fi punctați toți ca și cum ar fi fost plasați pe 4). 
  În funcție de dificultatea percepută ca urmare a pregătirii și testării problemelor, rundele vor fi împărțite în mai multe categorii, cu sisteme diferite de punctare, după cum urmează: 
  <br/><br/>
  Runde de dificultate div. 1 - rundele cele mai grele, primii 30 de participanți clasați vor obține puncte, sistemul fiind acesta - locul din clasament fiind corespunzator cu punctajul obținut (locul 1 - 100p, locul 2 - 80p etc. până la locul 30 care obține 1 punct).
  <br/><br/>
Runde de dificultate div. 2 - rundele de o dificultate medie, primii 15 participanți clasați vor obține puncte, sistemul fiind acesta - locul din clasament fiind corespunzător cu punctajul obținut (locul 1 - 50p, locul 2 - 40p etc. până la locul 15 care obține 1 punct).
  <br/><br/>
Runde de dificultate div. 3 - rundele de o dificultate mică, primii 10 participanți clasați vor obține puncte, sistemul fiind acesta - locul din clasament fiind corespunzător cu punctajul obținut (locul 1 - 25p, locul 2 - 20p etc. până la locul 10 - 1 punct).
    <br/><br/>

	
Propunătorii și testerii de probleme vor primi puncte după cum urmează
Autorii problemelor vor primi 1/3 din punctajul alocat câștigătorului rundei respective per problemă propusă, limitat la punctajul câștigătorului și rotunjit în sus. De exemplu, autorul a două probleme de la un concurs div. 2 va primi 34 de puncte (16.66 * 2).
Testerii problemelor vor primi cel mult 1/3 din punctajul alocat câștigătorului rundei respective, în funcție de implicarea lor și de gradul în care au contribuit la îmbunătățirea rundei, dar nu mai puțin de min(5, 1/10) din punctajul câștigătorului.
De asemenea, pe lângă aceste scoruri, se mai pot obține puncte după cum urmează:
Obținerea unui scor nenul - 1 punct
Obținerea punctajului maxim la o problemă - 1 punct/problemă
Obținerea primului punctaj maxim la o problemă - 2 puncte
Pentru a încuraja competiția în rândul juniorilor, va exista și un clasament separat pentru juniori, după cum urmează

### La finalul fiecărei runde, primii 10 juniori clasați vor primi puncte astfel. Juniorii sunt participanti care sunt cel mult in clasa a VIII-a



De asemenea, punctajele corespunzătoare obținerii unui punctaj nenul sau de 100 pe problemă se aplică și aici

Participarea la concursuri este individuală – nu se acceptă lucrul în echipă, schimbul de soluții sau orice altă formă de plagiat ce poate afecta rezultatul concurentului.

La prima abatere, cei în culpă vor fi descalificați din concurs
La a doua abatere, cei în culpă vor fi descalificați din campionat

### La finalul seriilor de concursuri RoAlgo, următorii participanți vor primi premii constând în tricouri marca RoAlgo, în limita a 1 tricou / persoană. Pentru a obține aceste premii, participanții trebuie să completeze un Google form în care să menționeze userul lor de kilonova și userul lor de discord/altă metodă de contact. În caz contrar, premiile nu se vor acorda.

>  a. Fiecare propunător de probleme (premiul se acordă după desfășurarea rundei)<br/><br/>
   b. Primii 3 clasați de la fiecare rundă (premiul se acordă după desfășurarea rundei)<br/><br/>
   c. Primii 15 clasați la finalul rundelor<br/><br/>
   d. Primii 5 juniori la finalul rundelor care nu fac parte din top 15<br/><br/>


### În funcție de cum va merge proiectul, poate exista și o rundă finală, cu desfășurare online sau fizică (TBD) la care vor putea participa următoarele persoane
> a. Câștigătorii rundelor<br/><br/>
  b. Primii 8 din clasamentul cumulat care nu au câștigat vreo rund<br/><br/>
  c. Primii 4 juniori care nu se încadrează la categoria a sau b<br/><br/>
  d. Primele 2 fete care nu se încadrează la categoriile a, b sau c<br/><br/>



`

export default function Post(){
    return (
        <div className='wrapper'>
            <ReactMarkdown
                children={content}
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex, rehypeRaw]}
            />
        </div>
    )
}
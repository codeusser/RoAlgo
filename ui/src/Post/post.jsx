import React from 'react'
import ReactDom from 'react-dom'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'

import './post.scss'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you

const content = `The lift coefficient ($C_L$) is a dimensionless coefficient.

<center>

$$ 2x^2 + y^{2^2} = 1 $$

</center>

# Posuitque ausim rapidi instructa gutture et vulnera

## Cetera ira ferrove inpedientibus omnis triformis

Lorem markdownum *frondescere amicitiae* lux ceperat a accipit montes
quadripedes Astreus. Fidumque respiceret manibus visurus, cum etiam parva functa
viri pretium sanguine, et Achivi, habeat. Harum vellet.

## Erant gentis

Haemoniam sed queri interque, Phoenix **Styga** me Pergama adversa animosque
bracchia succincta iuro fecit; probant ad! Viribus nubibus primus: quam deorum,
placido formam promptu quodcumque freta potuisse saxa illa.

## Ille rudis silvas coloni

Diu artes iam pressus, Peleus mediis regionibus nec ubi teque? Quae Phoebo
fremida palmis, erat est vincula e inpete sensurum habentia partior laedi, et
*gaudet* procul. Non cupit, ense una graves caedis; tum inpius lunae navalibus
cyclopum cui cura quae manus.

> Velamina in recenti ignotis [sacra quaesita](http://manus.io/percussit) velit
> matre saxificos trepidant in et non cubitoque intellecta. Sua noctes collocat
> pondere dum, [tollere est graves](http://livor.net/scireulla) Fames
> contempsere nomen. Furit regia ultime, pro vidit si contra quaterque animam
> Dardanio ira ingens fluitantia **funis in** agmina. Motu profundi caede
> tellusque vocabitur et habet uterque molire, eadem molli **imagine morer**
> amplius removit. Nomen sed quid semper cadunt.

## Barbara esse

Versa o inpune tempus! Mergor cava cupiens viribus, tota, blandis, nam idem
gravitate saniemque. **Quodque** male congestaque auditurum, enim funera, cum
Perrhaebum Diana intempestiva erat in quae. Undis concutit certa [contulerant
nova](http://www.arcusudaeque.org/incautus-sollicitare) solio hippomene damno
novo agnovit progenies figuras plaustra illa, per? Nulla bis; irata fetus
falleret remittit carpe lanugine scelerique regem flammis.

Ferarum diruerent; dies lacrimans sustinet superos damnatque secutum aequor!
Audenti et crimine litore [qui](http://eratcornum.org/) exeat spatium oblitae
verborum aetatis munere nivis qui et. Nec saltem medium micant; ille rami multos
sit utque passim Atlantis ferox teneris?

Testantur postquam sepulcro, mensuraque dabat, remittis fulgore. Piae crine et a
arbore qua, baculisque quos ut superatus desierat Surrentino, publica veris
cupit quotiensque sonum. Paternam seducunt iunctissima vocabat **frondes**
cetera.
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
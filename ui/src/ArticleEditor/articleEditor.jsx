import './articleEditor.scss'
import React from 'react'
import ReactDom, { flushSync } from 'react-dom'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'

import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you

/*
document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('textarea');
    const lineNumbersEle = document.getElementById('line-numbers');

    const textareaStyles = window.getComputedStyle(textarea);
    [
        'fontFamily',
        'fontSize',
        'fontWeight',
        'letterSpacing',
        'lineHeight',
        'padding',
    ].forEach((property) => {
        lineNumbersEle.style[property] = textareaStyles[property];
    });

    const parseValue = (v) => v.endsWith('px') ? parseInt(v.slice(0, -2), 10) : 0;

    const font = `${textareaStyles.fontSize} ${textareaStyles.fontFamily}`;
    const paddingLeft = parseValue(textareaStyles.paddingLeft);
    const paddingRight = parseValue(textareaStyles.paddingRight);

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = font;

    const calculateNumLines = (str) => {
        const textareaWidth = textarea.getBoundingClientRect().width - paddingLeft - paddingRight;
        const words = str.split(' ');
        let lineCount = 0;
        let currentLine = '';
        for (let i = 0; i < words.length; i++) {
            const wordWidth = context.measureText(words[i] + ' ').width;
            const lineWidth = context.measureText(currentLine).width;

            if (lineWidth + wordWidth > textareaWidth) {
                lineCount++;
                currentLine = words[i] + ' ';
            } else {
                currentLine += words[i] + ' ';
            }
        }

        if (currentLine.trim() !== '') {
            lineCount++;
        }

        return lineCount;
    };

    const calculateLineNumbers = () => {
        const lines = textarea.value.split('\n');
        const numLines = lines.map((line) => calculateNumLines(line));

        let lineNumbers = [];
        let i = 1;
        while (numLines.length > 0) {
            const numLinesOfSentence = numLines.shift();
            lineNumbers.push(i);
            if (numLinesOfSentence > 1) {
                Array(numLinesOfSentence - 1)
                    .fill('')
                    .forEach((_) => lineNumbers.push(''));
            }
            i++;
        }

        return lineNumbers;
    };

    const displayLineNumbers = () => {
        const lineNumbers = calculateLineNumbers();
        lineNumbersEle.innerHTML = Array.from({
            length: lineNumbers.length
        }, (_, i) => `<div>${lineNumbers[i] || '&nbsp;'}</div>`).join('');
    };

    textarea.addEventListener('input', () => {
        displayLineNumbers();
    });

    displayLineNumbers();

    const ro = new ResizeObserver(() => {
        const rect = textarea.getBoundingClientRect();
        lineNumbersEle.style.height = `${rect.height}px`;
        displayLineNumbers();
    });
    ro.observe(textarea);

    textarea.addEventListener('scroll', () => {
        lineNumbersEle.scrollTop = textarea.scrollTop;
    });
});

*/

export default function ArticleEditor(args){
    const FILENAME = 'filename.md'
    const [content, setContent] = React.useState();
    const [fullscreen, setFullScreen] = React.useState(0);


    const UpdateContent = event => {
        setContent(event.target.value);
        console.log(event.target.value);
    }
    function updateView(){
        var aux = fullscreen;
        if(fullscreen == 1)aux = 0;
        else if(fullscreen == 0)aux = 1;
        setFullScreen(aux);
    }

    return (
        <>
            <img className='res' src='./resize.png' onClick={updateView}></img>
            <div className='content'>
                {fullscreen == 0 && 
                <div>
                    <h4 ><u>{FILENAME}</u></h4>
                    <div className='Edit'>
                        <div id="line-numbers" class="container__lines"></div>
                        <textarea className='Editor' id="textarea" onChange={UpdateContent}></textarea>
                    
                    </div>
                </div>
                    
                }
                {fullscreen == 0 &&
                <div className='line'>

                </div>
                }
                <div className='prew'>
                  {fullscreen == 0 && <h4> <u> Article preview </u> </h4> }
                    <div className='preview'
                        style={
                            { width: fullscreen != 0 ? '90vw': '40vw'}
                        }
                    >
                            <ReactMarkdown
                                children={content}
                                remarkPlugins={[remarkMath]}
                                rehypePlugins={[rehypeKatex, rehypeRaw]}
                            />
                    </div>
                </div>
            </div>
        </>
    )
}
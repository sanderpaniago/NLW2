import React from 'react'

import './style.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
    return(
        <article className='teacher-item'>
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/52095222?s=460&u=7d928a218eef47d985ffad9dcf94531cdb02b527&v=4" alt="Sander Paniago"/>
                        <div>
                            <strong>Sander Paniago</strong>
                            <span>Quimica</span>
                        </div>
                    </header>
                    <p>
                        Entusiasta das melhores tecnologias de química avançada.
                        <br/><br/>
                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
                    </p>

                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type='button'>
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem
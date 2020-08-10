import React, {useState, FormEvent} from 'react'
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'

import './style.css'

import warningImg from '../../assets/images/icons/warning.svg'
import Select from '../../components/Select'
import api from '../../services/api'

function TeacherForm() {
    const history = useHistory()

    const [name, setName] = useState('')
    const [avatar, setavAtar] = useState('')
    const [whatsapp, setWhatsApp] = useState('')
    const [bio, setBio] = useState('')

    const [subject, setSubject] = useState('')
    const [cost, setCost] = useState('')

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ])

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }

        ])
        scheduleItems.push()
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(()=>{
            alert('Cadastro realizado com sucesso!')

            history.push('/')
        }).catch(()=>{
            alert('Erro no cadastro!')
        })
    }

    function setScheduleValue(possition: number, field: string, value: string) {
        const updateScheduleItem = scheduleItems.map((scheduleItem, index) => {
            if (index === possition) {
                return { ...scheduleItem, [field]: value }
            }

            return scheduleItem
        })

        setScheduleItems(updateScheduleItem)
    }



    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title='Que incrível que você quer dar aulas.' 
                description="o primeiro passo é preencher esse formulario de incrição"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus Dados</legend>

                        <Input name='name' label='Nome Completo' value={name}
                        onChange={(e) => { setName(e.target.value)}}/>
                        <Input name='avatar' label='Avatar' value={avatar}
                        onChange={(e) => { setavAtar(e.target.value)}}/>
                        <Input name='whatsapp' label='WhatsApp' value={whatsapp}
                        onChange={(e) => { setWhatsApp(e.target.value)}}/>
                        <Textarea name='bio' label='Biografia' value={bio}
                        onChange={(e) => { setBio(e.target.value)}}/>

                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <Select 
                            name='subject' 
                            label='Matéria' 
                            value={subject}
                            onChange={(e)=> { setSubject(e.target.value)}}
                            options={[
                                { value: 'Artes', label: 'Artes'},
                                { value: 'Biologia', label: 'Biologia'},
                                { value: 'Ciencias', label: 'Ciencias'},
                                { value: 'Educação Fisica', label: 'Educação Fisica'},
                                { value: 'Fisica', label: 'Fisica'},
                                { value: 'História', label: 'História'},
                                { value: 'Matemática', label: 'Matemática'}
                            ]}
                        />
                        <Input name='cost' label='Custo por hora por aula'  value={cost}
                            onChange={(e)=> { setCost(e.target.value)}}/>

                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type='button' onClick={addNewScheduleItem}>
                                + Novo horário
                            </button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        name='week_day' 
                                        label='Dia da semana' 
                                        value={scheduleItem.week_day}
                                        onChange={ e => setScheduleValue(index, 'week_day', e.target.value)}
                                        options={[
                                            { value: '0', label: 'Domingo'},
                                            { value: '1', label: 'Segunda-feira'},
                                            { value: '2', label: 'Terça-feira'},
                                            { value: '3', label: 'Quarta-feira'},
                                            { value: '4', label: 'Quinta-feira'},
                                            { value: '5', label: 'Sexta-feira'},
                                            { value: '6', label: 'Sabado'}
                                        ]}
                                    />
                                    <Input name='from' label='das' type='time' value={scheduleItem.from} onChange={e => setScheduleValue(index, "from", e.target.value)} />
                                    <Input name='to' label='Até' type='time' value={scheduleItem.to} onChange={e => setScheduleValue(index, "to", e.target.value)}/>
                                </div>
                            )
                        })}

                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningImg} alt="Aviso importante"/>
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                        <button type='submit'>Salvar cadastro</button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm
import React, {useRef, useState, useEffect} from 'react'

export default  function Chat({socket}){

    const messageRef = useRef()
    const [messageList, setMessageList] = useState([])

    useEffect(()=>{
        socket.on('Mensagem recebida', data =>{
            setMessageList((current) =>[...current, data])
        })

        return () => socket.off('Mensagem recebida')
    }, [socket])

    const handleSubmit = () => {
        const message = messageRef.current.value
        if(!message.trim()) return

        socket.emit('Mensagem', message)
        clearInput()
    }

    const clearInput = () =>{
        messageRef.current.value = ''
    }

    return (
        <div>
           <h1>Chat</h1>
           {
            messageList.map((message,index) =>(
                <p key={index}>{message.author}: {message.text}</p>
            
            ))
           }
           <input type="text" ref= {messageRef} placeholder='Mensagem' />
           <button onClick={() => handleSubmit()}>Enviar</button> 
        </div>
    )
}
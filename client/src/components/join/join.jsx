import React, {useRef} from 'react'

export default  function Join({setChatVisibility}){

    const usernameRef = useRef()

    const handleSubmit = () => {
        const username  = usernameRef.current.value
        if(!username.trim()) return
        console.log('Submit')
    }

    return (
        <div>
           <h1>Join</h1>
           <input type="text" ref = {usernameRef} placeholder='Nome de usuario' />
           <button onClick = {()=> handleSubmit()}>Entrar</button> 
        </div>
    )
}
import { useState } from 'react'
import { useRouter } from 'next/router'

import Title from '../src/components/title/Title'
import Button from '../src/components/button/Button'
import Input from '../src/components/input/Input'

export default function Home() {
  const [clique, setClique] = useState(0)

  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = () => {
    console.log('Handle Click')
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
    console.log('Handle Submit Form')
    console.log({ email, password })
  }

  const handleChangeInput = (event, onChange) => {
    onChange(event.target.value)
  }

  const handleClique = () => {
    setClique(clique + 1)
  }

  return (
    <>
      <Title onClick={handleClick}>Teste</Title>
      <label onClick={() => router.push('/useeffect')}>Voltar a página...</label>
      <form onSubmit={handleSubmitForm}>
        <Input type="text" placeholder="Digite seu e-mail" onChange={(e) => handleChangeInput(e, setEmail)} />
        <Input type="password" placeholder="Digite sua senha" onChange={(e) => handleChangeInput(e, setPassword)} />
        <p>O e-mail digitado é: {email} </p>
        <Button type="submit">Botão DENTRO do form</Button>
      </form><br/>
      <Button onClick={handleClique}>Botão Clicar</Button>
      <label>Cliques: {clique} </label><br/>
      <button>button</button>
    </>
  )
}
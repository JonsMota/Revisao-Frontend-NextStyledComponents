import Title from '../src/components/title/Title'
import Button from '../src/components/button/Button'
import Input from '../src/components/input/Input'

export default function Home() {
  const handleClick = () => {
    console.log('Handle Click')
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
    console.log('Handle Submit Form')
  }

  return (
    <>
      <Title onClick={handleClick}>Teste</Title>
      <label onClick={handleClick}>Voltar a página...</label>
      <form onSubmit={handleSubmitForm}>
        <Input type="text" placeholder="Digite seu e-mail" />
        <Input type="password" placeholder="Digite sua senha" />
        <Button type="submit">Botão DENTRO do form</Button>
      </form>
      <Button onClick={handleClick}>Botão FORA do form</Button>
      <label>LABEL TESTE </label>
      <button>button</button>
    </>
  )
}
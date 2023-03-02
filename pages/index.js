import Title from '../src/components/title/Title'
import Button from '../src/components/button/Button'
import Input from '../src/components/input/Input'

export default function Home() {
  return (
    <>
      <Title>Teste</Title>
      <label>Voltar a página...</label>
      <form>
        <Input type="text" placeholder="Digite seu e-mail" />
        <Input type="password" placeholder="Digite sua senha" />
        <Button>Botão</Button>
      </form>
      <Button>Botão</Button>
      <label>LABEL TESTE </label>
      <button>button</button>
    </>
  )
}
import logo from '../../assets/images/logo.svg'
import { Container, Content } from './Headerstyles'

export function Header() {
  return (
    <Container>
      <Content className="page-details ">
        <h1> Pedidos </h1>
        <h2>Acompanhe os pedidos dos clientes</h2>

        <img src={logo} />
      </Content>
    </Container>
  )
}
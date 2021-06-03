import Image from 'next/image'
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Container fluid className={styles.MindhiveContainer}>
      <Row className={styles.MindhiveNavbar}>
        <Col>
          
        </Col>
      </Row>
      <Jumbotron fluid className={styles.MindhiveJumbotron}>
      </Jumbotron>
      <Row>
        <Col>
        
        </Col>
      </Row>
    </Container>
  )
}
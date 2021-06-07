import Image from 'next/image'
import { MdSearch, MdMenu } from 'react-icons/md'
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Container fluid className={styles.MindhiveContainer}>
      <Row className={styles.MindhiveNavbar}>
        <Col className={styles.MindhiveNavbar_left} xs={6}>
          <img
            src="/mh-helpcenter-logo.png"
            alt="Mindhive Help Center Logo"
            height={25}
          />
        </Col>
        <Col className={styles.MindhiveNavbar_right} xs={6}>
          <MdSearch color='#fff' size={20} />
        </Col>
      </Row>
      <Jumbotron fluid className={styles.MindhiveJumbotron}>
        <h1>
          Everything you need to know <br /> so you can use Mindhive:
        </h1>
      </Jumbotron>
      <div className={styles.MindhiveMenu}>
        <div className={styles.menu_icon}>
          <MdMenu color='#000' size={20} />
        </div>
        <div className={styles.menu_text}>
          <h4>Creating A Discussion</h4>
        </div>
      </div>
    </Container>
  )
}
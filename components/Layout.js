import Link from 'next/link'
import { useState } from 'react'
import { MdSearch, MdMenu } from 'react-icons/md'
import { Container, Row, Col, Jumbotron, Button, Modal } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

export default function Layout({
    title,
    route,
    children
}) {
  const [showMenu, setShowMenu] = useState(false)
  const handleClose = () => setShowMenu(false)
  const handleShow = () => setShowMenu(true)

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
        <a onClick={handleShow}>
          <MdMenu color='#000' size={20} />
        </a>
        </div>
        <div className={styles.menu_text}>
          <h4>{title}</h4>
        </div>
      </div>
      <div className={styles.MindhiveBody}>
        {children}
      </div>
      <div className={styles.MindhiveFooter}>
       
      </div>
      <Modal show={showMenu} onHide={handleClose} size="sm">
        <Modal.Body>
          <ul className={styles.MindhiveModalMenu}>
            <li>
                <Link href="/">
                    <a
                      style={{
                          pointerEvents: route !== '/' ? null : 'none',
                          color: route !== '/' ? 'inherit' : '#a2a2a2'
                      }}
                    >
                        What is Mindhive?
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/setting-up-your-account">
                    <a
                      style={{
                          pointerEvents: route !== '/setting-up-your-account' ? null : 'none',
                          color: route !== '/setting-up-your-account' ? 'inherit' : '#a2a2a2'
                      }}
                    >
                        Setting up your account
                    </a>
                </Link>
            </li>
            <li>
              <a href="#">Creating a discussion</a>
            </li>
            <li>
              <a href="#">Hosting and curating a discussion</a>
            </li>
            <li>
              <a href="#">Joining a discussion</a>
            </li>
            <li>
              <a href="#">Highlighting text/ideate</a>
            </li>
            <li>
              <a href="#">Inviting and building your team</a>
            </li>
            <li>
              <a href="#">Driving engagement</a>
            </li>
            <li>
              <a href="#">Generating a report</a>
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}
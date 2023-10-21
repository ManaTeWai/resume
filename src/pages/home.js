import React from "react";
import ph from '../assets/ph.jpg';
import { Container, Row, Col, Card, Carousel, Image } from "react-bootstrap";
import react_logo from '../assets/logo.svg';
import wp_logo from '../assets/wp_logo.svg';
import dr_logo from '../assets/dr_logo.svg';
import fs from '../assets/fs.jpg';
import ss from '../assets/ss.jpg';
import ts from '../assets/ts.jpg';

export const Home = () =>{
    return(
        <main>
            <div className="about animate__animated animate__fadeInUp">
                <Container className="fb">
                    <Row>
                        <Col sm={4} className="about__photo"><img src={ph} alt="моё красивое фото"></img></Col>
                        <Col sm={8} className="about__text">                   
                            <div className="about__text__inner">
                                <div className="about__text__header">
                                    <h2>Цыбульский Максим</h2>
                                    <h1>Web developer</h1>
                                </div>
                                <div className="about__text__description">
                                    <p>Ставропольский государственный аграрный университет, факультет среднего профессионального образования, окончил образование по специальности "Информационные системы и программирование", имею сертификаты за отличное прохождение курсов на stepik, написал несколько сайтов и приложений, с которыми на различных хакатонах были заняты призовые места</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="steck animate__animated animate__fadeInUp" id="steck">
                <h3 className="steck_header">Мой стек технологий:</h3>
                <Row className="steck_row">
                    <Col className="Col">
                        <Card className="card" style={{ width: '260px' }} bg="black">
                            <Card.Img className="card_img" variant="top" id="re-logo" src={react_logo} />
                            <Card.Body>
                                <Card.Title className="card_text">React</Card.Title>
                                <Card.Text className="card_text">
                                    Востребованая Javascript библиотека, созданная компанией meta. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="Col">
                        <Card className="card" style={{ width: '260px' }} bg="black">
                            <Card.Img className="card_img" id="wp-logo" variant="top" src={wp_logo} />
                            <Card.Body>
                                <Card.Title className="card_text">Wordpress</Card.Title>
                                <Card.Text className="card_text">
                                    Самая частоиспользуемая и гибконастраиваемая система управления содержимым. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="Col">
                        <Card className="card" style={{ width: '260px' }} bg="black">
                            <Card.Img className="card_img" id="dr-logo" variant="top" src={dr_logo} />
                            <Card.Body>
                                <Card.Title className="card_text">Drupal</Card.Title>
                                <Card.Text className="card_text">
                                    Самая простая система управления содержимым в плане поддержки.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="projects animate__animated animate__fadeInUp">
                <Carousel className="carousel">
                    <Carousel.Item>
                        <Image className="img" src={fs} text="Первый слайд" />
                        <Carousel.Caption>
                        <h3>Сайт автомобильного салона</h3>
                        <p>Реализовани множество интерактивных объектов, таких как адаптивное меню, раздел FaQ, слайдер и т.д.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image className="img" src={ss} text="Второй слайд" />
                        <Carousel.Caption>
                        <h3>Сайт со статистикой</h3>
                        <p>Реализованы интерактивные диаграммы</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image className="img" src={ts} text="Третий слайд" />
                        <Carousel.Caption>
                        <h3>Сайт кофейни</h3>
                        <p>Небольшой сайт для кофейни</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </main>
    )
}
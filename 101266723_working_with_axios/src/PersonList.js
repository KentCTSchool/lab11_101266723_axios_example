import React, { Component } from 'react'
import axios from 'axios'
import { ListGroup, ListGroupItem, Container, Row, Col, Image, Button } from 'react-bootstrap'

export default class PersonList extends Component {

    constructor(props) {
        super(props)
    
        //Define state default values
        this.state = {
            persons: []
        }
    }

    // Component Lifecycle Callback
    componentDidMount() {
        this.getPersonList()
    }

    // Get Persons
    getPersonList = () => {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            console.log(res.data.results)
            this.setState({ persons : res.data.results});
        })

    }
    
    render() {
        return (
        <div>
            {
                this.state.persons.map(person => (
                    <>
                    <ListGroup>
                    <ListGroup.Item variant="primary"><h5>{person.name.first} {person.name.last} - <span id="id">{person.login.uuid}</span></h5></ListGroup.Item>
                        <ListGroup.Item action variant="info">
                                <Row>
                                    <Col xs={6} md={1} >
                                        <div>
                                        <Image src={person.picture.large} roundedCircle />
                                        </div>
                                        <br/>
                                        <div>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button>Details</Button>
                                        </div>
                                    </Col>
                                    <Col xs={6} md={6}>
                                             <div>User Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{person.login.username}</div>
                                            <div>Gender:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{person.gender}</div>
                                            <div>Time Zone Desciption:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{person.location.timezone.description}</div>
                                            <div>Address:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.state}, {person.location.country} - {person.location.postcode} </div>
                                            <div>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{person.email}</div>
                                            <div>Birthdate and Age:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{person.dob.date} ({person.dob.age})</div>
                                            <div>Register Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{person.registered.date}</div>
                                            <div>Phone#:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{person.phone}</div>
                                            <div>Cell#:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{person.cell}</div>
                                    </Col>
                                </Row>
                        </ListGroup.Item>
                    </ListGroup>
                    </>
                ))
            }
        </div>
    )}

}
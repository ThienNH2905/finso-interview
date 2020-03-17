import React, { Component } from 'react';
import classnames from 'classnames';
import NewsList from '../components/News_list';
import { 
    TabContent, TabPane, Nav, 
    NavItem, NavLink, Card,
    Button, CardTitle, CardText, 
    Container, Row, Col 
} from 'reactstrap';

class Home extends Component{
    constructor() {
        super();
        this.state = {
            active_tab: "1",
        }
        this.toggle = this.toggle.bind(this);
    }
    
    toggle(tab)  {
        if(this.state.active_tab !== tab) this.setState({active_tab: tab});
    }
    render(){
        return(
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <h1>Finso's News!</h1>
                    </Col>
                </Row>
                <Row>
                    <Nav pills className="w-100">
                        <NavItem className="flex-grow-1">
                            <NavLink
                                className={classnames({ active: this.state.active_tab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                            >
                                News
                            </NavLink>
                        </NavItem>
                        <NavItem className="flex-grow-1">
                            <NavLink
                                className={classnames({ active: this.state.active_tab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                            >
                                News by categories
                            </NavLink>
                        </NavItem>
                        <NavItem className="flex-grow-1">
                            <NavLink
                                className={classnames({ active: this.state.active_tab === '3' })}
                                onClick={() => { this.toggle('3'); }}
                            >
                                Profile
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent className="w-100" activeTab={this.state.active_tab}>
                        <TabPane tabId="1">
                            <NewsList/>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="6">
                                    <Card body>
                                        <CardTitle>Special Title Treatment</CardTitle>
                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                        <Button>Go somewhere</Button>
                                    </Card>
                                </Col>
                                <Col sm="6">
                                    <Card body>
                                        <CardTitle>Special Title Treatment</CardTitle>
                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                        <Button>Go somewhere</Button>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row>
                                <Col sm="6">
                                    <Card body>
                                        <CardTitle>Special Title Treatment</CardTitle>
                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                        <Button>Go somewhere</Button>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </Row>
            </Container>
        )
    }
}

export default Home;
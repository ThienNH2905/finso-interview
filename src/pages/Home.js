import React, { Component } from 'react';
import classnames from 'classnames';
import NewsList from '../components/NewsList';
import NewsFilter from '../components/NewsFilter';
import Profile from '../components/Profile';
import { 
    TabContent, TabPane, Nav, 
    NavItem, NavLink, 
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

    componentWillMount() {
        if(window.location.hash) {
            let tab = window.location.hash.replace("#", '');
            this.setState({active_tab: tab});
        }
        
    }
    
    toggle(tab)  {
        if(this.state.active_tab !== tab) this.setState({active_tab: tab});
        window.location.hash = tab;
    }
    render(){
        return(
            <Container>
                <Row>
                    <Col><h1>Finso's News!</h1></Col>
                </Row>
                <Row>
                    <Nav pills className="w-100">
                        <NavItem className="flex-grow-1">
                            <NavLink
                                className={classnames({ active: this.state.active_tab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                            >
                                Top Headline
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
                            <NewsFilter />
                        </TabPane>
                        <TabPane tabId="3">
                            <Profile />
                        </TabPane>
                    </TabContent>
                </Row>
            </Container>
        )
    }
}

export default Home;
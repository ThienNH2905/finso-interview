import React, { Component } from 'react';
import classnames from 'classnames';
import MenuBar from '../components/Nav';
import NewsList from '../components/NewsList';
import NewsFilter from '../components/NewsFilter';
import Profile from '../components/Profile';
import { 
    TabContent, TabPane, Nav, 
    NavItem, NavLink, 
    Container, Row 
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
                    <MenuBar />
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
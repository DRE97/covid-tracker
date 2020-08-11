import React from 'react';
import './Searchbar.css';
import { Nav, Form, FormControl, Button } from 'react-bootstrap';

class Searchbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selection: 'country',
            term: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(event) {
        this.setState({ term: event.target.value });
    }

    handleSearch(event) {
        if(this.state.term === '') {
            alert('Unvalid input');
        } else {
            this.props.searchCountry(this.state.term, this.state.selection);
        }
        event.preventDefault();
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-content">
                    <h3>Search by</h3>
                    <div className="SearchBar-options">
                        <Nav variant="pills" defaultActiveKey="country" onSelect={(eventKey) => this.setState({ selection: eventKey })}>
                            <Nav.Item>
                                <Nav.Link eventKey="country">Country</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="continent">Continent</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                    <div className="SearchBar-form">
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.handleChange}/>
                        </Form>
                    </div>
                    <div className="SearchBar-submit">
                        <Button variant="outline-primary" onClick={this.handleSearch}>Search</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Searchbar;
import React, { useState } from 'react';
import './Searchbar.css';
import { Nav, Form, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { fetchSingleSearch } from '../redux'

function Searchbar(props) {

    const [term, setTerm] = useState('');
    const [selection, setSelection] = useState('country');

    function handleChange(event) {
        //this.setState({ term: event.target.value });
        setTerm(event.target.value);
    }

    function handleSearch(event) {
        if(term === '') {
            alert('Unvalid input');
        } else {
            props.fetchSingleSearch(term, selection);
            props.isLoaded(true);
        }
        event.preventDefault();
    }

    return (
        <div className="SearchBar">
            <div className="SearchBar-content">
                <h3>Search by</h3>
                <div className="SearchBar-options">
                    <Nav variant="pills" defaultActiveKey="country" onSelect={(eventKey) => setSelection(eventKey)}>
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
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleChange}/>
                    </Form>
                </div>
                <div className="SearchBar-submit">
                    <Button className="button" variant="primary" onClick={handleSearch}>Search</Button>
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSingleSearch: (term, selection) => dispatch(fetchSingleSearch(term, selection))
    }
}

export default connect(null, mapDispatchToProps)(Searchbar);
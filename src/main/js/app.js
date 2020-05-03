import React from 'react';
import ReactDOM from 'react-dom';
import client from './client';
import Table from "react-bootstrap/Table";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const MyRoute = () =>
    <Router>
        <CustomNav/>
        <Switch>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/users">
            <Users></Users>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
    </Router>


function Home() {
    return <App></App>;
  }

  function About() {
    return <h1>about</h1>;
  }

  function Users() {
    return <h1>user</h1>;
  }

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            blogItems: []
        };
        this.inputTitle = React.createRef();
        this.inputDescription = React.createRef();
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/blogItems'}).done(response => {
            this.setState({blogItems: response.entity._embedded.blogItems});
        });
    }

    render() {
        const handleSubmit = (event) => {
            // alert("aaa");
            alert(this.inputTitle.value);
            alert(this.inputDescription.value);
            fetch('http://localhost:8080/blog/add', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "title": this.inputTitle.value,
                    "description": this.inputDescription.value,
                }),
            });
        }
        return (
            <Container className="p-3">
                <Jumbotron>
                  <h1 className="header">Welcome To React-Bootstrap</h1>
                </Jumbotron>
                <BlogItemsList blogItems={this.state.blogItems}/>
                <br/>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formEmail" >
                    <Form.Label>Title</Form.Label>
                    <FormControl type="text" placeholder="Title" ref={node => this.inputTitle = node}/>
                  </Form.Group>
                  <Form.Group controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <FormControl type="text" placeholder="Description" ref={node => this.inputDescription = node}/>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
            </Container>
        );
      }


}



class BlogItemsList extends React.Component {
    render(){
        const blogItems = this.props.blogItems.map(blogItem =>
            <BlogItem key={blogItem._links.self.href} blogItem={blogItem}/>
        );
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Created date</th>
                    </tr>
                </thead>
                <tbody>
                    {blogItems}
                </tbody>
            </Table>
        )
    }
}

class BlogItem extends React.Component{
    render() {
        var date = new Date(this.props.blogItem.createdOn);
        return (
            <tr>
                <td>{this.props.blogItem.title}</td>
                <td>{this.props.blogItem.description}</td>
                <td>{date.toDateString()}</td>
            </tr>
        )
    }
}

const CustomNav = () => {
    return (
     <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
              <Nav.Link>
                    <Link variant="primary" to="/">Home</Link>
               </Nav.Link>
               <Nav.Link>
                    <Link variant="primary" to="/about">About</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link variant="primary" to="/users">Users</Link>
                </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
    </div>
    )
}

ReactDOM.render(
    <MyRoute />,
    document.getElementById('react')
)
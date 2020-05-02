import React from 'react';
import ReactDOM from 'react-dom';
import client from './client';
import Table from "react-bootstrap/Table";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            blogItems: []
        };
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/blogItems'}).done(response => {
            this.setState({blogItems: response.entity._embedded.blogItems});
        });
    }

    render() {
        return (
            <Container className="p-3">
                <Jumbotron>
                  <h1 className="header">Welcome To React-Bootstrap</h1>
                </Jumbotron>
                <BlogItemsList blogItems={this.state.blogItems}/>
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

ReactDOM.render(
    <App />,
    document.getElementById('react')
)
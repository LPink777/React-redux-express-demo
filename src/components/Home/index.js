import React, { Component } from 'react';
import Appbar from '@/containers/AppBar';
import Form from "../../containers/formContainer/index";

class Home extends Component {
    constructorp(){
    }

    render() {
        return (
            <div>
                <Appbar />
                <Form
                    name="userForm"
                    action="http://localhost:8080"
                >
                    <input type="button" value="click"/>
                    <input type="button" value="docuble"/>
                    <input type="submit" value="submit" />
                </Form>
            </div>
        );
    }
}

export default Home;
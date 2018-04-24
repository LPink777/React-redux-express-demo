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
                    <div>
                        <h1>111</h1>
                    </div>
                </Form>
            </div>
        );
    }
}

export default Home;
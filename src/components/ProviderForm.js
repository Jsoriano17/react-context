import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { UserConsumer } from '../UserProvider';

class ProviderForm extends React.Component {
    state = {
        username: this.props.username,
        first: this.props.first,
        last: this.props.last,
        email: this.props.email,
    }
    handleChange = (e, { name, value }) => {
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const user = { ...this.state }
        this.props.updateUser(user)
    }
    render() {
        const { username, first, last, email } = this.state
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Input
                    label='Username'
                    type='text'
                    name={'username'}
                    value={username}
                    onChange={this.handleChange}
                />
                <Form.Input
                    label='first name'
                    type='text'
                    name={'first'}
                    value={first}
                    onChange={this.handleChange}
                />
                <Form.Input
                    label='last name'
                    type='text'
                    name={'last'}
                    value={last}
                    onChange={this.handleChange}
                />
                <Form.Input
                    label='email'
                    type='text'
                    name={'email'}
                    value={email}
                    onChange={this.handleChange}
                />
                <Button type="submit">Submit</Button>
            </Form>
        )
    }
}

const ConnectedUserForm = (props) => {
    return (
        <UserConsumer>
            {value => (
                <ProviderForm
                    {...props}
                    username={value.username}
                    first={value.first}
                    last={value.last}
                    email={value.email}
                    updateUser={value.updateUser}
                />
            )}
        </UserConsumer>
    )
}

export default ConnectedUserForm;
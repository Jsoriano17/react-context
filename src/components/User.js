import React from 'react'
import { Card } from 'semantic-ui-react'
import { UserConsumer } from '../UserProvider'

export default class User extends React.Component {
    render() {
        return (
            <UserConsumer>
                {value => (
            <Card>
                <Card.Content>
                <Card.Header>{value.username}</Card.Header>
                    <Card.Meta>
                    {`${value.first} ${value.last}`}
                   </Card.Meta>
                   <Card.Meta>
                   {value.email}
                   </Card.Meta>
                </Card.Content>
            </Card>
                )}
            </UserConsumer>
        )
    }
}
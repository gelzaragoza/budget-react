import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

export default function DisplaceBalances() {
  return (
    <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
            <DisplayBalance title="Incoming" value='₱1045.50' color='green'/>
            </Grid.Column>
            <Grid.Column>
            <DisplayBalance title="Expenses" value='₱623.50' color='red'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
  )
}

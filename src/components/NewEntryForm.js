import React from 'react'
import { Form } from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'

export default function NewEntryForm() {
  return (
    <div>
      <Form unstackable>
        <Form.Group>
          <Form.Input icon='tags' width={12} label='Description' placeholder="New"/>
          <Form.Input icon='dollar' iconPosition='left' width={4} label='Value' placeholder="100"/>
        </Form.Group>
        <ButtonSaveOrCancel/>
      </Form>
    </div>
  )
}

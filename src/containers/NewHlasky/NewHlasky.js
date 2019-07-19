import React from 'react';

import { Container } from 'reactstrap';

import { reduxForm, Field } from 'redux-form'

// types
import type { FormProps } from 'redux-form'

class NewHlasky extends React.Component{


  render() {
        const { handleSubmit } = this.props

    return (
      <Container>
      <form onSubmit={handleSubmit}>
        {/* <Field name="firstName" component={CompositeInputField} noMargins /> */}
        <Field name="lastName" component="input" type="text" />
        </form>
      </Container>
    )
  }
}

export default reduxForm({
  form: NewHlasky,
  // enableReinitialize: true,
})(NewHlasky)


// const NewHlasky = connect(mapStateToProps, mapDispatchToProps)(connectedHlasky);
// export default NewHlasky;
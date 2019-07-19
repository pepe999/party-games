// @flow
import * as React from 'react'

import { Header } from './Header'

type Props = {
  children?: React.Node,
  location: Object,
}

export class Layout extends React.PureComponent<Props> {
  props: Props

  render() {
    const { children, location } = this.props

    return (
      <div>
        <Header location={location} />
        {children}
      </div>
    )
  }
}

export default Layout

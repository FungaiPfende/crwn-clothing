import React from 'react'

import './directory.styles.scss'
import  SECTIONS_DATA  from '../../utils/sections.data'
import  MenuItem  from '../menu-item/menu-item.component'

export class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      section: SECTIONS_DATA
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {
        this.state.section.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />))
        }
      </div>
    )
  }
}
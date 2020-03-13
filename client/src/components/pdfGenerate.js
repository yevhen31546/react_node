import React from 'react';
import { saveAs } from 'file-saver'
import axios from 'axios'

export default ({ data }) => {
  return (
    <div className='warranty' style={{ display: 'flex', justifyContent: 'center'}}>
      <p>Warranty </p>
      <p>Model</p>
      <p>{data.model}</p>
      <p>Serial number</p>
      <p>{data.sn}</p>
    </div>
  )
}
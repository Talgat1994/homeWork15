

import React from 'react'

function DemoList() {
  return (
    <div>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </div>
  )
}

export default React.memo(DemoList) 
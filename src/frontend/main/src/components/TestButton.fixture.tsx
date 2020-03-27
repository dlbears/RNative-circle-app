import React, { useState } from 'react'
import TestButton from './TestButton'

export default () => {
    const [title, setTitle] = useState("TEST")
    return <TestButton label={title} />
}

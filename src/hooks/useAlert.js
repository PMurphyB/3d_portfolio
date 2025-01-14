import { useState } from 'react'

const useAlert = () => {
  const [alert, setalert] = useState({ show: false, text: '', type: 'danger'})

  const showAlert = ({ text, type = 'danger' }) => setalert({ 
    show: true,
    text,
    type

  })

  const hideAlert = ({ text, type = 'danger' }) => setalert({ 
    show: true,
    text,
    type

  })

  return (
    <div>useAlert</div>
  )
}

export default useAlert
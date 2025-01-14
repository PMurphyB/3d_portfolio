import { useState } from 'react'

const useAlert = () => {
  const [alert, setalert] = useState({ show: false, text: '', type: 'danger'})

  const showAlert = ({ text, type = 'danger' }) => setalert({ })

  return (
    <div>useAlert</div>
  )
}

export default useAlert
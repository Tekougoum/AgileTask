import { useState } from 'react'

function useFormulaire(valeursInitiales) {
  const [valeurs, setValeurs] = useState(valeursInitiales)
  const modifier = (e) => {
    const { name, type, value, checked } = e.target
    setValeurs((anciennes) => ({
      ...anciennes,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }
  return { valeurs, modifier }
}
export default useFormulaire
import { useState } from 'react'
import { Task } from '../../../Domain/entities/Task'

const FormTaskViewModel = () => {
  const [formData, setFormData] = useState<Partial<Task>>({})
  const [errors, setErrors] = useState<Partial<Task>>({})

  const updateFormData = (key: keyof Task, value: any) => {
    setFormData((prevValues) => ({
      ...prevValues,
      [key]: value
    }))
  }

  const handleSubmit = () => {
    console.log('FORMD ATA:: ', JSON.stringify(formData, null, 2))
  }

  return {
    formData,
    updateFormData,
    errors,
    handleSubmit
  }
}

export default FormTaskViewModel

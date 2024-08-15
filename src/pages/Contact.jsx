import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = () => {};
  const handleFocus = () => {};
  const handleBlur = () => {};

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in touch</h1>

        <form className='w-full flex flex-col gap-7 mt-14'>
          <label className='text-black-500 font-semibold'>
            Name
            <input type='text'
            name='name'
            className='input'
            placeholder='John'
            required value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlue={handleBlur}
            />
          </label>

          <label className='text-black-500 font-semibold'>
            Email
            <input type='emaio'
            name='email'
            className='input'
            placeholder='john@smith.com'
            required value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlue={handleBlur}
            />
          </label>

          <label className='text-black-500 font-semibold'>
            Name
            <input type='text'
            name='name'
            className='input'
            placeholder='John'
            required value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlue={handleBlur}
            />
          </label>

        </form>
      </div>
    </section>
  )
}

export default Contact
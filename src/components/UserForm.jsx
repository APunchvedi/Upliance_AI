import { useState, useEffect } from 'react';
import { Container, Button } from '@mui/material';

const UserForm = () => {
 
  const [user, setUser] = useState({ name: '', address: '', email: '', phone: '', id: '' });
  const [unsavedChanges, setUnsavedChanges] = useState(false)

  useEffect(() => {
    window.addEventListener('beforeunload', handleUnload);
    return () => window.removeEventListener('beforeunload', handleUnload);
  }, [unsavedChanges])

  const handleUnload = (e) => {
    if (unsavedChanges) {
      e.preventDefault();
      e.returnValue = '';
    }
  }

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value, id: user.id || Date.now().toString() });
    setUnsavedChanges(true);
  }

  const handleSubmit = () => {
    localStorage.setItem('userData', JSON.stringify(user));
    setUnsavedChanges(false);
  }

  return (
    <Container className='flex flex-col items-center justify-center h-screen p-4 text-zinc-900 text-2xl gap-6'>
      <h2 className='text-3xl font-bold underline'>User Data Form</h2>
      <input type='text' placeholder='Enter your full name'      onChange={handleChange} className=' border-1 border-gray-300 rounded-md p-1' />
      <input type='address' placeholder= "Enter your Address"    onChange={handleChange} className=' border-1 border-gray-300 rounded-md p-1' />
      <input type="email" placeholder="Enter your email"         onChange={handleChange} className=' border-1 border-gray-300 rounded-md p-1' />
      <input type="phone" placeholder="Enter your phone number"  onChange={handleChange} className=' border-1 border-gray-300 rounded-md p-1' />
      <Button onClick={handleSubmit} className='!font-bold !border-2 !border-gray-300 !rounded-md !p-2'>Save</Button>
    </Container>
  )
}

export default UserForm

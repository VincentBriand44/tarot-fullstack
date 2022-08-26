import { useState } from 'react'
import { AlertCircle } from 'react-feather'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    if (username === '') {
      setError("Nom d'utilisateur obligatoire")
    } else if (password === '') {
      setError('Mot de passe obligatoire')
    } else alert('Username: ' + username + '\nPassword: ' + password)
  }

  return (
    <>
      <h1 className='text-4xl text-slate-200 font-bold mb-8'>Connexion</h1>

      {error && (
        <div className='bg-slate-800 px-4 py-2 rounded-lg text-red-600 flex gap-2 font-semibold'>
          <AlertCircle />
          <p>{error}</p>
        </div>
      )}

      <form
        className='flex flex-col text-slate-200 w-6/12 font-medium'
        onSubmit={e => handleSubmit(e)}
      >
        <label htmlFor='username' className='text-center my-1'>
          Nom d&apos;utilisateur
        </label>
        <input
          name='username'
          type='text'
          placeholder="Nom d'utilisateur"
          className='h-8 px-4 rounded-xl mb-4 text-slate-700'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <label htmlFor='password' className='text-center my-1'>
          Mot de passe
        </label>
        <input
          name='password'
          type='password'
          placeholder='Mot de passe'
          className='h-8 px-4 rounded-xl mb-8 text-slate-700'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          type='submit'
          className='px-4 py-2 bg-slate-800 rounded-xl w-64 m-auto'
        />
      </form>
    </>
  )
}

export default Login

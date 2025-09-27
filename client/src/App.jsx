import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
// import toast from 'react-hot-toast'


const App = () => {
  return (
    <div data-theme="forest" className=' relative h-full w-full '>
      {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#28a745_100%)]" /> */}

    {/* </div><div data-theme="forest" className=' mx-auto '> */}
      {/* <button className='btn btn-accent'>click me</button>
      <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button> */}
      {/* <button onClick={()=>toast.success("congrats")} className='text-red-300 p-4 bg-slate-200'>Click Me</button> */}
      <Routes>  
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>

    </div>
  )
}

export default App

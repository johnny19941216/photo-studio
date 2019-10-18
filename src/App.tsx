import React from 'react'
import './App.css'

import Upload from './components/upload'

const App: React.FC = () => {
  const onFileChange = (f: FileList) => console.log(f)
  return (
    <div className="App">
      <Upload
        accept={['image/png', 'image/jpeg']}
        multiple={true}
        onChange={onFileChange}
      />
    </div>
  )
}

export default App

import React from 'react'
import InputField from './components/InputField/InputField'
import DataTable from './components/DataTable/DataTable'

const App = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">UI Components Demo</h1>
      <InputField label="Username" placeholder="Enter username" variant="outlined" size="md" />
      <DataTable
        data={[{ id: 1, name: 'John Doe', age: 25 }]}
        columns={[
          { key: 'id', header: 'ID' },
          { key: 'name', header: 'Name' },
          { key: 'age', header: 'Age' },
        ]}
      />
    </div>
  )
}

export default App
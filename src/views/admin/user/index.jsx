import React from 'react';
import DataTable from '../../../components/DataTable';
import MetaData from '../../../components/MetaData';


const usersData = {
  columns: [
    {
      label: 'User ID',
      field: 'id',
    },
    {
      label: 'Full Name',
      field: 'title',
    },
    {
      label: 'Full Name',
      field: 'title',
    },
    {
      label: 'Full Name',
      field: 'title',
    },
  ],
  rows: [
    { id: 1, title: 'Lorem Ipsum 1' },
    { id: 2, title: 'Lorem Ipsum 2' },
    { id: 3, title: 'Lorem Ipsum 3' },
    { id: 4, title: 'Lorem Ipsum 1' },  
    { id: 5, title: 'Lorem Ipsum 1' },
    { id: 6, title: 'Lorem Ipsum 1' },
    { id: 7, title: 'Lorem Ipsum 1' },
    { id: 8, title: 'Lorem Ipsum 1' },
    { id: 10, title: 'Lorem Ipsum 1' },
    { id: 11, title: 'Lorem Ipsum 1' },
    { id: 12, title: 'Lorem Ipsum 1' },
    { id: 13, title: 'Lorem Ipsum 1' },

  ],
};
function App() {
  return (
    <>
      <MetaData title={'All Owners'} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #b0cca9, #ffffff)',
          padding: '20px',
          borderRadius: '8px',
          height: '100px'
        }}
      >
        <div className="p-4">
          <h1 className="text-2xl font-semibold">Owners</h1>
        </div>
      </div>

      <div className="ph-4">
        <DataTable columns={usersData.columns} rows={usersData.rows} />
      </div>
    </>
  );
}

export default App;

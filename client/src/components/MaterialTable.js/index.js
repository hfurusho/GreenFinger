import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTable() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Plant Name', field: 'name' },
      { title: 'Location', field: 'location' },
      { title: 'Start Date', field: 'startDate', type: 'date' },
      { title: 'Water Period (days)', field: 'waterPeriod', type: 'numeric' },
    ],
    data: [
        {name: 'Golden Pothos', location: 'Kitchen', startDate: '02/20/2020', waterPeiod: '14'},
        {name: 'ZZ Plant', location: 'Living Room', startDate: '02/22/2020', waterPeiod: '30'},
        {name: 'Monstera', location: 'Bed Room', startDate: '02/29/2020', waterPeiod: '10'},
        {name: 'Aloe', location: 'Living Room', startDate: '02/18/2020', waterPeiod: '25'},
    ],
  });

  return (
    <MaterialTable
      title="My Plants"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
import React from 'react';
import GetWhatYouEnter from "./component/GetWhatYouEnter";
import IncrementDecrement from './component/IncrementDecrement';
import Increment2X from "./component/Increment2X";
import Sum from "./component/Sum";
import Calculator from "./component/Calculator";
import DataTable from "./component/company/DataTable";



function App() {

  return (
    <>
      <GetWhatYouEnter />
      <hr/>
      <IncrementDecrement />
      <hr/>
      <Increment2X />
      <hr/>
      <Sum/>
      <hr/>
      <Calculator/>
      <hr/>
      <DataTable/>

    </>
  );
}

export default App;

// OpportunityTable.jsx
import React from 'react';
import './opportunityTable.css'; // Import the CSS file

const OpportunityTable = ({ formState }) => {

  const getValue = (key, value) => {
    if (key === 'date') {
      return value.toLocaleString();
    }
    return value.trim() === "" ? "NA" : value;
  };


  return (
    <div className="opportunity-table-container">
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(formState).map(([key, value]) => (
            <tr key={key}>
              {<td>{key}</td>}
              <td>{getValue(key, value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OpportunityTable;

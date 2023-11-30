import React from "react";
import "./opportunity-form.module.css";

const OpportunityForm = ({ onClose, setFormState, setOpen, setShowData }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormValues()
    setOpen(false);
    setShowData(true);
  };

  function setFormValues() {
    var form = document.getElementById("submit-form");
    var inputs = form.elements;
    var values = {};
    for (var i = 0; i < inputs.length; i++) {
      var input = inputs[i];
      if (input.tagName.toLowerCase() === "input" || input.tagName.toLowerCase() === "select") {
        values[input.name] = input.value;
      }
    }
    setFormState(values)
  }

  return (
    <form id="submit-form" onSubmit={handleSubmit}>
      <label>
        Opportunity Name:
      </label>
        <input
          id="opportunityName"
          type="text"
          name="opportunityName"
        />
      <label>
        Job Title:
        <input
          id="jobTitle"
          type="text"
          name="jobTitle"
        />
      </label>
      <label>
        Account Name:
        <select
          id="accountName"
          name="accountName"
        >
          <option value="gaurav@tftus.com">Gaurav</option>
          <option value="daniel@tftus.com">Daniel</option>
          <option value="jhon@tftus.com">Jhon</option>
        </select>
      </label>
      <label>
        Contact Name:
        <select
          id="contactName"
          name="contactName"
        >
          <option value="gaurav@tftus.com">Gaurav</option>
          <option value="daniel@tftus.com">Daniel</option>
          <option value="jhon@tftus.com">Jhon</option>
        </select>
      </label>
      <label>
        Work Location:
        <input
          id="workLocation"
          type="text"
          name="workLocation"
        />
      </label>
      <label>
        Experience:
        <input
          id="experience"
          type="text"
          name="experience"
        />
      </label>
      <label>
        Salary:
        <input
          id="salary"
          type="text"
          name="salary"
        />
      </label>
      <label>
        Address:
        <input
          id="address"
          type="text"
          name="address"
        />
      </label>
      <label>
        Pincode:
        <input
          id="pincode"
          type="text"
          name="pincode"
        />
      </label>
      <label>
        Start Date:
        <input
          id="startDate"
          type="date"
          name="startDate"
        />
      </label>
      <label>
        Work Hours:
        <input
          id="workHours"
          type="text"
          name="workHours"
        />
      </label>
      <label>
        Phase:
        <select
          id="phase"
          name="phase"
        >
          <option value="in-progress">In Progress</option>
          <option value="on-hold">On Hold</option>
          <option value="closed">Closed</option>
        </select>
      </label>

      <div style={{ display: "flex", justifyContent:"space-between", marginBottom: "16px", width: "100%" }}>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
        <button type="submit" className="save" id="submit">Save</button>
      </div>
    </form>
  );
};

export default OpportunityForm;

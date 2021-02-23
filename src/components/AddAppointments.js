import { min } from "moment";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

export function AddAppointments(props){


    const [formData,setFormData] = useState(
        {
            petName: '',
            ownerName: '',
            aptDate : '',
            aptTime : '',
            aptNotes : ''
       
        }
        );
  

    const updateValues = ({ target: { name, value } }) => {
        setFormData({ ...formData, [name]: value });
    };

    const AddAppointment = e => {
        e.preventDefault();
        const tempData = {
            petName: formData.petName,
            ownerName: formData.ownerName,
            aptDate : formData.aptDate +' '+formData.aptTime,
            aptNotes : formData.aptNotes 
        }
        props.addAppointment(tempData);

        setFormData({
            petName: '',
            ownerName: '',
            aptDate : '',
            aptTime : '',
            aptNotes : ''
        });
        props.toggleAddAppointment();
    }
  return (
    <div
    className={
      'card textcenter mt-3 ' +
      (props.hideAddAppointmentDisplay ? '' : 'add-appointment')
    }
  >
    <div className="apt-addheading card-header bg-primary text-white" 
      onClick = {props.toggleAddAppointment}>
      <FaPlus />Add Appointment
    </div>

    <div className="card-body">
      <form id="aptForm" noValidate onSubmit={AddAppointment}>
        <div className="form-group form-row" >
          <label
            className="col-md-2 col-form-label text-md-right"
            htmlFor="petName"
            readOnly
          >
            Pet Name
          </label>
          <div className="col-md-10">
            <input
              type="text"
              className="form-control"
              name="petName"
              placeholder="Pet's Name"
              value = {FormData.petName}
              onChange={updateValues}
            />
          </div>
        </div>

        <div className="form-group form-row">
          <label
            className="col-md-2 col-form-label text-md-right"
            htmlFor="ownerName"
          >
            Pet Owner
          </label>
          <div className="col-md-10">
            <input
              type="text"
              className="form-control"
              name="ownerName"
              placeholder="Owner's Name"
              value = {FormData.ownerName}
              onChange={updateValues}
            />
          </div>
        </div>

        <div className="form-group form-row">
          <label
            className="col-md-2 col-form-label text-md-right"
            htmlFor="aptDate"
          >
            Date
          </label>
          <div className="col-md-4">
            <input
              type="date"
              className="form-control"
              name="aptDate"
              id="aptDate"
              value = {FormData.aptDate}
              onChange={updateValues}
            />
          </div>
          <label
            className="col-md-2 col-form-label text-md-right"
            htmlFor="aptTime"
          >
            Time
          </label>
          <div className="col-md-4">
            <input
              type="time"
              className="form-control"
              name="aptTime"
              id="aptTime"
              value = {FormData.aptTime}
              onChange={updateValues}
            />
          </div>
        </div>

        <div className="form-group form-row">
          <label className="col-md-2 text-md-right" htmlFor="aptNotes">
            Apt. Notes
          </label>
          <div className="col-md-10">
            <textarea
              className="form-control"
              rows="4"
              cols="50"
              name="aptNotes"
              id="aptNotes"
              placeholder="Appointment Notes"
              value = {FormData.aptNotes}
              onChange={updateValues}
            />
          </div>
        </div>

        <div className="form-group form-row mb-0">
          <div className="offset-md-2 col-md-10">
            <button
              type="submit"
              className="btn btn-primary d-block ml-auto"
            >
              Add Appointment
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}
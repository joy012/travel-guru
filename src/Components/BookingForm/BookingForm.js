import React, { useState } from 'react';
import './BookingForm.css'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';


const BookingForm = ({ placeName }) => {
  const departure = new Date().toDateString();
  const [departureDate, setDepartureDate] = useState(departure);

  sessionStorage.setItem('departureDate', departureDate);

  const handleDepartureDate = (date) => {
    setDepartureDate(date.toDateString());
    // sessionStorage.removeItem('departureDate');
    sessionStorage.setItem('departureDate', departureDate);
  };

  const returning = new Date(new Date().setDate(new Date().getDate() + 2)).toDateString();
  const [returnDate, setReturnDate] = useState(returning);

  sessionStorage.setItem('returnDate', returnDate);


  const handleReturnDate = (date) => {
    setReturnDate(date.toDateString());
    sessionStorage.setItem('returnDate', returnDate);
  };

  const datePickerInputStyle = {
    border: '1px solid rgb(206, 212, 218)',
    borderRadius: '5px'
  }

  console.log(departureDate, returnDate);
  return (
    <form className='p-3 booking-form bg-white'>
      <div className="form-group">
        <label for="origin">Origin</label>
        <input type="text" className="form-control" id="origin" value="DHAKA" readonly />
      </div>
      <div className="form-group">
        <label for="destination">Destination</label>
        <input type="text" className="form-control" id="destination" value={placeName} readonly />
      </div>
      <div className="form-row">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div className="form-group col-sm-6">
            <Typography style={{ color: '#818181' }} component="h5"> From </Typography>
            <KeyboardDatePicker
              className="date form-control mt-1"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              minDate={new Date()}
              value={departureDate}
              disablePast={true}
              onChange={handleDepartureDate}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
              InputProps={{
                disableUnderline: true,
                style: { datePickerInputStyle }
              }}
            />
          </div>
          <div className="form-group col-sm-6">
            <Typography style={{ color: '#818181' }} component="h5"> To </Typography>
            <KeyboardDatePicker
              className="date form-control mt-1"
              format="dd/MM/yyyy"
              margin="normal"
              id="To"
              minDate={new Date()}
              value={returnDate}
              onChange={handleReturnDate}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
              InputProps={{
                disableUnderline: true,
                style: { datePickerInputStyle }
              }}
            />
          </div>
        </MuiPickersUtilsProvider>
      </div>
      <Link to={`/detail/${placeName}`}>
        <input type="submit" className="form-control my-3" id="submit" value='Start Booking' />
      </Link>
    </form>
  );
};

export default BookingForm;
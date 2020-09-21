import React, { useState } from 'react';
import './BookingForm.css'
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';


const BookingForm = ({placeName}) => {
  const [departureDate, setDepartureDate] = useState(new Date());
  const handleDepartureDate = (date) => {
    setDepartureDate(date);
  };

  const [returnDate, setReturnDate] = useState(new Date());
  const handleReturnDate = (date) => {
    setReturnDate(date);
  };

  const datePickerInputStyle = {
      border: '1px solid rgb(206, 212, 218)',
      borderRadius: '5px'
  }

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
      <div className="form-group col-sm-6">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Typography style={{ color: '#818181' }} component="h5"> From </Typography>
          <KeyboardDatePicker
            className="date form-control mt-1"
            format="dd/MM/yyyy"
            margin="normal"
            value={departureDate}
            onChange={handleDepartureDate}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            InputProps={{
              disableUnderline: true,
              style: {datePickerInputStyle}
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
      <div className="form-group col-sm-6">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Typography style={{ color: '#818181' }} component="h5"> To </Typography>
          <KeyboardDatePicker
            className="date form-control mt-1"
            format="dd/MM/yyyy"
            margin="normal"
            id="To"
            value={returnDate}
            onChange={handleReturnDate}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            InputProps={{
              disableUnderline: true,
              style: {datePickerInputStyle}
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    </div>
    <Link to='/login'>
      <input type="submit" className="form-control my-3" id="submit" value='Start Booking' />
    </Link>
  </form>
  );
};

export default BookingForm;
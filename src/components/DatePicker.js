import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TableDatePicker = (props) => {
    const [date, setDate] = useState(null);

    const handleChange = (date) => {
        setDate(date)
        props.updateDate(date)
    }

 return (
     <div>
         <DatePicker
             datePickerType="single"
             selected={date}
             onChange={handleChange}
             placeholder="mm/dd/yyyy"
         />
     </div>
 );
}

export default TableDatePicker
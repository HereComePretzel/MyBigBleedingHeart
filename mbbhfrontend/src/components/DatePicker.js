import React, { useState, useEffect } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import enGB from 'date-fns/locale/en-GB'
 
import "react-datepicker/dist/react-datepicker.css";
//DatePicker for post entry form

const MyDatePicker = () => {
    useEffect(() => {
        registerLocale("en-GB", enGB);
    }, []);
    const [selectedDate, setSelectedDate] = useState(null)
    return (
        <DatePicker
            locale={'en-GB'}
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            isClearable
            showYearDropdown
            scrollableMonthYearDropdown
        />
    );
};


// function DatePick () {
//     const [selectedDate, setSelectedDate] = useState(null)
//     return (
//         <div>
//             <DatePicker 
//             selected={selectedDate} 
//             onChange={date => setSelectedDate(date)} 
//             isClearable
//             locale="en-GB"
//             showYearDropDown
//             scrollableMonthYearDropdown/>
//         </div>
//     )
// }


export default MyDatePicker
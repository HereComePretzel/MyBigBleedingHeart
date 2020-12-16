import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import React, { useState} from 'react'

const localizer = momentLocalizer(moment)

// const PopupDatePicker = props => (
//   <div>
//     <Calendar
//       localizer={localizer}
//     //   events={myEventsList}
//       startAccessor="start"
//       endAccessor="end"
//       style={{ height: 500 }}
//     />
//   </div>
// )

function PopupDatePicker (props) {
    const [selectedDate, setSelectedDate] = useState(null)
    return (
        <div>
            <Calendar
            selected={selectedDate} 
            localizer={localizer}
            onChange={date => setSelectedDate(date)} 
            isClearable
            showYearDropDown
            scrollableMonthYearDropdown/>
        </div>
    )
}

export default PopupDatePicker
import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/nb';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios'

const localizer = momentLocalizer(moment)
moment.locale('en-GB');

class Calendar5 extends Component {
  //remove these
  // constructor(props) {
    //   super(props)
    //remove "this."
    state = {
      // show: false,
      //cal_events is array of modified posts
      user_posts: [],
      render: false
    }
    // }
    
    // convertDate = (date) => {
      //   return moment.utc(date).add(1, "days").toDate()
      // }
      //remove CPM, as filtered-by-user posts are being sent down from DashboardContainer. Take this.props.posts and manipulate each object to display properly on the Calendar. Change keywords to reflect blog posts, as opposed to calendar events (cal_events)
//       renderPosts = () =>  {
//         let appointments = this.props.posts
//         for (let i = 0; i < appointments.length; i++) {
//     const dateParse = appointments[i].date.split('/')
//     const monthIndex = parseInt(dateParse[0]) - 1
//       appointments[i].start = new Date(parseInt(dateParse[2]), monthIndex, parseInt(dateParse[1]), 1, 0)
//       appointments[i].end = new Date(parseInt(dateParse[2]), monthIndex, parseInt(dateParse[1]), 23, 0)
//       appointments[i].title = [appointments[i].number]
//       console.log(appointments)
//       const user_posts = appointments
//       console.log(user_posts)
//     }
//     this.setState({
//       renderPosts()
//       user_posts: appointments
//   })
// }
 
  componentDidMount() {
    setTimeout(function() { //Start the timer
      this.setState({render: true}) //After 1 second, set render to true
  }.bind(this), 5000)
 
 
        let appointments = this.props.posts;
        console.log(this.state)
        console.log(this.props)
        console.log(appointments)
        for (let i = 0; i < appointments.length; i++) {
          const dateParse = appointments[i].date.split('/')
          const monthIndex = parseInt(dateParse[0]) - 1
              appointments[i].start = new Date(parseInt(dateParse[2]), monthIndex, parseInt(dateParse[1]), 1, 0)
              appointments[i].end = new Date(parseInt(dateParse[2]), monthIndex, parseInt(dateParse[1]), 23, 0)
              appointments[i].title = [appointments[i].number]
            }
            this.setState({
              user_posts: appointments
            })
          
        }
        

  render() {
    const { user_posts } = this.state
    
    return (
      <div className='calendar5' style={{ height: 1000 }}>
            
          <Calendar
            events={user_posts}
            localizer={localizer}
            step={30} 
            timeslots={8}
            defaultView='month'
            views={['month','week','day']}
            defaultDate={new Date()}
            startAccessor='start'
            endAccessor='end'
          />

        </div>
    );
  }
}


export default Calendar5;



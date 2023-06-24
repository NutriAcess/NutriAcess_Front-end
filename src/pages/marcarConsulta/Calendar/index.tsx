import React from 'react';
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import "./styles.css";

const CalendarBox: React.FC<any> = ({yearMonth, consumptions, setDate}) => {
	function dayClick (value: any) {
		let yearClick  = new Date(value).getFullYear()
		let monthClick = new Date(value).getMonth()
		let dayClick   = new Date(value).getDate()

		setDate({
			year: yearClick,
			month: monthClick,
			day: dayClick
		})
	}

  	return <div className="calendarBox">
		<Calendar minDate={new Date()} onClickDay={dayClick}/>
	</div>
}

export default CalendarBox;
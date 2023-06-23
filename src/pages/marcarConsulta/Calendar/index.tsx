import React from 'react';
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import "./styles.css";

  
const CalendarBox: React.FC<any> = ({yearMonth, consumptions}) => {
	//const modal 	 = useContext(ModalContext);
	

	function dayClick (value: any) {
		let yearClick  = new Date(value).getFullYear()
		let monthClick = new Date(value).getMonth()
		let dayClick   = new Date(value).getDate()


		console.log(yearClick)
		console.log(monthClick)
		console.log(dayClick)
	}

  	return <div className="calendarBox">
		<Calendar minDate={new Date()} onClickDay={dayClick}/>

		
	</div>
}

export default CalendarBox;
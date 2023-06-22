import React from 'react';
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import "./styles.css";

const CalendarBox: React.FC<any> = ({yearMonth, consumptions}) => {
	//const modal 	 = useContext(ModalContext);
	const activeDate = yearMonth ? new Date(yearMonth[0] + '-' + (yearMonth[1]<=9 ? '0' : '') + yearMonth[1] + '-01 03:00:00') : new Date();
	const currDate   = yearMonth ? [Number(yearMonth[0]), (Number(yearMonth[1])-1)] : [new Date().getFullYear(), new Date().getMonth()];

  	function tileClassName({ date, view }:any) {
		if (view==="month" && consumptions.find((dDate: any) => dDate.day===date.getDate() && currDate[1]===date.getMonth() && dDate.times.length>0 && !dDate.times.find((el: any) => el.status.initials==='HIF') && !dDate.times.find((el: any) => el.status.initials==='HE'))) {
			return "hcc";
		} else if (view==="month" && consumptions.find((dDate: any) => dDate.day===date.getDate() && currDate[1]===date.getMonth() && dDate.times.length>0 && dDate.times.find((el: any) => el.status.initials==='HE'))) {
			return "he";
		} else if (view==="month" && consumptions.find((dDate: any) => dDate.day===date.getDate() && currDate[1]===date.getMonth() && dDate.times.length>0 && dDate.times.find((el: any) => el.status.initials==='HIF'))) {
			return "hif";
		} else if (view==="month" && currDate[1]===date.getMonth()) {
			return "dis"
		}

		return null
	}

	function dayClick (value: any) {
		let yearClick  = new Date(value).getFullYear()
		let monthClick = new Date(value).getMonth()
		let dayClick   = new Date(value).getDate()
		console.log(yearClick)
		console.log(monthClick)
		console.log(dayClick)
	}

	function treatTimes (times: any) {
		let title = (<div className="title">
            <span>Hora</span>
            <span className="status">Status</span>
            <span>MWh</span>
        </div>);

        let ret = times.map((el: any, idx: number) => {
            let statusClass = 'green';

            switch (el.status.initials) {
                case 'HIF':
                    statusClass = 'red';
                    break;

                case 'HE':
                    statusClass = 'yellow';
                    break;
            }

            // return (<div key={`time_${idx}`} className="consBox">
            //     <span>{ el.time }</span>
            //     <span className={'status ' + statusClass}>{ el.status.name }</span>
            //     <span>{ calc.consMWh(el.consKWh, true) }</span>
            // </div>);
        });

        return <>
            {title}
            {ret}
        </>;
	}

	/*function openUnits (data: any) {
        modal.setModalTitle('Minhas Unidades')
        modal.setModalBody(treatTimes(data))
        modal.setModalOpen(true)
    }*/

  	return <div className="calendarBox">
		{/* <p>{UDates._getNameMonth(currDate[1])}</p>
		<hr/> */}

		{/* <Calendar showNavigation={false} showNeighboringMonth={false} activeStartDate={activeDate} tileClassName={tileClassName} onClickDay={dayClick}/> */}
		<Calendar onClickDay={dayClick}/>
	</div>
}

export default CalendarBox;
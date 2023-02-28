import React, { Component } from 'react';
import CalendarDays from './calendar-days';
import './calendar.css';

export default class Calendar extends Component {
    constructor() {
        super();

        this.weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
        this.months = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];

        this.state = {
            currentDay: new Date()
        }
    }

    render() {
        return (
            <div className="calendar">
                <div className="calendar-header">
                    <div className="title">
                        <h2>{this.months[this.state.currentDay.getMonth()]} {this.state.currentDay.getFullYear()}</h2>
                    </div>
                </div>
                <div className="calendar-body">
                    <div className="table-header">
                        {
                            this.weekdays.map((weekday) => {
                                return <div key={weekday+1} className="weekday"><p>{weekday}</p></div>
                            })
                        }
                    </div>
                    <CalendarDays day={this.state.currentDay} changeCurrentDay={this.changeCurrentDay} />
                </div>
            </div>
        )
    }
}
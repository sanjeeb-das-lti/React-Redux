import React, { useEffect, useRef } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const DatePicker = ({ handleDate }) => {
    const datepickerRef = useRef(null);

    useEffect(() => {

        flatpickr(datepickerRef.current, {
            dateFormat: 'M d, Y',
            defaultDate: "today",
            minDate: "today",
            onChange: function (selectedDates, dateStr, instance) {
                handleDate(dateStr)
            },
        });
    }, []);

    return (
        <input
            type='date'
            ref={datepickerRef}
            className='cursor-pointer p-2 font-semibold w-40 text-base bg-transparent border-none ring-2 rounded-md focus:outline-none focus:ring-1 focus:border-none'
        />

        // <button

        //     ref={datepickerRef}
        //     className="cursor-pointer">
        //     <Calendar />
        // </button>
    );
};

export default DatePicker;

import React, { useState, useEffect, useCallback } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import calendar from "../../assets/calendar.png";
import moment from "moment";
import { useDispatch } from "react-redux";
import "./date-picker.css";
import { changeDate } from "../../store/dates/actions";

export const DatePicker = () => {
  const [dates, setDates] = useState([
    {
      startDate: addDays(new Date(), -7),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [showPicker, setShowPicker] = useState(false);
  const dispatch = useDispatch();
  const addStoreDates = useCallback(() => {
    dispatch(
      changeDate(
        moment(dates[0].startDate).format("YYYY-MM-DD"),
        moment(dates[0].endDate).format("YYYY-MM-DD")
      )
    );
  }, [dates, dispatch]);

  useEffect(() => {
    addStoreDates();
  }, [dates, addStoreDates]);

  const handlerAddDate = (e) => {
    setDates([e.selection]);
  };

  return (
    <div className="date-picker-container">
      <button
        className="toggleDatePicker"
        onClick={() => setShowPicker(!showPicker)}
      >
        <img src={calendar} alt="calendar" />
        <span className="startDate">
          {moment(dates[0].startDate).format("YYYY-MM-DD")}
        </span>
        -
        <span className="endDate">
          {moment(dates[0].endDate).format("YYYY-MM-DD")}
        </span>
      </button>
      <div className={`date-picker ${showPicker ? "is-show" : ""}`}>
        <DateRangePicker
          onChange={handlerAddDate}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          ranges={dates}
          direction="horizontal"
        />
      </div>
    </div>
  );
};

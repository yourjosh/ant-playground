import {DatePicker as AntDatePicker, message} from "antd";
import React, {FC, useState} from "react";

export type DatePickerProps = {
  styles: any
}

const DatePicker: FC<DatePickerProps> = ({
  styles,
}) => {

  const [date, setDate] = useState(null);
  // value is implicity any - not strict
  // @ts-ignore
  const handleChange = value => {
    message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    setDate(value);
  };

  return (
    <div style={styles && styles}>
      <AntDatePicker onChange={handleChange}/>
      <div style={{marginTop: 16}}>
        {/* @ts-ignore Property 'format' does not exist on type 'never' */}
        Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
      </div>
    </div>
  )

}

export default DatePicker;

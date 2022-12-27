import React, { FC } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  startDate: Date;
  pickStartDate: (date: Date) => void;
  endDate: Date;
  pickEndDate: (date: Date) => void;
}

export const TableDatePicker: FC<Props> = props => {
  const pickLastMonth = () => {
    props.pickEndDate(new Date());
    const monthAgo = new Date();
    monthAgo.setDate(monthAgo.getDate() - 30);
    props.pickStartDate(monthAgo);
  };

  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <DatePicker
          selected={props.startDate}
          selectsStart
          startDate={props.startDate}
          endDate={props.endDate}
          onSelect={props.pickStartDate}
          dateFormat={'dd.MM.yy'}
          style={{ marginBottom: 20 }}
        />
      </div>
      <div style={{ marginBottom: 20 }}>
        <DatePicker
          selected={props.endDate}
          selectsEnd
          startDate={props.startDate}
          endDate={props.endDate}
          minDate={props.startDate}
          onSelect={props.pickEndDate}
          dateFormat={'dd.MM.yy'}
        />
      </div>
      <button onClick={pickLastMonth}>Выбрать последний месяц</button>
    </>
  );
};

export default TableDatePicker;

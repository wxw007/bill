import React, { useState, useEffect } from "react";
import { Popup, DatePicker, Icon } from "zarm";

import s from "./index.module.less";

export default (props) => {
  const [visiable, setVisiable] = useState(true);
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [dateValue, setDateValue] = useState('');

  return (
    <>
      <Popup visible={props.visible}>
        <div className={s.wrapper}>
          <div className={s.closeRow}>
            <span className={s.close}>
              <Icon
                type="wrong"
                onClick={() => {
                  props.setVisible(false);
                }}
              />
            </span>
          </div>
          <div className={s.filterRow}>
            <div className={s.typeIconGroup}>
              <div className={`${s.typeIcon} active`}>支出</div>
              <div className={s.typeIcon}>收入</div>
            </div>
            <div className={s.datePicler} onClick={() =>{setDatePickerVisible(true)}}>
                日期选择
            </div>
          </div>
        </div>
          </Popup>
          <DatePicker
                visible={datePickerVisible}
                value={dateValue}
                onCancel={() => setDatePickerVisible(false)}
                onOk={(v) => {
                  setDatePickerVisible(false);
                }}
              />
    </>
  );
};

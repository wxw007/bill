import React, { useState } from "react";
import { Icon, Pull, DatePicker, Popup } from "zarm";
import PayType from "../components/payType";

import s from "./index.module.less";

export default () => {
  document.title = "账单";
  const [billList, setBillList] = useState([1, 1, 1, 1]);

  const [date, setDate] = useState("2020-11");
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);
  const [selectObj, setSelectObj] = useState({
    value: 'all',
    label: '全部类型'
  });

  const [payTypeVisible, setPayTypeVisible] = useState(false);
  const typeSelect = (item) => {
    setSelectObj(item)
    console.log('item', item)
    console.log('selectObj', selectObj)
    setPayTypeVisible(false)

  }

  Date.prototype.format = function (fmt) {
    var o = {
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日
      "h+": this.getHours(), //小时
      "m+": this.getMinutes(), //分
      "s+": this.getSeconds(), //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      S: this.getMilliseconds(), //毫秒
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (this.getFullYear() + "").substr(4 - RegExp.$1.length)
      );
    }
    for (var k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length == 1
            ? o[k]
            : ("00" + o[k]).substr(("" + o[k]).length)
        );
      }
    }
    return fmt;
  };
  const selectDate = (val) => {
    let d = new Date(val).format("yyyy-MM")
    console.log(d)
    setDate(d);
  };
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.addIcon}>
          <Icon type="tianjia" />
        </div>
        <div className={s["topAmount"]}>
          <div className={s.leftBox}>
            <div className={`${s.payout}`}>
              支出:<span className={s.money}>￥1000.00</span>
            </div>
            <div className={s.income}>
              收入:
              <span className={s.money}>￥1000.00</span>
            </div>
          </div>
          <div className={s.rightBox}>
            <div className={s.filterIcon} onClick={()=>setPayTypeVisible(true)}>
              {selectObj.label} <Icon className={s.arrow} type="arrow-bottom" />
            </div>
            <div
              className={`${s.filterIcon} ${s.date}`}
              onClick={() => setVisible(true)}
            >
              {date} <Icon className={s.arrow} type="arrow-bottom" />
            </div>
          </div>
        </div>

        <div className={s.list}>
          {billList.map((item, index) => {
            return (
              <div className={s.item} key={index}>
                <div className={s.itemTop}>
                  <div className={s.date}>2021-11-11</div>
                  <div className={s.moneyInfo}>
                    <div className={s.moneyInfoItem}>
                      <div className={`${s.fIcon} ${s.green}`}>支</div>
                      <div className={s.bold}>￥100.00</div>
                    </div>
                    <div className={s.moneyInfoItem}>
                      <div className={`${s.fIcon} ${s.red}`}>收</div>
                      <div className={s.bold}>￥100.00</div>
                    </div>
                  </div>
                </div>
                <div className={s.payDetailItem}>
                  <div className={s.productRow}>
                    <div className={s.goodsName}>购物</div>
                    <div className={s.payout}>-888.00</div>
                  </div>
                  <div className={s.mark}>我可以不用但我不能没有</div>
                  <div className={s.time}>15:00</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <DatePicker
        visible={visible}
        mode="month"
        value={value}
        onCancel={() => setVisible(false)}
        onOk={(v) => {
          selectDate(v);
          setVisible(false)
        }}
      />
      <PayType visible={payTypeVisible} value="all" typeSelect={typeSelect} />
    </>
  );
};

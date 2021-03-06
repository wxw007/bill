import React, { useState, useEffect, useRef } from "react";
import { Icon, Pull, DatePicker, Popup } from "zarm";
import PayType from "../components/payType";
import AddPayment from "../components/addPayment"

import s from "./index.module.less";

export default () => {
  document.title = "账单";
  const [billList, setBillList] = useState([1, 1, 1, 1]);
  console.log('billList',billList)

  const [date, setDate] = useState("2020-11");
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false); 
  const [addPaymentVisible, setAddPaymentVisible] = useState(true); 
  const [selectObj, setSelectObj] = useState({
    value: "all",
    label: "全部类型",
  });

  const [payTypeVisible, setPayTypeVisible] = useState(false);
  const typeSelect = (item) => {
    setSelectObj(item);
  };

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
    let d = new Date(val).format("yyyy-MM");
    console.log(d);
    setDate(d);
  };
  const fn = () => {
    setPayTypeVisible(true);
  };
  useEffect(() => {
    console.log("payTypeVisible", payTypeVisible);
  }, [payTypeVisible]);

  // 下拉刷新、上拉加载 S
  const REFRESH_STATE = {
    normal: 0, // 普通
    pull: 1, // 下拉刷新（未满足刷新条件）
    drop: 2, // 释放立即刷新（满足刷新条件）
    loading: 3, // 加载中
    success: 4, // 加载成功
    failure: 5, // 加载失败
  };

  const LOAD_STATE = {
    normal: 0, // 普通
    abort: 1, // 中止
    loading: 2, // 加载中
    success: 3, // 加载成功
    failure: 4, // 加载失败
    complete: 5, // 加载完成（无新数据）
  };
  const [refreshing, setRefreshing] = useState(REFRESH_STATE.normal);
  const [loading, setLoading] = useState(LOAD_STATE.normal);
  let canDo = true
  // 模拟请求数据
  const refreshData = () => {
    console.log('canDo', canDo)
    if (!canDo) return;
    console.log('开始加载', canDo)
    setRefreshing(REFRESH_STATE.loading);
    canDo = false
    setTimeout(() => {
      console.log('刷新结束')
      canDo = true
      setRefreshing(REFRESH_STATE.success);
    }, 2000);
  };
  // 模拟加载数据
  const loadData = () => {
    console.log('开始加载', canDo)
    canDo = false
    setLoading(REFRESH_STATE.loading);
    setTimeout(() => {
      canDo = true
      console.log('加载成功')
      let arr = [1, 2, 3];
      let list1 = billList.concat(arr)
      setBillList(list1)
      setLoading(REFRESH_STATE.success);
    }, 2000);
  };
  return (
    <>
      {/* <Test fn={(v)=>{ console.log(v)}} /> */}

      <div className={s.wrapper}>
        <div className={s.addIcon}>
          <Icon type="tianjia" onClick={() =>{setAddPaymentVisible(true)}} />
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
            <div className={s.filterIcon} onClick={fn}>
              <span>{selectObj.label}</span>{" "}
              <Icon className={s.arrow} type="arrow-bottom" />
            </div>
            <div
              className={`${s.filterIcon} ${s.date}`}
              onClick={() => setVisible(true)}
            >
              <span>{date}</span>{" "}
              <Icon className={s.arrow} type="arrow-bottom" />
            </div>
          </div>
        </div>
        <Pull
          className={s.list}
          style={{ overflow: "auto" }}
          refresh={{
            state: refreshing,
            handler: refreshData,
          }}
          load={{
            state: loading,
            distance: 200,
            handler: loadData,
          }}
        >
          <div>
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
        </Pull>
      </div>
      <DatePicker
        visible={visible}
        mode="month"
        value={value}
        onCancel={() => setVisible(false)}
        onOk={(v) => {
          selectDate(v);
          setVisible(false);
        }}
      />

      <PayType
        visible={payTypeVisible}
        value={selectObj.value}
        typeSelect={typeSelect}
        setPayTypeVisible={setPayTypeVisible}
      />
      <AddPayment visible={addPaymentVisible} setVisible={setAddPaymentVisible} />
    </>
  );
};

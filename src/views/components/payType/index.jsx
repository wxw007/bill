import React, { useState } from "react";
import { Popup, Icon } from "zarm";

import s from "./index.module.less";
import cx from "classnames";
export default (props) => {
  const selectHandle = (obj) => {
    console.log('obj', obj)
    props.typeSelect(obj);
  };

  // 支出类型
  const [payType, setPayType] = useState([
    {
      value: "food",
      label: "餐饮",
    },
    {
      value: "shopping",
      label: "购物",
    },
    {
      value: "jiaotong",
      label: "交通",
    },
  ]);
  // 支出类型
  const [incomeType, setIncomeType] = useState([
    {
      value: "gongzi",
      label: "工资",
    },
    {
      value: "gupiao",
      label: "股票",
    },
    {
      value: "jiangjin",
      label: "奖金",
    },
  ]);

  return (
    <>
      <Popup visible={props.visible} direction="bottom">
        <div className={s.wrapper}>
          <div className={s.title}>
            <span>请选择类型</span>
            <Icon type="wrong" className={s.close} />
          </div>
        </div>
        <div className={s.contentBox}>
          <div className={s.itemBox}>
            <div className={s.typeList}>
              <div
                className={cx({
                  [s.typeItem]: true,
                  [s.active]: props.value === "all",
                })}
                onClick={() => {
                  selectHandle({ label: "全部类型", value: "all" });
                }}
              >
                全部类型
              </div>
            </div>
          </div>
          <div className={s.itemBox}>
            <div className={s.payType}>支出</div>
            <div className={s.typeList}>
              {payType.map((item) => {
                return (
                  <div
                    key={item.value}
                    className={cx({
                      [s.typeItem]: true,
                      [s.active]: props.value === item.value,
                    })}
                    onClick={() => {
                      selectHandle(item);
                    }}
                  >
                    {item.label}
                  </div>
                );
              })}
            </div>
          </div>
          <div className={s.itemBox}>
            <div className={s.payType}>收入</div>
            <div className={s.typeList}>
              {incomeType.map((item) => {
                return (
                  <div
                    key={item.value}
                    className={cx({
                      [s.typeItem]: true,
                      [s.active]: props.value === item.value,
                    })}
                    onClick={() => {
                      selectHandle(item);
                    }}
                  >
                    {item.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
};

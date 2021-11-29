import React from "react";
import { Icon, Pull } from "zarm";

import s from "./index.module.less";

export default () => {
  document.title = "账单";

  return (
    <>
      <div className={s.wrapper}>
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
            <div className={s.filterIcon}>
              全部类型 <Icon className={s.arrow} type="arrow-bottom" />
            </div>
            <div className={`${s.filterIcon} ${s.date}`}>
              2021-11 <Icon className={s.arrow} type="arrow-bottom" />
            </div>
          </div>
        </div>

        <div className={s.list}>
          <div className={s.item}>
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
              <div className={s.mark}>我可以不要但我不能没有</div>
              <div className={s.time}>15:00</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

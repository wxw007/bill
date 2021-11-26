import React, { useState, useEffect } from "react";
import { Cell, Input, Button, Toast } from "zarm";
import CustomIcon from "@/components/CustomIcon";
import Captcha from "react-captcha-code";
import s from "./style.module.less";
import { useHistory } from "react-router-dom";

const login = () => {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [verify, setVerify] = useState("");
  const [type, setType] = useState("login");
  useEffect(() => {
    document.title = type === "login" ? "登录" : "注册";
  }, [type]);

  // 验证码
  const [captcha, setCaptcha] = useState("");
  const captchaChange = (v) => {
    setCaptcha(v);
  };

  // 登录
  const login = () => {
    if (!userName) {
      Toast.show("请输入账号");
      return;
    }
    if (!password) {
      Toast.show("请输入密码");
      return;
    }
    history.push("/");
  };

  // 注册
  const regist = () => {
    if (!userName) {
      Toast.show("请输入账号");
      return;
    }
    if (!password) {
      Toast.show("请输入密码");
      return;
    }
    if (!verify) {
      Toast.show("请输入验证码");
      return;
    }
    if (verify !== captcha) {
      Toast.show("验证码不正确");
      return;
    }
  };

  // 提交
  const submit = () => {
    if (type === "login") {
      login();
    } else {
      regist();
    }
  };
  let bottomTips = null;
  if (type === "login") {
    bottomTips = (
      <p
        className={s.switch}
        onClick={() => {
          setType("regist");
        }}
      >
        没有账号还不去注册？
      </p>
    );
  } else {
    bottomTips = (
      <p
        className={s.switch}
        onClick={() => {
          setType("login");
        }}
      >
        去登录
      </p>
    );
  }
  return (
    <div className={s.wrapper}>
      <img
        className={s.img}
        src="//s.yezgea02.com/1616032174786/cryptocurrency.png"
        alt=""
      />
      <Cell title="账号" icon={<CustomIcon type="zhanghao" />}>
        <Input
          clearable
          type="text"
          placeholder="请输入"
          value={userName}
          onChange={setUserName}
        />
      </Cell>
      <Cell title="密码" icon={<CustomIcon type="mima" />}>
        <Input
          type="password"
          placeholder="请输入"
          value={password}
          onChange={setPassword}
        />
      </Cell>

      {type === "login" ? (
        ""
      ) : (
        <Cell title="验证码" icon={<CustomIcon type="mima" />}>
          <Input
            type="text"
            placeholder="请输入"
            value={verify}
            onChange={setVerify}
            clearable={false}
          />
          <Captcha charNum={4} onChange={captchaChange} />
        </Cell>
      )}
      <Cell>
        <Button block theme="primary" onClick={submit}>
          {type === "login" ? "登录" : "注册"}
        </Button>
      </Cell>
      <Cell>{bottomTips}</Cell>
    </div>
  );
};
export default login;

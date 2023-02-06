import classes from "./authorization.module.css";
import { motion } from "framer-motion";
import { getAutoValue } from "@/store/slice/auth";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Authorization = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
const [formValid, setFormValid] = useState(false)    

    useEffect(()=>{
        if(emailError || passwordError){
            setFormValid(false)
        }else{
            setFormValid(true)
        }
    },[emailError,passwordError])
  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный Email");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 ) {
      setPasswordError("Пароль должень содержать больше 3");
      if(!e.target.value){
        setPasswordError("Пароль не может быть пустым");
      }
    } else {
        setPasswordError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={classes.Authorization}
    >
      <div className={classes.inner}>
        <div className={classes.top}>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => dispatch(getAutoValue(false))}
          />
          <p className={classes.title}>Пожалуйста, авторизуйтесь:</p>
        </div>
        <form>
          <input
            value={email}
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => emailHandler(e)}
            name="email"
            type="text"
            placeholder="Email"
          />
          {emailDirty && emailError && (
            <div style={{ color: "red" }}>{emailError}</div>
          )}
          <input
            value={password}
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => passwordHandler(e)}
            name="password"
            type="password"
            placeholder="Пароль"
          />
          {passwordDirty && passwordError && (
            <div style={{ color: "red" }}>{passwordError}</div>
          )}
          <button disabled={!formValid} type="submit">Войти</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Authorization;

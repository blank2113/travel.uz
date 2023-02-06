import classes from "./authorization.module.css";
import { motion } from "framer-motion";
import { getAutoValue } from "@/store/slice/auth";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Authorization = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur"
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset()
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={classes.Authorization}>
      <div className={classes.inner}>
        <div className={classes.top}>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => dispatch(getAutoValue(false))}
          />
          <p className={classes.title}>Пожалуйста, авторизуйтесь:</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <input
              type="email"
              {...register("email", {
                required: "Поле обязательно к заполнению!",
                pattern:/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
              })}
              placeholder="Email"
            />
          </label>
          <div style={{ height: 40 }}>
            {errors?.email && <p>{errors?.email.message || "Error!"}</p>}
          </div>
          <label>
            <input type="password" {...register("password",{
              required:"Поле обязательно к заполнению!",
              minLength :{
                value:8,
                message: "Минимум 8 символов"
              }
            })}/>
          </label>
          <div style={{ height: 40 }}>
            {errors?.password && <p>{errors?.password.message || "Error!"}</p>}
          </div>
          <input type="submit" disabled={!isValid}/>
        </form>
      </div>
    </motion.div>
  );
};

export default Authorization;

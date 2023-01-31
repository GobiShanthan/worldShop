import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastMessagesContainer, ToastContainer } from "./Toast.styled";

import { deleteFromToast } from "../../redux/slice/toastSlice";

const Toast = () => {
  const dispatch = useDispatch();

  //REDUX DATA
  const toastData = useSelector((state) => state.toastData);
  const { toastMsgs } = toastData;


  //USE EFFECT TO TRIGGER DISPATCH SHIFT TO REDUX TOAST MESSAGES ARRAY EVERY 1.5 SECS
  useEffect(() => {
    const interval = setInterval(() => {
        if (toastMsgs.length > 0) {
          dispatch(deleteFromToast());
        }
      }, [1500]);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch, toastMsgs]);

  return (
    <ToastMessagesContainer>
      {toastMsgs &&
        toastMsgs.map((t) => (
          <ToastContainer success={t.success}>{t.msg}</ToastContainer>
        ))}
    </ToastMessagesContainer>
  );
};

export default Toast;

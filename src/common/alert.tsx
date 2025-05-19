"use client";
import React, { useEffect, useState } from "react";
import style from "./alert.module.css";
import { GoIssueClosed } from "react-icons/go";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

interface DataType {
  data: {
    type: "success" | "error" | "info" | "",
    show: boolean,
    message: string
  }
}

export default function Alert({ dataAsk }: { dataAsk: DataType }) {
  
  const [details, setDetails] = useState({
    color: "#2a3e2c",
    bgcolor: "#a8f1c6",
    border: "#1c8149",
    icon: <GoIssueClosed size={20} />,
  });
  const [data, setData] = useState<DataType>(dataAsk);

  const showHandler = () => {
    setData({ data: { message: "", type: "", show: false } });
  };

  useEffect(() => {
    console.log(dataAsk);
    setData(dataAsk);

    if (dataAsk?.data?.type === "success") {
      setDetails({
        color: "#2a3e2c",
        bgcolor: "#a8f1c6",
        border: "#1c8149",
        icon: <GoIssueClosed size={20} color="black" />,
      });
    } else if (dataAsk?.data?.type === "error") {
      setDetails({
        color: "#2a3e2c",
        bgcolor: "#f6a7a3",
        border: "#741d1d",
        icon: <IoIosCloseCircleOutline size={20} />,
      });
    } else if (dataAsk?.data?.type === "info") {
      setDetails({
        color: "#111",
        bgcolor: "#f4f4f4",
        border: "#741d1d",
        icon: <IoIosCloseCircleOutline size={20} />,
      });
    }

    const timeoutId = setTimeout(() => {
      showHandler();
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [dataAsk]);

  return (
    <div
      className={style.main}
      style={{
        display: `${data?.data.show ? "flex" : "none"}`,
        backgroundColor: `${details.bgcolor}`,
        borderLeft: `5px solid ${details.border}`,
        zIndex: "9999999999"
      }}
    >
      <p style={{ color: `${details.color}` }}>
        {" "}
        <span>{details.icon}</span> {data?.data.message ?? "message"}
      </p>
      <span onClick={showHandler}>
        <AiOutlineClose size={20} />
      </span>
    </div>
  );
}

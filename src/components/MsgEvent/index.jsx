import { useEffect, useState } from "react";
import "./style.css";

export default function MsgEvent({ text = "Press Space to stop!" }) {
  const [showMsg, setShowMsg] = useState(true);

  useEffect(() => {
    const msgTimer = setTimeout(() => {
      setShowMsg(false);
    }, 4000);

    return () => clearTimeout(msgTimer);
  }, []);

  return <>{showMsg && <span className="msgEvent enter">{text}</span>}</>;
}

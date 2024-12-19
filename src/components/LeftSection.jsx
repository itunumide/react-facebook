import { useRef, useState } from "react";

const LeftSection = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);

  const clickButton = useRef(null);
  return (
    <div style={{ width: "400px", padding: "40px 10px" }}>
      <h1
        style={{
          color: "blue",
          fontSize: "3rem",
          fontWeight: "600",
          lineHeight: "15px",
        }}
      >
        facebook
      </h1>
      <p style={{ fontSize: "1.1rem", fontWeight: "400", width: "350px" }}>
        Facebook helps you connect and share with the people in your life.
      </p>
    </div>
  );
};

export default LeftSection;

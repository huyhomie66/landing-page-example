import "./AppFunc.css";
import React from "react";
import Container from "./Container";

const AppFuncField = ({ image, title, descriptions }) => {
  return (
    <div className="col">
      {image && <img src={image} alt={title} />}
      <h3>{title && title}</h3>
      {descriptions &&
        descriptions.map((description, i) => <p key={i}>{description}</p>)}
    </div>
  );
};

const AppFunc = () => {
  const appFuncs = [
    {
      title: "Bảo mật",
      image: require("../assets/icon/covitrack1.svg"),
      descriptions: [
        "Xác thực số điện thoại bằng OTP của Bộ Y tế",
        "Bên thứ ba ko thể lấy được thông tin của bạn khi chưa xác thự",
        "Thông tin bluetooth phát ra được hệ thống ký và cập nhật mỗi ngày, giảm tối đa khả năng có người phát tín hiệu mạo danh",
      ],
    },
    {
      title: "Quét chính xác, tốc độ cao",
      image: require("../assets/icon/covitrack2.svg"),
      descriptions: [
        "Chỉ quét các thiết bị là người dùng trong hệ thống",
        "Lưu lại cả những tiếp xúc gián tiếp",
        "Chạy trong môi trường ko có internet",
        "Có thể sử dụng đồng thời cùng các ứng dụng khác, và cả lúc tắt màn hình",
      ],
    },
    {
      title: "Ẩn danh",
      image: require("../assets/icon/covitrack3.svg"),
      descriptions: [
        "Người dùng được ẩn danh với những người khác",
        "Chỉ khi nhiễm Covid-19 hoặc có nguy cơ lây nhiễm, bạn có thể chia sẻ dữ liệu này cho cơ quan Y tế có thẩm quyền",
      ],
    },
    {
      title: "Người dùng kiểm soát dữ liệu",
      image: require("../assets/icon/covitrack4.svg"),
      descriptions: [
        "Người dùng có thể cho phép truy cập vị trí hoặc không",
        "Người dùng có toàn quyền đăng xuất bất cứ lúc nào",
      ],
    },
  ];
  return (
    <Container className="app-funcs" wrapperClassName="app-funcs-wrapper">
      {appFuncs.map((func, i) => (
        <AppFuncField
          key={i}
          title={func.title}
          image={func.image}
          descriptions={func.descriptions}
        />
      ))}
    </Container>
  );
};

export default AppFunc;

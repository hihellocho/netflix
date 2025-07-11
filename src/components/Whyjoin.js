import { IoIosTv } from "react-icons/io";
import { GiSaveArrow } from "react-icons/gi";
import { IoTelescope } from "react-icons/io5";
import { HiMiniFaceSmile } from "react-icons/hi2";

const Whyjoin = () => {
  const reasons = [
    {
      id: 1,
      title: "TV로 즐기세요",
      disc: "스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.",
      icon: <IoIosTv />,
    },
    {
      id: 2,
      title: "TV로 즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요",
      disc: "간편하게 저장하고 빈틈없이 즐겨보세요.",
      icon: <GiSaveArrow />,
    },
    {
      id: 3,
      title: "TV로 다양한 디바이스로 시청하세요",
      disc: "각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요.",
      icon: <IoTelescope />,
    },
    {
      id: 4,
      title: "TV로 어린이 전용 프로필을 만들어 보세요",
      disc: "자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다.",
      icon: <HiMiniFaceSmile />,
    },
  ];
  return (
    <div className="why-join">
      <h2>가입해야 하는 또 다른 이유</h2>
      <ul>
        {reasons.map((item) => {
          return (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.disc}</p>
              <div>{item.icon}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Whyjoin;

import cls from "./style.module.scss";

const HelloWidget = () => {
  return (
    <h2 className={cls.text}>
      Hello Payload!🧨
    </h2>
  );
};

export default HelloWidget
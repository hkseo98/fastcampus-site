import useCounter from "store/modules/counter/counterHooks";
import useUser from "store/modules/user/userHooks";

const TestRedux = () => {
  const { isLoggedIn, login, logout } = useUser();
  const { value, add, subtract } = useCounter();

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "30px",
            color: "orange",
            fontFamily: "Helvetica",
          }}
        >
          counter App
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "30px",
            color: "orange",
            fontFamily: "Helvetica",
          }}
        >
          <span>{value}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",

            color: "orange",
            fontFamily: "Helvetica",
          }}
        >
          <button
            style={{ width: "30px", marginRight: "5px" }}
            onClick={() => add()}
          >
            +
          </button>
          <button
            style={{ width: "30px", marginLeft: "5px" }}
            onClick={() => subtract()}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestRedux;

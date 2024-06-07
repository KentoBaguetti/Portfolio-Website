import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <div className="typewriter">
      <div className="typewriter-text">
        <Typewriter
          options={{
            strings: [
              "Software Engineer . . . ",
              "Computer Science Student . . . ",
            ],
            autoStart: true,
            loop: true,
            delay: 60,
            deleteSpeed: 20,
          }}
        />
      </div>
    </div>
  );
};

export default Type;

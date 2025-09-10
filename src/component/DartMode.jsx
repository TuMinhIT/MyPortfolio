const DartMode = ({ dart, setDart }) => {
  return (
    <>
      {dart && (
        <div
          onClick={() => setDart(false)}
          className={`absolute top-4 right-8 rounded-full bg-gray-500`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="M40-360v-80h160v80H40Zm400-320v-200h80v200h-80Zm266 110-56-56 113-113 57 56-114 113Zm54 210v-80h160v80H760Zm31 305L606-240H280v-120h206L55-791l57-57 736 736-57 57Z" />
          </svg>
        </div>
      )}
      {!dart && (
        <div
          onClick={() => setDart(true)}
          className={`absolute top-4 right-8 rounded-full bg-amber-300`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FFFF55"
          >
            <path d="M40-360v-80h160v80H40Zm214-210L141-683l56-57 113 114-56 56Zm26 330v-120h400v120H280Zm160-440v-200h80v200h-80Zm266 110-56-56 113-113 57 56-114 113Zm54 210v-80h160v80H760Z" />
          </svg>
        </div>
      )}
    </>
  );
};

export default DartMode;

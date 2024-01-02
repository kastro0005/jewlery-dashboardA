import { connect } from "react-redux";

function Loading() {
  return (
    <div className=" pt-80 flex-col gap-4 w-full flex items-center justify-center">
      <div className="w-50 h-50 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
        <img
          src="https://imagedelivery.net/a5TfjzZDPNM57yn2-rwdsg/77caeae8-09b6-4a75-90f5-7990ee9e3700/public"
          alt=""
          fill="currentColor"
          height="100"
          width="100"
          className="animate-ping"
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {})(Loading);

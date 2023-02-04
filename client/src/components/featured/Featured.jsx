import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=dhaka,khulna,dinajpur"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://media.istockphoto.com/id/1411872473/photo/the-city-of-dhaka-skyline-at-night-bangladesh-stock-photo.jpg?s=1024x1024&w=is&k=20&c=9nGO4zUHF997jqUteOO92-wc3WEnvBE1YXpK8jGcdF8="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Dhaka</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://media.istockphoto.com/id/1074152730/photo/khan-jahan-ali-bridge.jpg?s=1024x1024&w=is&k=20&c=6H_KHQi4nR0PJgCXA2R6AGZF12wNZxoPp_Ae8wZPQXg="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Khulna</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://media.istockphoto.com/id/696604402/photo/haifa-landscape-at-night.jpg?s=1024x1024&w=is&k=20&c=iLc_35y1UTD6bFc0aLGBfRAn_okaI8iNxQWQtCW6lz8="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Dinajpur</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;

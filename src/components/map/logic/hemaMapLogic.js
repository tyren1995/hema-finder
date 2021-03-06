import { useState, useEffect } from "react"


const HemaMapLogic = () => {
  const [userLat, setUserLat] = useState();
  const [userLong, setUserLong] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setUserLat(position.coords.latitude);
      setUserLong(position.coords.longitude);
    });
  }, [])
  return { userLat, userLong };
}
export default HemaMapLogic;
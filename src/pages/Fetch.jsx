import { useEffect, useState } from "react";

function Fetch(url) {
  const [data, setData] = useState();
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((json) => setData(json));
    }, 1000);
  }, []);
  return { data };
}

export default Fetch;

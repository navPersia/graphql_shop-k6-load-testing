import http from "k6/http";
import { check, sleep } from "k6";

const BASE_URL = "https://10.151.19.83:6443/id-org/sandbox/shopapi/graphql";

export let options = {
  // stages: [
  //   { duration: "60s", target: 180 },
  //   { duration: "60s", target: 190 },
  //   { duration: "60s", target: 200 },
  //   { duration: "60s", target: 210 },
  //   { duration: "60s", target: 220 },
  //  ]
  vus: 190,
  duration: "60s"
 };


 


export default function() {
  let query = `
  {
    products{
        id
        name
        description
        quantity
        price
        onSale
        image
      category{
          name
          id  
        }
      reviews{
        id
        date
        title
        comment
        rating
      }
    }
  }`;
  let res = http.post(
    BASE_URL,
    JSON.stringify({ query: query }),
    { headers: { "X-IBM-Client-Id": "6982b04a2ea72b1d91a555fcb6616431" } }
  );
  check(res, {
    "Status is 200": (r) => r.status == 200
  });
}


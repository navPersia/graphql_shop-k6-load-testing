import http from "k6/http";
import { check, sleep } from "k6";

const BASE_URL = "https://204.168.225.149:9443/wisse-ict/sandbox/shopapi/graphql";

export let options = {
  stages: [
     { duration: "3s", target: 1 },
     { duration: "3s", target: 10 },
     { duration: "5s", target: 100 },
     { duration: "10s", target: 1000 }
   ]
 };

// export function setup() {
//   // setup code
//   return {}
// }

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

// export function teardown(data) {
//     // teardown code
// }
import http from "k6/http";
import { check } from "k6";

export const options = {
  vus: 120,
  duration: "60s",
};

export default function () {
  const res = http.get("http://localhost:4001/health");
  check(res, {
    "status is 200": (r) => r.status === 200,
  });
}

import { getCookie } from "cookies-next";

export default function getCorsHeaders() {
  const token = getCookie("accessToken");

  const corsHeaders = {
    "Authorization": `Bearer ${token}`,
  };

  return corsHeaders;

}
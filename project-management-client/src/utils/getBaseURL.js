// - \src\utils\getBaseURL.js - returns base url

export default function getBaseURL() {
  return process.env.NEXT_PUBLIC_ENV_API_URL || "http://api.dtreetech.net"
}
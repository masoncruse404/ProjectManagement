
export default function getCorsHeadersNoToken() {

  const corsHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://project-management.masoncruse.com/",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-PINGOTHER",
  };

  return corsHeaders;

}
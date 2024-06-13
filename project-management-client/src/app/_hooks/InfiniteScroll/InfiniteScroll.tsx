"use client"
// - \src\_hooks\InfiniteScroll\InfiniteScroll - InfiniteScroll fetches clients with active projects

// REACT
import { useState, useEffect } from "react";

// NEXT.JS
import { NextPage } from "next";

// AXIOS
import axiosInstance from "@/axiosConfig";

// UTILS
import ClientList from "@/app/_components/Sidebar/Desktop/ClientContainer/ClientList/ClientList";

// CONTEXT
import { useRenderContext } from "@/app/_contexts/RenderContextProviders/RenderContextProviders";


// INTERFACE
import { ClientProps } from "./Interface/ClientPropsInterface";

// nextjs
import { useRouter } from "next/navigation"
import ClientListItemLoadingContainer from "@/app/_components/Sidebar/Desktop/Loading/ClientListItemLoadingContainer";

const InfiniteScrollContainer: NextPage = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [currentClients, setCurrentClients] = useState<ClientProps["clients"]>([])
  const [totalClients, setTotalClients] = useState<number>(0)
  const render_context = useRenderContext()
  const router = useRouter()

  const handleFetchClients = () => {
   
    axiosInstance.get("/v1/clients/")
      .then(response => {
        const { data, total } = response.data
        setTotalClients(total)
        setCurrentClients(data)
        setLoading(false)
      })
      .catch(error => {
        setError(error)
        setLoading(false)
        if ( error.request.status === 401 ){
          router.push("/login")
        }
      });
  };

  useEffect(() => handleFetchClients(), [render_context.value])

  if(loading) return (<ClientListItemLoadingContainer />)

  return (
    <>
      {/* Infinite Scroll Container Start */}
      <ClientList clients={currentClients} /> 
      {/* Infinite Scroll Container End */}
    </>
  );
};

export default InfiniteScrollContainer
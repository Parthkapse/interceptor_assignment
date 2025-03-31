import axios from 'axios'
import React from 'react'

export const Interceptor = () => {
    axios.interceptors.request.use((request)=>{
        console.log("request",request)
        request.headers.AGE=23
        return request
    })
    axios.interceptors.response.use((response)=>{
        console.log("response :",response)
        response.headers.Age=11
        return response
      })
    }

/* eslint-disable no-underscore-dangle */
import axios from 'axios'

const baseUrl = process.env.REACT_APP_API_BASE_URL

export const postRequest = (url, data, config = {}) =>
  axios.post(`${baseUrl}${url}`, data, config)

export const patch = (url, data, config = {}) =>
  axios.patch(`${baseUrl}${url}`, data, config)

export const putRequest = (url, data, config = {}) =>
  axios.put(`${baseUrl}${url}`, data, config)

export const get = (url, config = {}) => axios.get(`${baseUrl}${url}`, config)

export const remove = (url, config = {}) =>
  axios.delete(`${baseUrl}${url}`, config)

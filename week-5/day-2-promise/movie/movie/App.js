import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ACCESS_TOKEN, BaseUrl, ImageUrl } from './src/helpers/apiAccessToken'

const App = () => {
  const [listMovie, setListMovie] = useState([])
  useEffect(() => {
    getListMoviePopular()
  }, [])
  const getListMovieLatest = async () => {
    try {
      const results = await axios.get(`${BaseUrl}movie/latest`, { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } })
      setListMovie(results.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  const getListMoviePopular = async () => {
    try {
      const results = await axios.get(`${BaseUrl}movie/popular`, { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } })
      setListMovie(results.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  const getListMovieTopRated = async () => {
    try {
      const results = await axios.get(`${BaseUrl}movie/top_rated`, { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } })
      setListMovie(results.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  const getListMovieNowPlaying = async () => {
    try {
      const results = await axios.get(`${BaseUrl}movie/now_playing`, { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } })
      setListMovie(results.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  const CardMovie = ({ item }) => {
    return (
      <View>
        <Image source={{ uri: `${ImageUrl}${item.poster_path}` }} style={{ height: 200 }} resizeMode="cover" />
        <Text>{item.title}</Text>
      </View>
    )
  }

  return (
    <View>
      <Text>List Movie</Text>
      <View>
        <TouchableOpacity onPress={getListMovieLatest}>
          <Text>Latest</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={getListMoviePopular}>
          <Text>Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={getListMovieTopRated}>
          <Text>Top Rated</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={getListMovieNowPlaying}>
          <Text>Now Playing</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={listMovie} keyExtractor={(item, index) => index} renderItem={CardMovie} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
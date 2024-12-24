import React from 'react'
import Row from './Component/Row/Row'
import requests from './FromThere/request'
import Banner from './Component/Banner/Banner'
import './App.css'
import Nav from './Component/Nav/Nav'
import Footer from './Component/Footer/Footer'


function App() {
  return (
    <div className='App'>
       <Nav/>
       <Banner/> 
       <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/> 
       <Row title="Trending Now" fetchUrl={requests.fetchTrending}/> 
       <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/> 
       <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/> 
       <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/> 
       <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/> 
       <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/> 
       <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRatedMovies}/> 
       <Row title="TV shows" fetchUrl={requests.fetchTvShow}/> 
       <Footer/>
    </div>
  )
}

export default App
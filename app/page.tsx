'use client';
import React from 'react';
import NextAppBar from './components/NextAppBar.component';
import Head from 'next/head'
import MoviesList from './components/moviesList/MoviesList';

function page() {
  return (
    <div>
       <Head>
        <title>My page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <NextAppBar></NextAppBar>
      <MoviesList></MoviesList>
    </div>
  );
}

export default page;

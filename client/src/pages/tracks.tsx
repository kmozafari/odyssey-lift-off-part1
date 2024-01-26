import React from "react";
import { Layout, QueryResult } from "../components";
import { gql, useQuery } from '@apollo/client'
import TrackCard from "../containers/track-card";
import { Track } from "../__generated__/graphql";

const TRACKS = gql`query GetTracks {
  tracksForHome {
    id
    title
    author {
      id
      name
      photo
    }
    thumbnail
    length
    moduleCount
  }

}`
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);
  return <Layout grid>
    <QueryResult loading={loading} error={error} data={data}>
      {
        data?.tracksForHome.map((track: Track, index: number) => <TrackCard key={index} track={track} />)
      }
    </QueryResult>
  </Layout>;
};

export default Tracks;

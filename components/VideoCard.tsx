import React from 'react';
import { Video } from '../types';
import { NextPage } from 'next';

interface IProps {
  post: Video;
}


// const VideoCard = ({ post }: IProps) => {}
// Better and version is using NextPage
const VideoCard: NextPage<IProps> = ({ post }) => {

  return (
    <div>VideoCard</div>
  )
}

export default VideoCard
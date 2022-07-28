import React from 'react';

interface IProps {
  text: string;
}

// Use the simpler declaration without using NextPage
const NoResults = ({ text }: IProps) => {
  return (
    <div>NoResults</div>
  )
}

export default NoResults
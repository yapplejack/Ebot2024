import React from 'react';
import IdealImage from '@theme-original/IdealImage';

export default function IdealImageWrapper(props) {
  return (
    <>
      <IdealImage shouldAutoDownload={defaultShouldAutoDownload} {...props} />
    </>
  );
}

const defaultShouldAutoDownload = ({
  connection,
  size,
  threshold,
  possiblySlowNetwork,
}) => {
  return true;
}
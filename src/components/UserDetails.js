import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>User page for {id} </h1>
    </div>
  );
};

export default UserDetails;

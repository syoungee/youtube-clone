import React from 'react';
import { useParams } from 'react-router-dom';
import SearchHeader from '../components/SearchHeader';

export default function Videos() {
  const { keyword } = useParams();
  return (
    <div>
      <SearchHeader />
      Videos {keyword}
    </div>
  );
}

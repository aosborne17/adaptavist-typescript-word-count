import React from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import './ListControls.css';

interface ListControlsProps {
  sortType: string;
  setSortType: React.Dispatch<React.SetStateAction<string>>;
  sortDirection: string;
  setSortDirection: React.Dispatch<React.SetStateAction<string>>;
  removeNonWords: boolean;
  setRemoveNonWords: React.Dispatch<React.SetStateAction<boolean>>;
}

function handleSorting(
  sortType: string,
  setSortType: React.Dispatch<React.SetStateAction<string>>,
  sortDirection: string,
  setSortDirection: React.Dispatch<React.SetStateAction<string>>,
  newType: string
) {
  if (sortType === newType) {
    if (sortDirection === 'asc') setSortDirection('desc');
    if (sortDirection === 'desc') {
      setSortDirection('');
      setSortType('');
    }
    if (sortDirection === '') setSortDirection('asc');
  } else {
    setSortType(newType);
    setSortDirection('asc');
  }
}

function renderSortIcon(sortDirection: string) {
  if (sortDirection === 'asc') return <ArrowCircleUpIcon />;
  if (sortDirection === 'desc') return <ArrowCircleDownIcon />;
  return null;
}

const ListControls = ({
  sortType,
  setSortType,
  sortDirection,
  setSortDirection,
  removeNonWords,
  setRemoveNonWords,
}: ListControlsProps) => {
  return (
    <div className="list-controls">
      <div className="list-controls-button-container">
        <button
          className="btn"
          type="button"
          onClick={() =>
            handleSorting(
              sortType,
              setSortType,
              sortDirection,
              setSortDirection,
              'alphabetical'
            )
          }
        >
          Sort Alphabetically
        </button>
        {sortType === 'alphabetical' && renderSortIcon(sortDirection)}
      </div>

      <div className="list-controls-button-container">
        <button
          className="btn btn-white"
          type="button"
          onClick={() =>
            handleSorting(
              sortType,
              setSortType,
              sortDirection,
              setSortDirection,
              'numerical'
            )
          }
        >
          Sort Numerically
        </button>
        {sortType === 'numerical' && renderSortIcon(sortDirection)}
      </div>
      <div className="list-controls-button-container">
        <button
          className="btn btn-white"
          type="button"
          onClick={() => setRemoveNonWords(!removeNonWords)}
        >
          {removeNonWords ? 'Show Stopwords' : 'Hide  Stopwords'}
        </button>
      </div>
    </div>
  );
};

export default ListControls;

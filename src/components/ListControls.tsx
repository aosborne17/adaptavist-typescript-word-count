import React from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

interface ListControlsProps {
  sortType: string;
  setSortType: React.Dispatch<React.SetStateAction<string>>;
  sortDirection: string;
  setSortDirection: React.Dispatch<React.SetStateAction<string>>;
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
    if (sortDirection === 'desc') setSortDirection('');
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
}: ListControlsProps) => {
  console.log(sortType);
  console.log(sortDirection);

  return (
    <div>
      <div>
        <button
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

      <div>
        <button
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
    </div>
  );
};

export default ListControls;

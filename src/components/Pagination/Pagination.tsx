import React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

interface PaginationProps {
  onPrevBtnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onNextBtnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  onPrevBtnClick,
  onNextBtnClick,
}) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
      <Button
        variant="contained"
        startIcon={<KeyboardDoubleArrowLeftIcon />}
        onClick={onPrevBtnClick}
      >
        Prev
      </Button>
      <Button
        variant="contained"
        endIcon={<KeyboardDoubleArrowRightIcon />}
        onClick={onNextBtnClick}
      >
        Next
      </Button>
    </Box>
  );
};

export default Pagination;

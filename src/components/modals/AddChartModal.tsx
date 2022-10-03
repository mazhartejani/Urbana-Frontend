import {useState} from 'react';
import { useDispatch } from 'react-redux'

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


import { addChart } from '../../services/state/features/chart-slots/ChartSlotsSlice';
import { chartTypes } from '../../services/interfaces';

import './AddChartModal.css'
import AddChartModalGridItem from './AddChartModalGridItem';
import { addChartModalButtonsData } from './AddChartModalButtons';

const AddChartModal = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addChartToGrid = (chartType: chartTypes) => {
        dispatch(addChart(chartType))
        setOpen(false)
    }
    
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container className='add-chart-modal-container'>
            <Typography variant='h4' component='h2' align='center' mb={3}>
                Add a New Chart
            </Typography>
            <Grid container spacing={2}>
                {
                    addChartModalButtonsData.map((gridItem) => (
                        <AddChartModalGridItem key={gridItem.title} title={gridItem.title} icon={gridItem.icon} chartType={gridItem.chartType} addChartToGrid={addChartToGrid} />
                    ))
                }
            </Grid>
            <span
                className="close-icon"
                onClick={handleClose}
            >
                <CloseIcon />
            </span>
        </Container>
      </Modal>

      <Button onClick={handleOpen} variant="contained">Add Chart</Button>
    </>
  );
}

export default AddChartModal;
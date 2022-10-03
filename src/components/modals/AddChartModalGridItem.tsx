import { FC } from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { AddChartModalButtons } from '../../services/interfaces'

export interface AddChartModalGridItemProps extends AddChartModalButtons {
    addChartToGrid: Function
}

const AddChartModalGridItem: FC<AddChartModalGridItemProps> = ({title, icon, chartType, addChartToGrid}) => {
  return (
    <Grid item xs={6} md={3}>
        <Button 
            variant="outlined" 
            className='graph-button' 
            onClick={() => addChartToGrid(chartType)}
        >
            {icon}
            <Typography component='h4'>
                {title}
            </Typography>
        </Button>
    </Grid>
  )
}

export default AddChartModalGridItem
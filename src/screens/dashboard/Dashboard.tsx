import RGL, { WidthProvider } from "react-grid-layout";
import { useSelector, useDispatch } from 'react-redux'

import type { RootState } from '../../services/state/store'
import { removeChart } from '../../services/state/features/chart-slots/ChartSlotsSlice';


import AddChartModal from "../../components/modals/AddChartModal";
import CloseIcon from '@mui/icons-material/Close';
import { renderChart } from '../../shared/helper';
import './Dashboard.css'

const ReactGridLayout = WidthProvider(RGL);

const Dashboard = () => {

    const chartSlots = useSelector((state: RootState) => state.chartSlots.chartSlots)
    const dispatch = useDispatch()
      
  return (
    <div className='chart-grid-container'>
        <ReactGridLayout
            rowHeight={100}
        >
            {
                chartSlots.map((slot)=>(
                    <div className='chart-slot' key={slot.key} data-grid={slot}>
                        <>
                        {
                           renderChart(slot.chartType)
                        }
                        <span
                            className="remove-icon"
                            onClick={() => dispatch(removeChart(slot.key))}
                        >
                            <CloseIcon />
                        </span>
                        </>
                    </div>
                ))
            }
        </ReactGridLayout>
        <div>
            <AddChartModal />
        </div>
    </div>

  )
}

export default Dashboard
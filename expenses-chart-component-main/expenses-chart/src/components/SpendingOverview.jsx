import SpendingGraph from "./SpendingGraph";
import SpendingTotal from "./SpendingTotal";
import './SpendingOverview.scss';


export default function SpendingOverview() {
    return (
        <div className="spending-overview">
            <h1>Spending - Last 7 days</h1>
            <SpendingGraph />
            <div className="divider" />
            <SpendingTotal />
        </div>
    )
}
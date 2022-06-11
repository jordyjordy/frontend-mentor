import { useMemo } from 'react';
import data from '../data';

const SpendingBar = ({day, amount, pixelsPerAmount, currentDay}) => {
    console.log(currentDay);
    return (
        <div className='spending-bar-holder'>
            <div
                className={`spending-bar-block ${currentDay ? 'current' : ''}`}
                style={{ height: amount*pixelsPerAmount }}
            >
                <div className='spending-bar-info'>${amount}</div>
            </div>
            {day}
        </div>
    )
}

export default function SpendingGraph() {
    const maxAmount = useMemo(() => {
        return data.reduce((accum, curr) => {
            return Math.max(accum, curr.amount);
        }, 0)
    }, []);
    const pixelsPerAmount = 180/maxAmount

    const currentDay = useMemo(() => {
        return (new Date()).getDay();
    }, [])
    return (
        <div className='spending-graph'>
            {data.map((data, index) => {
                console.log(index);
                console.log(currentDay);
                return (
                    <SpendingBar
                        key={data.day}
                        pixelsPerAmount={pixelsPerAmount}
                        currentDay={index===currentDay - 1}
                        {...data}
                    />
                )
            })}
        </div>
    )
}
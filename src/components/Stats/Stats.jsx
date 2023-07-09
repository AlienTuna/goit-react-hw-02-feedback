import {Stat, FillerTxt, Header} from "./Stats.styled";

export function Stats({ rates, total, positive }) {
    return (
        <div>
            <Header>Statistics</Header>
            {total ? (
                <div>
                    {Object.keys(rates).map( k => 
                    <Stat key={k}>{k}: <span>{rates[k]}</span></Stat>
                    )}
                    <Stat>Total: <span>{total}</span></Stat>
                    <Stat>Positive feedback: <span>{positive}%</span></Stat>
                </div>
            ) : (                
                <FillerTxt> There are no feedbacks</FillerTxt>
            )}
        </div>
    )
}
import { Stat, Header } from "./Statistics.styled";
import { Notification } from "components/Notification/Notification";

import PropTypes from "prop-types";

export function Statistics({ rates, total, positive }) {
    return (
        <>
            {total ? (
                <div>
                    <Header>Statistics</Header>
                    <div>
                        {Object.keys(rates).map(k =>
                            <Stat key={k}>{k}: <span>{rates[k]}</span></Stat>
                        )}
                        <Stat>Total: <span>{total}</span></Stat>
                        <Stat>Positive feedback: <span>{positive}%</span></Stat>
                    </div>
                </div>
            ) : (
                <Notification message="There is no feedback" />
            )}
        </>
    )
}

Statistics.propTypes = {
    rates: PropTypes.shape({
            good: PropTypes.number,
            neutral: PropTypes.number,
            bad: PropTypes.number
        }), 
    total: PropTypes.number, 
    positive: PropTypes.number
}
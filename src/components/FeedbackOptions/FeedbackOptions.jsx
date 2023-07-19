import { ControlsContainer, ControlsHeader, Btn } from "./FeedbackOptions.styled";
import PropTypes from "prop-types";

export function FeedbackOptions({ options, onBtnClick }) {
  return (
    <div>
      <ControlsHeader>Please leave feedback</ControlsHeader>
      <ControlsContainer>
        {Object.keys(options).map(key => (
          <Btn
            key={key}
            type="button"
            onClick={() => onBtnClick(key)}
          >
            {key}
          </Btn>
        ))}
      </ControlsContainer>
    </div>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number
  }).isRequired,
  onBtnClick: PropTypes.func.isRequired
}
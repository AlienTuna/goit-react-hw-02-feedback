import { ControlsContainer, ControlsHeader, Btn } from "./Controls.styled";

export function Controls({options, onBtnClick}) {
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

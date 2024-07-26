import React, { useEffect, useState } from "react";

type DropDownProps = {
  appointment: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  appointmentSelection: Function;
};

const DropDown: React.FC<DropDownProps> = ({
  appointment,
  appointmentSelection,
}: DropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  /**
   * Handle passing the appointment name
   * back to the parent component
   *
   * @param appointment  The selected appointment
   */
  const onClickHandler = (appointment: string): void => {
    appointmentSelection(appointment);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={showDropDown ? "dropdown" : "dropdown active"}>
        {appointment.map((appointment: string, index: number): JSX.Element => {
          return (
            <p
              key={index}
              onClick={(): void => {
                onClickHandler(appointment);
              }}
            >
              {appointment}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default DropDown;

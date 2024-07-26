import React, { useState } from "react";
import DropDown from "./DropDown";

const Menu: React.FC = (): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectappointment, setSelectAppointment] = useState<string>("");
  const appointment = () => {
    return ["Consultation", "Examination", "Check-up", "Undecided"];
  };

  /**
   * Toggle the drop down menu
   */
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  /**
   * Hide the drop down menu if click occurs
   * outside of the drop-down element.
   *
   * @param event  The mouse event
   */
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  /**
   * Callback function to consume the
   * appointment name from the child component
   *
   * @param appointment  The selected appointment
   */
  const appointmentSelection = (appointment: string): void => {
    setSelectAppointment(appointment);
  };

  return (
    <>
      <div className="announcement">
        <div>
          {selectappointment
            ? `You selected a ${selectappointment}`
            : "Please Select The Type of Appointment you are interested in"}
        </div>
      </div>
      <button
        className={showDropDown ? "active" : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div>
          {selectappointment ? "Select: " + selectappointment : "Select ..."}{" "}
        </div>
        {showDropDown && (
          <DropDown
            appointment={appointment()}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            appointmentSelection={appointmentSelection}
          />
        )}
      </button>
    </>
  );
};

export default Menu;

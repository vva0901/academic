import React from "react";
import { ButtonClick } from "../../../../theme/Button";

const Footer = props => {
  return (
    <React.Fragment>
      <ButtonClick
        title="Thêm sinh viên vào lớp"
        classes="lsBtn"
        onClick={() => props.openListAddStudentDialog()}
      />
    </React.Fragment>
  );
};

export default Footer;

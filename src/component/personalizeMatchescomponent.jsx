import React from "react";
import "./personilzeMatchesCompo.css";
import "./personilzeMatchesCompoOptRuff.css";

const StepContent01 = () => {
  
  return (
    <>
      <div className="StepContent01_wrap">
        <div className="StepContent01_Main">
          <div className="StepContent01_head">
            <h1>What type of program do you want to study?</h1>
          </div>
          <div className="StepContent01_body_wrap">
            <div className="StepContent01_body">
              <div className="StepContent_Body_data ">
                <div className="modal_data_body">
                <span className="personalizeM_form__legend">
                  Delivery Method
                </span>

                  <label>
                    <div class="personalizeM_modal_checkBox_wrap">
                      <div class="personalizeM_modal_checkBox_body">
                        <input
                          type="checkbox"
                          name="undergraduate"
                          className="modal_checkBox_inp"
                        />{" "}
                        <span className="m-checkbox-text ">On Campus </span>
                      </div>
                    </div>
                  </label>
                  <label>
                    <div className="modal_checkBox_wrap">
                      <div class="personalizeM_modal_checkBox_body">
                        <input
                          type="checkbox"
                          name="undergraduate"
                          className="personalizeM_modal_checkBox_inp"
                        />{" "}
                        <span className="m-checkbox-text">Online</span>
                      </div>
                    </div>
                  </label>
                  <label>
                    <div class="modal_checkBox_wrap">
                      <div class="personalizeM_modal_checkBox_body">
                        <input
                          type="checkbox"
                          className="modal_checkBox_inp"
                          name="undergraduate"
                        />
                        <span className="m-checkbox-text">
                          Blendid Learning
                        </span>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="modal_data_body">
                <span className="form__legend">Delivery Method</span>
                  <label>
                    <div class="modal_checkBox_wrap">
                      <div class="personalizeM_modal_checkBox_body">
                        <input
                          type="checkbox"
                          name="undergraduate"
                          className="modal_checkBox_inp"
                        />{" "}
                        <span className="m-checkbox-text">On Campus </span>
                      </div>
                    </div>
                  </label>
                  <label>
                    <div class="modal_checkBox_wrap">
                      <div class="personalizeM_modal_checkBox_body">
                        <input
                          type="checkbox"
                          name="undergraduate"
                          className="modal_checkBox_inp"
                        />{" "}
                        <span className="m-checkbox-text">Online</span>
                      </div>
                    </div>
                  </label>
                  <label>
                    <div class="modal_checkBox_wrap">
                      <div class="personalizeM_modal_checkBox_body">
                        <input
                          type="checkbox"
                          className="modal_checkBox_inp"
                          name="undergraduate"
                        />{" "}
                        <span className="m-checkbox-text">
                          Blendid Learning
                        </span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const StepContent02 = () => {
  return <h1>content Two</h1>;
};

const StepContent03 = () => {
  return <h1>content Three</h1>;
};

const StepContent04 = () => {
  return <h1>content Four</h1>;
};

export { StepContent01, StepContent02, StepContent03, StepContent04 };

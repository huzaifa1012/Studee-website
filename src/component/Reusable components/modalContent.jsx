import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./modal_.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
 
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const region = [
    { name: "Asia" },
    { name: "Africa" },
    { name: "Central America" },
    { name: "Middle East" },
    { name: "North America" },
    { name: "Pacific" },
    { name: "South America" },
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Box
      sx={{
        // flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        justifyContent: "flex-start",
        textAlign: "left",
        height: 320,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab
          style={{ display: "flex", alignItems: "flex-start" }}
          label="Program Type"
          {...a11yProps(0)}
        />
        <Tab
          style={{ display: "flex", alignItems: "flex-start" }}
          label="Subject"
          {...a11yProps(1)}
        />
        <Tab
          style={{ display: "flex", alignItems: "flex-start" }}
          label="Delivery Method"
          {...a11yProps(2)}
        />
        <Tab
          style={{ display: "flex", alignItems: "flex-start" }}
          label="Location"
          {...a11yProps(3)}
        />
        <Tab
          style={{ display: "flex", alignItems: "flex-start" }}
          label="Program Duration"
          {...a11yProps(4)}
        />
        <Tab
          style={{ display: "flex", alignItems: "flex-start" }}
          label="Program Structure"
          {...a11yProps(5)}
        />
        <Tab
          style={{ display: "flex", alignItems: "flex-start" }}
          label="Budget"
          {...a11yProps(6)}
        />
      </Tabs>

      {/* 1 */}
      <TabPanel
        value={value}
        index={0}
        className="each-tab-panel"
      >
        <div className="modal_data_body">
          <fieldset className="modal_fieldSet_pt">
            <legend class="form__legend">Undergraduate</legend>
            <div class="modal_All_checkBox_wrap">
              <label>
                <div class="modal_checkBox_wrap">
                  <div class="modal_checkBox_body">
                    <input
                      type="checkbox"
                      name="undergraduate"
                      className="modal_checkBox_inp"
                    />{" "}
                    <span className="m-checkbox-text">Bachelor's </span>
                  </div>
                </div>
              </label>
              <label>
                <div class="modal_checkBox_wrap">
                  <div class="modal_checkBox_body">
                    <input
                      type="checkbox"
                      name="undergraduate"
                      className="modal_checkBox_inp"
                    />{" "}
                    <span className="m-checkbox-text">Associate </span>
                  </div>
                </div>
              </label>
              <label>
                <div class="modal_checkBox_wrap">
                  <div class="modal_checkBox_body">
                    <input
                      type="checkbox"
                      className="modal_checkBox_inp"
                      name="undergraduate"
                    />{" "}
                    <span className="m-checkbox-text">
                      Undergraduate Diploma{" "}
                    </span>
                  </div>
                </div>
              </label>
            </div>
            <legend class="form__legend">Postgraduate</legend>
            <div class="modal_All_checkBox_wrap">
              <label>
                <div class="modal_checkBox_wrap">
                  <div class="modal_checkBox_body">
                    <input
                      type="checkbox"
                      name="undergraduate"
                      className="modal_checkBox_inp"
                    />{" "}
                    <span className="m-checkbox-text">Master's </span>
                  </div>
                </div>
              </label>
              <label>
                <div class="modal_checkBox_wrap">
                  <div class="modal_checkBox_body">
                    <input
                      type="checkbox"
                      name="undergraduate"
                      className="modal_checkBox_inp"
                    />{" "}
                    <span className="m-checkbox-text">Doctorate </span>
                  </div>
                </div>
              </label>
              <label>
                <div class="modal_checkBox_wrap">
                  <div class="modal_checkBox_body">
                    <input
                      type="checkbox"
                      className="modal_checkBox_inp"
                      name="undergraduate"
                    />{" "}
                    <span className="m-checkbox-text">
                      Postgraduate pathway{" "}
                    </span>
                  </div>
                </div>
              </label>
              <label>
                <div class="modal_checkBox_wrap">
                  <div class="modal_checkBox_body">
                    <input
                      type="checkbox"
                      className="modal_checkBox_inp"
                      name="undergraduate"
                    />{" "}
                    <span className="m-checkbox-text">
                      Postgraduate certificate{" "}
                    </span>
                  </div>
                </div>
              </label>
            </div>
          </fieldset>
        </div>
      </TabPanel>
      {/* 2 */}
      <TabPanel value={value} index={1} className="each-tab-panel">
    <span className="form__legend" >Select subject</span>
      <div className="modal_data_body">
        <label>
          <div class="modal_checkBox_wrap">
            <div class="modal_checkBox_body">
              <input
                type="checkbox"
                name="undergraduate"
                className="modal_checkBox_inp"
              />{" "}
              <span className="m-checkbox-text">Art & Commerce </span>
            </div>
          </div>
        </label>
        <label>
          <div class="modal_checkBox_wrap">
            <div class="modal_checkBox_body">
              <input
                type="checkbox"
                name="undergraduate"
                className="modal_checkBox_inp"
              />{" "}
              <span className="m-checkbox-text">Software Engineering</span>
            </div>
          </div>
        </label>
        <label>
          <div class="modal_checkBox_wrap">
            <div class="modal_checkBox_body">
              <input
                type="checkbox"
                className="modal_checkBox_inp"
                name="undergraduate"
              />{" "}
              <span className="m-checkbox-text">Cost Accounting</span>
            </div>
          </div>
        </label>
        <label>
          <div class="modal_checkBox_wrap">
            <div class="modal_checkBox_body">
              <input
                type="checkbox"
                className="modal_checkBox_inp"
                name="undergraduate"
              />{" "}
              <span className="m-checkbox-text">Business</span>
            </div>
          </div>
        </label>
        <label>
          <div class="modal_checkBox_wrap">
            <div class="modal_checkBox_body">
              <input
                type="checkbox"
                className="modal_checkBox_inp"
                name="undergraduate"
              />{" "}
              <span className="m-checkbox-text">Agriculture</span>
            </div>
          </div>
        </label>
        <label>
          <div class="modal_checkBox_wrap">
            <div class="modal_checkBox_body">
              <input
                type="checkbox"
                className="modal_checkBox_inp"
                name="undergraduate"
              />{" "}
              <span className="m-checkbox-text">Communication</span>
            </div>
          </div>
        </label>
        <label>
          <div class="modal_checkBox_wrap">
            <div class="modal_checkBox_body">
              <input
                type="checkbox"
                className="modal_checkBox_inp"
                name="undergraduate"
              />{" "}
              <span className="m-checkbox-text">History</span>
            </div>
          </div>
        </label>
        <label>
          <div class="modal_checkBox_wrap">
            <div class="modal_checkBox_body">
              <input
                type="checkbox"
                className="modal_checkBox_inp"
                name="undergraduate"
              />{" "}
              <span className="m-checkbox-text">History</span>
            </div>
          </div>
        </label>
      </div>

      </TabPanel>
      {/* 3 */}
      <TabPanel value={value} index={2} className="each-tab-panel">
      <span className="form__legend" >Delivery Method</span>
      <div className="modal_data_body">
        <label>
          <div class="modal_checkBox_wrap">
            <div class="modal_checkBox_body">
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
            <div class="modal_checkBox_body">
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
            <div class="modal_checkBox_body">
              <input
                type="checkbox"
                className="modal_checkBox_inp"
                name="undergraduate"
              />{" "}
              <span className="m-checkbox-text">Blendid Learning</span>
            </div>
          </div>
        </label>
        
      </div>
      </TabPanel>
      {/* 4 */}
      <TabPanel value={value} index={3} className="each-tab-panel">
      <div className="login_input_group">
              <label htmlFor="country" className="lable_in_signup_screen">
                Region
              </label>
              <select
                id="country"
                className="login_input signup_countries_dropdown"
              >
                <option value="">Select region</option>
                {region.map((data) => (
                  <option key={data.code} value={data.code}>
                    {data.name}
                  </option>
                ))}
              </select>
            </div>

      </TabPanel>
      {/* 5 */}
      <TabPanel value={value} index={4} className="each-tab-panel">
        <span className="form__legend" >Program Duration</span>
        <br/>
        <br/>
        <div className="modal_data_body">
          <fieldset className="modal_fieldSet_pt">
            <legend class="form__legend">Pace</legend>
            <div class="modal_All_checkBox_wrap">
              <label>
                <div class="modal_checkBox_wrap">
                  <div class="modal_checkBox_body">
                    <input
                      type="checkbox"
                      name="undergraduate"
                      className="modal_checkBox_inp"
                    />{" "}
                    <span className="m-checkbox-text">Full Time </span>
                  </div>
                </div>
              </label>
              <label>
                <div class="modal_checkBox_wrap">
                  <div class="modal_checkBox_body">
                    <input
                      type="checkbox"
                      name="undergraduate"
                      className="modal_checkBox_inp"
                    />{" "}
                    <span className="m-checkbox-text">Part-Time</span>
                  </div>
                </div>
              </label>
                          </div>
            <legend class="form__legend">Duration</legend>
            <div class="modal_All_checkBox_wrap">
              <label>
                <div class="modal_checkBox_wrap">
                  <div class="modal_checkBox_body">
                    <input
                      type="checkbox"
                      name="undergraduate"
                      className="modal_checkBox_inp"
                    />{" "}
                    <span className="m-checkbox-text">Up to 1 year </span>
                  </div>
                </div>
              </label>
              <label>
                <div class="modal_checkBox_wrap">
                  <div class="modal_checkBox_body">
                    <input
                      type="checkbox"
                      name="undergraduate"
                      className="modal_checkBox_inp"
                    />{" "}
                    <span className="m-checkbox-text">Up to 2 year</span>
                  </div>
                </div>
              </label>
              <label>
                <div class="modal_checkBox_wrap">
                  <div class="modal_checkBox_body">
                    <input
                      type="checkbox"
                      className="modal_checkBox_inp"
                      name="undergraduate"
                    />{" "}
                    <span className="m-checkbox-text">
                      up to 3 year
                    </span>
                  </div>
                </div>
              </label>
              <label>
                <div class="modal_checkBox_wrap">
                  <div class="modal_checkBox_body">
                    <input
                      type="checkbox"
                      className="modal_checkBox_inp"
                      name="undergraduate"
                    />{" "}
                    <span className="m-checkbox-text">
                    Up to 4 year
                    </span>
                  </div>
                </div>
              </label>
            </div>
          </fieldset>
        </div>
      </TabPanel>
      {/* 6 */}
      <TabPanel value={value} index={5} className="each-tab-panel">
        Program Structure
      </TabPanel>
      {/* 7 */}
      <TabPanel value={value} index={6}>
        Budget
      </TabPanel>
    </Box>
  );
}

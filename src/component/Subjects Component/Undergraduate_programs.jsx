import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ProgramCard from "../programs components/ProgramCard"
import UndergraduateProgCard from './undergraduateProgCard';
import "./undgProgram.css"
export default function Undergraduate_programs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
<div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
  

<Box sx={{ width: '90%', padding:'0px', typography: 'body1' }}>
      <TabContext value={value} style={{}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' , } } >
          <TabList onChange={handleChange}  aria-label="lab API tabs example">
            <Tab label="Bachelor's" value="1"/>
            <Tab label="Associate" value="2" />
            <Tab label="Diploma" value="3" />
            <Tab label="Certificate" value="4" />
            <Tab label="Pathway" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1"> 
          <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}} >
          <UndergraduateProgCard/>
          <UndergraduateProgCard/>
          <UndergraduateProgCard/>
          </div>
           </TabPanel>
        <TabPanel value="2">
          <UndergraduateProgCard/>
          <UndergraduateProgCard/>
          </TabPanel>
        <TabPanel value="3">
          <UndergraduateProgCard/>
        </TabPanel>
        <TabPanel value="4">
          
          <UndergraduateProgCard/>
        </TabPanel>
        <TabPanel value="5">
          <UndergraduateProgCard/>
        </TabPanel>
      </TabContext>
    </Box>
    </div>
  );
}



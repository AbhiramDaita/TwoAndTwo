import './App.css';
import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, LinearProgress } from '@mui/material';
import React from 'react';


const UploadButton = styled(Button)({
  backgroundColor:"#FFF3E2",
  fontSize:16,
  color:"#265073",
  '&:hover':{
    backgroundColor:"#FFF3E2",
    color:"#2D9596"
  }
})

const VisuallyHiddenInput = styled('input')({
  clip:'rect(0 0 0 0)',
  clipPath:'inset(50%)',
  height:1,
  overflow:'hidden',
  position:'absolute',
  bottom:0,
  left:0,
  whiteSpace:'nowrap',
  width:1,
});

function App() {

  const [progress, setProgress] = React.useState(0);
  
  return (
    <div className="App">
      <div className="bodyHolder">
        <div className="pageContent">
            <div className="title">
                <div className="pageTitle">
                  TraffAI
                </div>
                <div className="pageCap">
                Unleash Traffic Insights: Empower Your City with Machine Learning-Driven Traffic Monitoring
            </div>
            <div className='box'>
                <div className="uploadBox">
                  <p className='hint'>0/4</p>
                  <Box sx={{width:'100%',position:'absolute',}}>
                  <LinearProgress variant='determinate' value={progress} sx={{backgroundColor:"#FFF3E2"}} color='success'/>
                  </Box>
                  <UploadButton 
                  component="label" 
                  role={undefined}
                  startIcon={<CloudUploadIcon/>}
                  >
                    Upload
                    <VisuallyHiddenInput type="file" accept='video/mp4,video/x-m4v,video/*'/>
                  </UploadButton>
                </div>
            </div>
            <div className='endCreds'>
              <div className='credsTitle'>
                About Us
              </div>
              <div className='credsContent'>
              TraffAI harnesses the power of machine learning to monitor traffic flow in real-time. By analyzing camera feeds, it accurately detects vehicles, classifies their types, and estimates speed and volume. TraffAI empowers traffic managers with actionable insights to optimize traffic signal timings, improve road safety, and reduce congestion. Its user-friendly interface and customizable alerts make it an effective tool for enhancing urban mobility and minimizing commute times.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

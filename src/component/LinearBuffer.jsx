import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearBuffer({ isLoading }) {
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress((prev) => prev + diff);
        setBuffer((prev) => prev + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    if (isLoading) {
      const timer = setInterval(() => {
        progressRef.current();
      }, 500);

      return () => {
        clearInterval(timer);
      };
    } else {
      setProgress(0);
      setBuffer(10);
    }
  }, [isLoading]);

  return (
    <div>
      {isLoading ? (
        <div className="relative w-screen h-screen bg-richblack-900 flex flex-col items-center justify-center gap-4">
          <LinearProgress
            className="w-[40%]"
            variant="buffer"
            value={progress}
            valueBuffer={buffer}
            sx={{
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#280678', // Primary bar color
              },
              '& .MuiLinearProgress-barBuffer': {
                backgroundColor: '#574db9', // Buffer bar color
              },
              '& .MuiLinearProgress-dashed': {
                background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #574db9 10px, #574db9 20px)', // Dashed pattern color
              },
            }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

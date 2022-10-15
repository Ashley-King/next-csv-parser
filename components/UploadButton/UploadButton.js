import styles from './UploadButton.module.scss';
import {useState, useRef} from 'react';
import Papa from 'papaparse';

const UploadButton = () => {
  
  const fileInput = useRef(null);
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);

  const parseFile =   (file) => {
    let fileName = file.name;
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        let data = results.data;
        if(fileName === 'city-state-data-simplemaps.com.csv'){
          data.map((item) => {
            let zip = item.zips.split(' ')
            item.zips = zip
          
        })
      }
        setData(data)
        //clear file input
        fileInput.current.value = '';

      }
    });
  }

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  }

  const handleClick =  () => {
    if(file) {
      parseFile(file);
      
    }
    if(!file) {
      alert('Please select a file');
    }
  }

  const handleReset = () => {
    setData(null);
  }


  return (
    <>
    <div className={`${styles.resetButton} py-3`}>
    {data && <button className="btn " onClick={handleReset}>Reset</button>}
    
    </div>
    <label className={styles.uploadButtonLabel}>
      <div className="input-group">
        <input ref={fileInput} type="file" className="form-control" accept=".csv" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" onChange={handleFile}/>
        <button onClick={handleClick} className="btn " type="button" id="inputGroupFileAddon04">Parse</button>
      </div>  
    </label>
    <div>
    {data && 
    <>
    <div className={styles.pre__header}>
    <h2>CSV JSON (scrollable):</h2>
    </div>
    <div className={styles.pre} >
    
    <pre >{JSON.stringify(data, null, 2)}</pre>
    </div>
    </>
    }
    </div>
   
    </>
  );
}

export default UploadButton;
import styles from './UploadButton.module.scss';
import {useState, useRef} from 'react';


const UploadButton = () => {
  
  const fileInput = useRef(null);
  const [file, setFile] = useState(null);
  
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  }

  const handleClick = () => {
    console.log(file);
  }
  return (
    <label className={styles.uploadButtonLabel}>
      <div className="input-group">
        <input ref={fileInput} type="file" className="form-control" accept=".csv" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" onChange={handleFile}/>
        <button onClick={handleClick} className="btn " type="button" id="inputGroupFileAddon04">Parse</button>
      </div>  
    </label>
  );
}

export default UploadButton;
import axios from 'axios';

const issuerAPI = axios.create({
  baseURL: 'http://localhost:5000/api/issuer/',
});

const validateMasterKey = (masterKey, masterKeyHash) => issuerAPI.post('/validate-master-key', { masterKey, masterKeyHash });

export default validateMasterKey;

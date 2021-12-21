import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { fetchMasterKey } from '../../../api';

const LoginToDashboard = ({ isConnected, isAccountChanged, isNetworkChanged, stepOne }) => {
  const admin = useSelector((state) => state.admin.currentAdmin);
  const instance = useSelector((state) => state.contract.instance);

  const [masterKey, setMasterKey] = useState(null);
  const adminLogin = async () => {
    console.log(masterKey);
    if (!masterKey) {
      toast.warn('Please enter Master Key', { toastId: 'no-master-key' });
    } else if (masterKey === 'Pinaki') {
      try {
        const adminDetails = await instance.methods.singleAdmin(admin.account).call();
        const res = await fetchMasterKey(`${adminDetails[0]} ${adminDetails[1]}`, admin.account, adminDetails[2]);
        await instance.methods.updateMasterKey(res.data.masterKey).send({ from: admin.account });
        const adminDet = await instance.methods.singleAdmin(admin.account).call();
        console.log(adminDet);
        setMasterKey(null);
      } catch (err) {
        toast.error('Something Went Wrong', { toastId: `${err.message}` });
      }
    } else {
      // Check from sol for masterKey and let the user login
      try {
        const mk = await fetchMasterKey('jack', '12345abcde', 'seopinakipb2@gmail.com');
        console.log(mk.data.masterKey);
      } catch (err) {
        toast.error('Something Went Wrong', { toastId: `${err.message}` });
      }
    }
  };
  return (
    <>
      <div className="bg-white h-auto m-6 p-4 w-2/3 rounded-2xl flex flex-col justify-center items-center">
        <h1 className="font-bold text-gray-900 text-2xl text-center mb-8 mt-3 font-roboto">LOGIN TO DASHBOARD</h1>
        <div className="mb-4 w-5/6">
          <div className="block text-grey-darker text-sm font-bold mb-2 font-ubuntu">Address</div>
          <input className="text-center text-sm font-semibold shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker bg-gray-200" type="text" value={admin.account} readOnly />
        </div>
        <div className="mb-6 w-5/6">
          <div className="block text-grey-darker text-sm font-bold mb-2 font-ubuntu">Master Key</div>
          <input
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 bg-gray-200"
            type="password"
            placeholder="Master Key"
            onChange={(e) => setMasterKey(e.target.value)}
          />
          <p className="text-red-600 text-xs italic font-ubuntu">Copy the Master Key and Paste Here</p>
        </div>
      </div>
      <div className="flex justify-between items-center w-2/5 pb-10">
        <button type="button" className="bg-prime rounded-md px-3 py-2 text-white w-32 h-12 text-center text-lg font-bold hover:bg-indigo-600 select-none" onClick={() => stepOne()}>
          Back
        </button>
        {isConnected && isAccountChanged === false && isNetworkChanged === false ? (
          <button
            type="button"
            className="bg-prime rounded-md px-3 py-2 text-white w-32 h-12 text-center text-lg font-bold hover:bg-indigo-600 select-none"
            onClick={() => {
              adminLogin();
            }}
          >
            Login
          </button>
        ) : (
          <button type="button" className="cursor-not-allowed bg-prime rounded-md px-3 py-2 text-white w-32 h-12 text-center text-lg font-bold hover:bg-indigo-600 select-none" disabled>
            Login
          </button>
        )}
      </div>
    </>
  );
};
export default LoginToDashboard;

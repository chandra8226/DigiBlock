import React from 'react';

import Avatar from 'react-avatar';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const userName = useSelector((state) => state.user.userName);
  const { account } = useSelector((state) => state.user.currentUser);
  const isVerified = useSelector((state) => state.user.isVerified);
  return (
    <div className="container flex justify-center items-center">
      <div className="flex flex-col bg-white justify-center items-center mt-10 py-6 sm:w-1/3 text-center rounded-2xl shadow-xl">
        {/* <img
        className="w-20 h-20 rounded-full inline-flex items-center justify-center shadow-xl border-2 border-prime"
        src="https://pfpmaker.com/_nuxt/img/profile-3-1.3e702c5.png"
        alt="Admin Profile"
        draggable={false}
      /> */}
        <Avatar className="w-20 h-20 rounded-full inline-flex items-center justify-center shadow-lg" name={userName} size="70" />
        <div className="flex flex-col items-center text-center justify-center">
          <h2 className="font-medium title-font mt-2 text-gray-900 text-2xl">{userName}</h2>
          <div className="font-normal text-gray-500 text-sm font-ubuntu">{account}</div>
          {/* <div className="flex mt-3 bg-green-500 rounded-md px-2 py-1 items-center">
            <div className="text-white mr-2 font-semibold text-sm">Verified</div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div> */}
          <div className={`${isVerified ? 'bg-green-500' : 'bg-red-500'} flex mt-3 rounded-md px-2 py-1 items-center`}>
            <div className="text-white mr-2 font-semibold text-sm">{isVerified ? 'Verified' : 'Not Verified'}</div>
            {
              isVerified ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
                  </svg>
              )
            }
          </div>
          <div className="w-12 h-1 bg-gray-500 rounded mt-4" />
          {/* <div className="w-12 h-1 bg-gray-500 rounded mt-2 mb-4" /> */}
        </div>
        {/* <div className="flex flex-col justify-center items-center">
        <div className="text-lg text-gray-800">Documents Issued: 100</div>
        <div className="text-lg text-gray-800">Documents Issued: 100</div>
      </div> */}
      </div>
    </div>
  );
};

export default UserProfile;

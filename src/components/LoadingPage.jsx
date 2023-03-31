import React from 'react';
import './loadingPage.css';

const LoadingPage = ({ loading }) => {
  return (
    <div className={`loading-page ${loading && 'show-loadingPage'}`}>
      <img
        src="https://doggishpetboutique.com/wp-content/uploads/2020/07/Placas-geek-19.png"
        alt=""
      />
    </div>
  );
};

export default LoadingPage;

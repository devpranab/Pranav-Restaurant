import React from 'react';

const Loading = () => {
    return (
        <div className='col-12' 
        style={{padding: "60px"}}>
            <span class="fa fa-spinner fa-4x text-danger fa-fw fa-pulse"></span>
        </div>
    );
};

export default Loading;
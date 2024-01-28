import React from 'react'
// Importing toastify module


const Toast = ({recentActivities}) => {
  return (
    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <img src="..." class="rounded me-2" alt="..." />
        <strong class="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body">
        {recentActivities.data &&
          recentActivities.data.details +
            " inquired about trip to " +
            recentActivities.data.destination}
      </div>
    </div>
  );
}

export default Toast
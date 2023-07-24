const handleNetworkError = (errResponse: any) => {
  const { status: errStatus, data: errData } = errResponse;
  // console.log(errResponse.data, 'xxxxx');
  let errMessage = 'Unspecified error detected.';
  if (errStatus) {
    switch (errStatus) {
      case 400:
        errMessage = 'Error 400. Bad Request.';
        break;
      case 401:
        errMessage = 'Error 401. Unauthorized, please log in again.';
        break;
      case 403: {
        errMessage = 'Error 403. Access Denied.';
        const { code, data } = errData;
        setTimeout(() => {
          window.location.href = '/';
        }, 1500);
        break;
      }
      case 404:
        errMessage = 'Error 404. Bad request, the resource was not found.';
        break;
      case 405:
        errMessage = 'Error 405. Request access not allowed.';
        break;
      case 408:
        errMessage = 'Error 408. Request timed out.';
        break;
      case 500:
        errMessage = 'Error 500. Server side error.';
        break;
      case 501:
        errMessage = 'Error 501. Not implemented.';
        break;
      case 502:
        errMessage = 'Error 502. Network Error.';
        break;
      case 503:
        errMessage = 'Error 503. Service is not available.';
        break;
      case 504:
        errMessage = 'Error 504. Network timeout.';
        break;
      case 505:
        errMessage = 'Error 505. http version does not support the request.';
        break;
      default:
        errMessage = `Other connection error detected. -- ${errStatus}`;
        break;
    }
  } else {
    errMessage = 'Unable to connect to server.';
  }
  // message.error(errMessage);
};

export default handleNetworkError;

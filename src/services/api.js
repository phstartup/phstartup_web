import String from '@/util/String'
import jQuery from 'jquery'
import axios from 'axios';
const Api = {
  request: (link, parameter, callback, errorCallback = null) => {
    let token = localStorage.getItem(String.app_name + 'token')
    let tokenStringParam = token && token !== 'null' && token !== null ? '?token=' + token : ''
    jQuery.ajaxSetup({headers: {'authorization': 'Bearer ' + token}})
    jQuery.post(String.api_url + link + tokenStringParam, parameter, (response) => {
      let array = ['Invalid account.', 'Invalid Accessed.']
      if(response && response.error && array.indexOf(response.error) >= 0){
        localStorage.removeItem(`${String.app_name}token`);
        window.location.href = String.host
      }else{
        callback(response)
      }
    }).fail((jqXHR) => {
      switch(jqXHR.status){
        case 400:
          // deauthenticate
          break
        case 401: // Unauthorized
          if(link === 'authenticate' || 'authenticate/user'){ // if error occured during authentication request
            if(errorCallback){
              errorCallback(jqXHR.responseJSON, jqXHR.status * 1)
            }
          }else{
          }
          break
        default:
          if(errorCallback){
            errorCallback(jqXHR.responseJSON, jqXHR.status * 1)
          }
      }
    })
  },
  uploadFile: (link, parameter, callback, errorCallback = null) => {
    let token = localStorage.getItem(String.app_name + 'token')
    let tokenStringParam = token && token !== 'null' && token !== null ? '?token=' + token : ''
    jQuery.ajaxSetup({headers: {'authorization': 'Bearer ' + token}})
    axios.post(String.api_url + link + tokenStringParam, parameter).then(response => {
      callback(response)
    }).catch(err => {
      errorCallback(err)
    })
  }
};

export default Api;
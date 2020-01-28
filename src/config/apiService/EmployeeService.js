/**
 * @About
 * 
 */

import axios from 'axios';
import Url from '../env/Urls';


// authkey = ''


export const _getEmployeeData = (request) => {

    return new Promise((resolve, reject) => {
        console.log('servicedataaa', Url.EMPLOYEE_DUMMY);
        console.log('servicedataaad', request);

        axios({
            method: "GET",
            url: Url.EMPLOYEE_DUMMY,
            data: request,
            headers: {
                // "Authorization": authKey,
                'Content-Type': 'application/json',
            }
        }).then(resp => {
            console.log('resp', resp.data);
            if (resp.data)
                resolve(resp.data)
            else


                reject(resp.data)

        }).catch(err => reject(err))
    })

}


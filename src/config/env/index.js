import _ from 'lodash';

import { DevSetting, ProdSetting, StagSetting, localhostSetting} from './setting'

let defaultSetting = {
  api: {
    url: "http://dummy.restapiexample.com/api/v1/",
    mode: 'cors',
  },
  socket: ''
}

let siteSetting = defaultSetting;

switch (process.env.REACT_APP_ENV) {
  case "prod":
  case "production":
    siteSetting = _.extend(defaultSetting, ProdSetting);
    break;
  case "stag":
  case "staging":
    siteSetting = _.extend(defaultSetting, StagSetting);
    break;
  case "local":
  case "localhost":
    siteSetting = _.extend(defaultSetting, localhostSetting);
    break;
  default:
    siteSetting = _.extend(defaultSetting, DevSetting);
}

export default siteSetting;


import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

const rootRudecer = combineReducers({posts, comments, router: routerReducer });

export default rootRudecer;
import cloneDeep from 'lodash/cloneDeep';
import { switchView } from './store/dataSlice'

export const switchViewHandler = (key, navState, dispatch) => {
    const newData = cloneDeep(navState)
    let lastActiveView = Object.keys(newData).filter(key => newData[key] === true)
    newData[lastActiveView] = false
    newData[key] = true
    dispatch(switchView(newData))
}
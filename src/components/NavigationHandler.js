import cloneDeep from 'lodash/cloneDeep';
import { switchView } from './store/dataSlice'

export const switchViewHandler = (key, navState, dispatch, toggleDrawer = null) => {
    const newData = cloneDeep(navState)
    let lastActiveView = Object.keys(newData).filter(key => newData[key] === true)
    newData[lastActiveView] = false
    newData[key] = true
    if(toggleDrawer != null) {
        toggleDrawer(false)
    }
    dispatch(switchView(newData))
}
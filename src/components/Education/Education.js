import React, { useEffect } from "react";
import TimeLine from "./TimeLine";
import { switchViewHandler } from '../NavigationHandler';
import { useSelector, useDispatch } from 'react-redux';
import Reveal from "../Reveal";
import MarkerHighlight from "../MarkerHighlight";

const Education = () => {
    const navState = useSelector((state) => state.navstate.data);
    const dispatch = useDispatch();
    
    useEffect(() => {
        switchViewHandler('edu', navState, dispatch);
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div>
                <Reveal type="horizontal">
                    <MarkerHighlight color="rgba(6, 214, 160, 0.45)">
                        <h1 className="pageTitle" style={{ display: 'inline' }}>
                            Education
                        </h1>
                    </MarkerHighlight>
                </Reveal>
            </div>
            <div style={{ flex: 1, marginTop: '20px' }}>
                <TimeLine />
            </div>
        </div>
    );
};

export default Education;
import React from 'react';
import MobileStoreButton from 'react-mobile-store-button';
import './landing.css';

export default () => (
    <div>


        <MobileStoreButton
            store="ios"
            url='https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8'
        />


        <MobileStoreButton
            store="android"
            url='https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8'
        />
    </div>
)

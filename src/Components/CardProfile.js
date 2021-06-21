import React, { Component } from 'react';
import Footer from './Footer';
import ArtPuller from './ArtPuller';

export default class CardProfile extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <div className='CardProfile'>
                    <ArtPuller/>
                </div>
                    <Footer />
                </div>
                );
    }
}

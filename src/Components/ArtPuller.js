import React, { Component } from 'react';

const mtgPicsDomain = 'https://mtgpics.com/';

export default class ArtPuller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artItems: []
        }
    }

    componentDidMount() {
        let path = window.location.pathname;
        let res = /\/card\/(?<set>\d*\w*)\/(?<num>\d*)\//.exec(path);
        if (res.groups && res.groups.set && res.groups.num) {
            console.log("Attempting to fetch art for " + res.groups.set + " and " + res.groups.num);
            //Construct URI
            var uri = this.constructUri(res.groups.set, res.groups.num);

            this.setState(prevState => {
                let a = Object.assign({}, prevState.artItems);
                a = this.state.artItems.push(
                    <div className="ArtObject">
                        <img
                            src={uri}
                            alt={"Failed"}
                        />
                    </div>
                );
                return { a };
            });
        }
    }

    constructUri(set, num) {
        if (num.length === 1)
            num = '00' + num;
        else if (num.length === 2)
            num = '0' + num;
        return mtgPicsDomain + 'pics/art/' + set + '/' + num + '.jpg';
    }

    // artObject(src, alt) {
    //     return (

    //     );
    // }

    render() {
        return (
            <div className='ArtPuller'>
                <h2>
                    Full Art Result:
                </h2>
                <ul>{this.state.artItems}</ul>
            </div>
        );
    }
}




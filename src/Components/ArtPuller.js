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
                        <a href={uri}>
                            <img
                                src={uri}
                                alt={"Failed"}
                            />
                        </a>
                    </div>
                );
                return { a };
            });
        }
    }

    constructUri(set, num) {
        //Add missing zeros
        if (num.length === 1)
            num = '00' + num;
        else if (num.length === 2)
            num = '0' + num;
        set = this.mapSetName(set);
        return mtgPicsDomain + 'pics/art/' + set + '/' + num + '.jpg';
    }

    //This is why we cant have nice things:
    mapSetName(set) {
        switch (set) {

            //Expansion
            case "arn": return "ara"; //Arabian nights
            case "atq": return "ant"; //Antiquities
            case "drk": return "dar"; //The Dark
            case "csp": return "col"; //Coldsnap
            case "fem": return "fal"; //Fallen Empires
            case "hml": return "hom"; //Homelands
            case "wth": return "wea"; //Weatherlight
            case "tmp": return "tem"; //Tempest
            case "sth": return "str"; //Stronghold
            case "exd": return "exo"; //Exodus
            case "usg": return "urs"; //Urzas Saga
            case "ulg": return "url"; //Urza's Legacy
            case "uds": return "urd"; //Urzas Destiny
            case "mmq": return "mer"; //Mercadian Masques
            case "pcy": return "pro"; //Prophecy
            case "pls": return "pla"; //Planeshift
            case "apc": return "apo"; //Apocalypse
            case "lgn": return "lgi"; //Legions
            case "scg": return "sco"; //Scourge
            case "dst": return "drs"; //Darksteel
            case "5dn": return "fda"; //Fithdawn
            case "bok": return "bek"; //Betrayers of Kamigawa
            case "sok": return "sak"; //Saviours of Kamigawa
            case "gpt": return "gui"; //Guildpact
            case "lrw": return "lor"; //Lorwyn
            case "shm": return "sha"; //Shadowmoor
            case "ala": return "soa"; //Shard of alara
            case "arb": return "alr"; //Alara Reborn

            //specialty
            case "mps": return "kli"; //Kaladesh Inventions

            //Core sets
            case "lea": return "alp";
            case "leb": return "bet";
            case "2ed": return "abu";
            case "3ed": return "rev"; //Revised Edition
            case "4ed": return "4th";
            case "5ed": return "5th";
            case "6ed": return "6th";
            case "7ed": return "7th";
            case "8ed": return "8th";
            case "9ed": return "9th";
            case "10e": return "xth";
            case "m10": return "10m";
            case "m11": return "11m";
            case "m12": return "12m";
            case "m13": return "13m";
            case "m14": return "14m";
            case "m15": return "15m";

            //Masters
            case "mm2": return "mmb";
            case "mm3": return "mmc";

            default:
                return set;
        }
    }

    render() {
        return (
            <div className='ArtPuller'>
                <h2>
                    Art Puller Results:
                </h2>
                <ul>{this.state.artItems}</ul>
            </div>
        );
    }
}




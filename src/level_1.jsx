import React from 'react';
import $ from 'jquery';
import {Swappable, Sortable, Plugins,} from '@shopify/draggable';

class Level_1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }


    componentDidMount() {
        var containers = document.querySelector("#level_1_wrapper");
        const swappable = new Swappable(containers, {
            draggable: '.block-drag',
            mirror: {
                constrainDimensions: true,
            },
            plugins: [Plugins.SwapAnimation, Plugins.ResizeMirror],
            swapAnimation: {
                duration: 200,
                easingFunction: 'ease-in-out',
            },
        });


        swappable.on('swappable:swapped', function (e) {
            console.log(e);
        });
    }

    render() {

        return (

            <div id="level_one">

                <div id="level_1_wrapper">
                    <div id="val_9" className="ui-state-disabled"></div>
                    <div id="val_1" className="block-drag">1</div>
                    <div id="val_10" className="ui-state-disabled"></div>

                    <div id="val_2" className="block-drag">2 </div>
                    <div id="val_3" className="block-drag"> 3</div>
                    <div id="val_4" className="block-drag"> 4</div>

                    <div id="val_5" className="block-drag"> 5</div>
                    <div id="val_6" className="block-drag"> 6</div>
                    <div id="val_7" className="block-drag"> 7</div>

                    <div id="val_11" className="ui-state-disabled"></div>
                    <div id="val_8" className="block-drag"> 8</div>
                    <div id="val_12" className="ui-state-disabled"></div>
                </div>

            </div>


        )


    }


}

export default Level_1;
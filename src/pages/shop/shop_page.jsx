import React, { Component } from 'react'
import collections from './shop_data';
import PreviewCollection from 'component/preview_collection/preview_collection';
export default class home_page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections
        }
    }
    render() {
        const { collections }= this.state
        return (
            <div className="shop-page">
                   {
                        collections.map(({id, ...otherPreviewProps}) => {
                            return <PreviewCollection key={id} { ...otherPreviewProps }/>
                        })
                   } 
            </div>
        )
    }
}

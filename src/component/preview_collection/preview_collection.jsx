import React from 'react'
import CollectionMenu from 'component/collection-items/collection_item';
import './preview_collection_style.scss';

export default function preview_collection({title,items}) {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((item,idx) => idx < 4)
                    .map((item) =>
                        <CollectionMenu key={item.id} item={item}/>
                    )
                }
            </div>
        </div>
    )
}

import React from 'react';
import { getImageUrl } from '../../utils/image-url';
import { parseAndRewriteLinks } from '../../utils/link-rewriter';
import '../../styles/homeBanner.css';

export default class HomeBanner extends React.Component
{
    render()
    {
        const content = this.props.content;
        const manageContentButton = this.props.manageContentButton;
        const image = getImageUrl(content.image, this.props.pageModel);
        let contentHtml;

        if(content.content && content.content.value)
            contentHtml = parseAndRewriteLinks(content.content.value);

        return (
            <div className="has-edit-button">
                { manageContentButton && manageContentButton }
                <div className="homeBanner">
                    <img src={image} alt={content.title}/>
                    <div className="content">
                        <h3 className="introText">Introducing</h3>
                        <hr className="brow"/>
                        <h1 className="title">{content.title}</h1>
                        <h6 className="summary">{contentHtml}</h6>
                        <p className="link"><a href="#banner_link">Shop Women's Boots</a></p>
                    </div>
                </div>
            </div>
        )
    }
}
import React from 'react';
import { parseAndRewriteLinks } from '../../utils/link-rewriter';

export default class TestComponent extends React.Component
{
    render()
    {
        const content = this.props.content;
        const manageContentButton = this.props.manageContentButton;
        let contentHtml;

        if(content.content && content.content.value)
            contentHtml = parseAndRewriteLinks(content.content.value);

        return (
            <div className="jumbotron has-edit-button">
                { manageContentButton && manageContentButton }
                <h1>{content.title}</h1>
                <h6>{contentHtml}</h6>
                <input placeholder="Enter something to test"/>
            </div>
        )
    }
}
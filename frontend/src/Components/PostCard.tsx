import React from 'react'
import { DefaultEffects } from '@fluentui/react';
import {  PrimaryButton } from '@fluentui/react/lib/Button';
import { Separator } from '@fluentui/react/lib/Separator';
import "./PostCard.css"

const PostCard: React.FC = () => {
    return (
        <div className="post-card" style={{ boxShadow: DefaultEffects.elevation8 }} >
            <Separator />
            <div className="amount-wrapper">
                <h2 className="amount">$8</h2>
                <p>per month</p>
            </div>
            <div>
            <PrimaryButton text="Become a Supporter"  allowDisabledFocus />
            </div>
        </div>
    )
}

export default PostCard

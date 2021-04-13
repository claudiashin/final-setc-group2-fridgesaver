import React from 'react';
import Message from '../comps/Message';

export default{
    title:"Example/Message",
    component:<Message />
}

export const Message1 = () => <Message />
export const Message2 = () => <Message border = "solid" />
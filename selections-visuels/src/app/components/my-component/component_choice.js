import 'expose-loader?Choices!choices.js';
import { defineCustomElements } from 'choicesjs-stencil/dist/loader';

defineCustomElements(window);

// ReactJS component
import React, { useEffect, useRef } from 'react';

export default function ChoicesJSStencil({
    type = 'text',
    name,
    choices = [],
    onChange
}) {
    const choicesElement = useRef(null);

    useEffect(() => {
        const { current } = choicesElement;
        const _handleChange = handleChange.bind(null, onChange);

        current.choices = choices;
        current.addEventListener('change', _handleChange);

        return () => {
            current.removeEventListener('change', _handleChange);
        };
    }, [choices]);

    async function handleChange(callback) {
        const { current } = choicesElement;

        callback({
            options: await current.getValue(true),
            target: current
        });
    }

}
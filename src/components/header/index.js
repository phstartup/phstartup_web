"use client"
import React, { useState } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import Content from './content'

function index(props) {

    return (
        <Disclosure as="nav">
            <Content />
        </Disclosure>
    );
}

export default index;
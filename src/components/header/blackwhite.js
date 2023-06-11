"use client"
import React, { useState } from 'react';
import Content from './content'
import { Disclosure, Transition } from '@headlessui/react';
function index(props) {

    return (
        <Disclosure as="nav">
            <Content leftColor={" bg-black dark:bg-white text-white dark:text-black"} rightColor={" bg-white dark:bg-black"}/>
        </Disclosure>
    );
}

export default index;
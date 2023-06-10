"use client";
import React from 'react';
import SampleImage from '@/assets/sample.png'
import Image from 'next/image'
import {  SvgIcon } from '@mui/material';
import { PlayCircle } from '@mui/icons-material';
import Button from '@/components/buttons/btn.js'

function index(props) {
    return (
        <div style={{
            width: '100%',
            height: '80vh',
            float: 'left',
            position: 'relative'
        }}>
            <div style={{
                float: 'left',
                width: '100%',
                height: '80vh',
            }}>
                <Image
                    src={SampleImage}
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                />
            </div>
            <div style={{
                position:'absolute',
                width: '100%',
                bottom: '10vh',
                left: 0,
                paddingLeft: 100
            }}>
                <h1 style={{
                    fontSize: 60
                }}>Prosperna</h1>
                <div style={{
                    float: 'left',
                    width: '100%',
                    display: 'flex',
                    alignContent: 'center',
                    alignItems: 'center'
                }}>
                    <SvgIcon
                        component={PlayCircle}
                        style={{
                            fontSize: 60,
                            float: 'left'
                        }}
                        />
                    <Button title="More details"/>
                </div>
                
            </div>
        </div>
    );
}

export default index;
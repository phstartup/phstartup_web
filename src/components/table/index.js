"use client"
import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { SvgIcon } from '@mui/material';
import { ChevronLeft, ChevronRight, ToggleOffOutlined, ToggleOnOutlined } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
function CustomTable(props) {
    const router = useRouter();
    const [pagination, setPagination] = useState(0)

    const renderToggle = (item, value, hItem, index) => {
        return (
            <td
                className="cursor-hover px-6 py-4"
                key={index}
            >
                <SvgIcon
                    icon={value ? ToggleOnOutlined : ToggleOffOutlined}
                />
            </td>
        )
    }

    const renderText = (header, value, index) => {
        let style = header.style ? header.style : null
        return (
            <td
                style={style}
                className="px-6 py-4"
                key={index}>
                {value}
            </td>
        )
    }

    const renderRedirect = (header, item, index) => {
        let style = header.style ? header.style : null
        return (
            <td style={{
                ...style
            }}
                className="px-6 py-4 hover:underline cursor-pointer"
                onClick={() => {
                    // props.history.push(header.route + item[header.route_params])
                }}
                key={index}
            >
                {item[header.variable]}
            </td>
        )
    }

    const renderDocument = (header, item, index) => {
        let style = header.style ? header.style : null
        return (
            <td style={{
                ...style
            }}
                className="px-6 py-4 hover:underline cursor-pointer"
                onClick={() => {
                    props.onViewModal(item)
                }}
                key={index}
            >
                {item[header.variable]}
            </td>
        )
    }

    const renderModal = (header, item, index) => {
        let style = header.style ? header.style : null
        return (
            <td style={{
                ...style
            }}
                className="px-6 py-4 hover:underline cursor-pointer"
                onClick={() => {
                    props.onViewModal(item)
                }}
                key={index}
            >
                {item[header.variable]}
            </td>
        )
    }

    const renderActions = (header, item, inde) => {
        let style = header.style ? header.style : null
        return (
            <td style={{
                ...style
            }}
                key={inde}
            >
                {
                    header.options && header.options.map((oItem, index) => {
                        return (
                            <span
                                key={index}
                                style={{
                                    paddingRight: '15px'
                                }}
                                className="px-6 py-4 hover:underline cursor-pointer"
                                onClick={() => {
                                    if (oItem.action === 'redirect') {
                                        router.push(oItem.route + item[oItem.route_params])
                                    } else {
                                        props.onClick(oItem, item)
                                    }
                                }}
                            >{oItem.title}</span>
                        )
                    })
                }
            </td>
        )
    }


    const renderRatings = (ratings, index) => {
        return (
            <td key={index}>
                <Ratings value={ratings} />
            </td>
        )
    }

    const renderImage = (header, item, index) => {
        let style = header.style ? header.style : null
        return (
            <td key={index}
            >
                <img src={item[header.variable]} style={{
                    ...style
                }}
                    alt="logo" />
            </td>
        )
    }

    const renderArray = (header, item, index) => {
        return (
            <td key={index}>
                {/* {
                    item && item.length > 0 ? item.map((el, index) => (
                        <Badge key={index} pill style={{ backgroundColor: Colors.secondary }}>{el}</Badge>
                    )) : (
                        <p>N/A</p>
                    )
                } */}
            </td>
        )
    }


    const renderIndex = (item, index, hItem, hIndex) => {
        switch (hItem.type.toLowerCase()) {
            case 'text': return (renderText(hItem, item[hItem.variable], hItem.title));
            case 'ratings': return renderRatings(item[hItem.variable], item[hItem.variable]);
            case 'redirect': return renderRedirect(hItem, item, item[hItem.variable]);
            case 'action': return renderActions(hItem, item, hItem.title ? hItem.title : hItem.action);
            case 'document': return renderDocument(hItem, item, index);
            case 'modal': return renderModal(hItem, item, index);
            case 'image': return renderImage(hItem, item, index);
            case 'array': return renderArray(hItem, item[hItem.variable], item[hItem.variable]);
            default: return
        }
    }

    const { header, data, isLoading, limit, page } = props;

    return (
        <div style={{
            width: '100%',
            float: 'left'
        }}>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

                    <tr style={{
                    }}>
                        {
                            header && header.map((item, index) => (
                                <th
                                    scope="col" className="px-6 py-5 text-green-500 dark:text-green-400"
                                    key={index}>{item.title}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        (!isLoading && data) && data.map((item, index) => (
                            <tr key={index}
                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-gray-700 dark:text-white">
                                {
                                    header && header.map((hItem, hIndex) => (
                                        renderIndex(item, index, hItem, hIndex)
                                    ))
                                }
                            </tr>
                        ))
                    }
                    {
                        isLoading && [1, 2, 3, 4, 5].map((item, index) => (
                            <tr key={index}
                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td colSpan={header.length}>
                                    <Skeleton
                                        height={50}
                                        style={{
                                        }}
                                    />
                                </td>
                            </tr>
                        ))
                    }
                    {
                        (!isLoading && (data === null || (data && data.length === 0))) && (
                            <tr
                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td colSpan={header.length}
                                    style={{
                                        textAlign: 'center'
                                    }}
                                >
                                    No results
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

            {
                props.pagination && (
                    <div
                        className="float-right mt-[20px]"
                    >
                        <span className="cursor-pointer text-green-400 font-bold">
                            <SvgIcon
                                component={ChevronLeft}
                            />
                            Prev

                        </span>

                        <span className='ml-[20px] cursor-pointer text-green-400 font-bold'>
                            Next
                            <SvgIcon
                                component={ChevronRight}
                            />
                        </span>
                    </div>
                )
            }
        </div>
    )
}

export default CustomTable;


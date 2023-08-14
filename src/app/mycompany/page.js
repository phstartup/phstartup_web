"use client"
import React, { Component } from 'react';
import Achievements from '@/components/mycompany/Achievements';
import Information from '@/components/mycompany/information';
import Banner from '@/components/mycompany/Banner';
import Services from '@/components/mycompany/Services'
import Pitches from '@/components/mycompany/pitches'
import Team from '@/components/mycompany/team'
import { useSession } from 'next-auth/react';
import FetchLoading from '@/components/loading/SpinnerWhole'
import Api from '@/lib/api';
let api = new Api()

const withSession = (Component) => (props) => {
    const session = useSession()

    // if the component has a render property, we are good
    if (Component.prototype.render) {
        return <Component session={session} {...props} />
    }

    // if the passed component is a function component, there is no need for this wrapper
    throw new Error(
        [
            "You passed a function component, `withSession` is not needed.",
            "You can `useSession` directly in your component.",
        ].join("\n")
    )
}

withSession.displayName = 'withSession'

class Page extends React.Component {
    constructor() {
        super();
        this.state = {
            data: null,
            loading: null
        };
    }

    async componentDidMount() {
        this.getData()
    }


    getData = async () => {
        const { data: session } = this.props.session;
        if (!session) return
        this.setState({
            loading: true
        })
        await api.get('/api/companies?user_id=' + session.user.id, session?.accessToken, (response) => {
            if (response.data) {
                this.setState({
                    data: response.data
                })
            }
            setTimeout(() => {

                this.setState({
                    loading: false
                })
            }, 1000)
        }, (error) => {
            setTimeout(() => {

                this.setState({
                    loading: false
                })
            }, 1000)

        })
    }


    render() {
        const { loading, data } = this.state;
        const { data: session } = this.props.session

        return (
            <div className='w-full float-left' >
                {
                    !loading && (
                        <div className='w-full float-left mt-[20px]'>
                            {
                                data && (
                                    <Banner data={data} getData={() => this.getData()} />
                                )
                            }

                            <Information data={data} getData={() => this.getData()} />

                            {
                                data && (
                                    <div className='w-full float-left'>
                                        <Team data={data} getData={() => this.getData()} />
                                        <Pitches data={data} getData={() => this.getData()} />
                                        <Services data={data} getData={() => this.getData()} />
                                        <Achievements data={data} getData={() => this.getData()} />
                                    </div>
                                )
                            }

                        </div>
                    )
                }
                {
                    loading && (
                        <FetchLoading></FetchLoading>
                    )
                }
            </div >)
    };
}

export default withSession(Page)
import {useEffect, useState} from 'react';
import * as S from './style';

//Components UI
import BackgroundInfo from "components/BackgroundInfo"
// import Tokenomics from "../Tokenomics";
// import Roadmap from "../Roadmap";
// import InvestorsPartners from "../InvestorsPartners";
// import Team from "../Team";

//Container UI
// import useAuth from 'hooks/useAuth'
// import {useWeb3React} from '@web3-react/core'
// import PreSale from 'pages/PreSale';
// import Order from 'pages/Order';
// import Tokenomics from 'pages/Tokenomics';
// import Roadmap from 'pages/Roadmap';
// import Team from 'pages/Team';
// import InvestorsPartners from 'pages/InvestorsPartners';
import * as React from "react";
import PreSale from "../PreSale";
// import {InviteMember, CreateMember} from 'apis'


function HomePage(): React.ReactElement {
    // const {account} = useWeb3React()
    // const {login} = useAuth()

    // const [account, setAcount] = useState('');
    const [addrInvite, setAddrInvite] = useState('');
    // console.log('window?.ethereum', web3.eth.getAccounts())

    // useEffect(() => {
    //     const fetch = async () => {
    //         // eslint-disable-next-line react-hooks/rules-of-hooks
    //         try {
    //             const web3 = new Web3(window?.ethereum)
    //             const accounts = await web3.eth.getAccounts();
    //             // console.log('accounts', accounts)
    //             // const account = await web3.eth.accounts[0];
    //             const accountValue = accounts[0]
    //             // setAcount(accountValue)
    //         } catch (error) {
    //             console.log('error :>> ', error);
    //         }
    //     }
    //     fetch()
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    // useEffect(() => {
    //     const {location} = window
    //     const fetchInviteMember = async (params) => {
    //         const response: any = await InviteMember(params)
    //         console.log('response :>> ', response);
    //     }
    //
    //     const fetchCreateMember = async () => {
    //         // eslint-disable-next-line react-hooks/rules-of-hooks
    //         try {
    //             const respon: any = await CreateMember({address: account});
    //             if (respon.status === 200) {
    //                 const invite_by = respon.data.data.invite_by
    //                 setAddrInvite(invite_by)
    //             }
    //         } catch (error) {
    //             console.log('error :>> ', error);
    //         }
    //     }
    //     // account && fetchCreateMember()
    //
    //
    //     if (location.search !== '' && location.search !== null && account) {
    //         const queryString = location.search;
    //         // console.log('queryString===>', queryString);
    //         const urlParams = new URLSearchParams(queryString);
    //         const ref = urlParams.get('ref');
    //         console.log('ref===>', ref);
    //         const params = {
    //             addr: account.toLocaleLowerCase(),
    //             ref,
    //         }
    //         setAddrInvite(ref.toLocaleLowerCase())
    //         // fetchInviteMember(params)
    //         // fetchCreateMember()
    //         //   dispatch(fetchInviteMember(params))
    //     }
    //
    //
    // }, [account])

    return (<S.Wrapper>
        <BackgroundInfo/>
        {/*<PreSale/>*/}
        {/*<PreSale account={account}/>*/}
        {/*<Order account={account} addrInvite={addrInvite} login={login}/>*/}
        {/*<Tokenomics/>*/}
        {/*<Roadmap/>*/}
        {/*<Team/>*/}
        {/*<InvestorsPartners/>*/}

    </S.Wrapper>)
}

export default HomePage;

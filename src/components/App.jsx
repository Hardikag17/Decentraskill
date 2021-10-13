import React, { Suspense, lazy, useCallback, useState, useEffect } from 'react';
import { Web3Context } from '../utils/web3.js';
import SmartContract from '../abis/Decentraskill.json';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Web3 from 'web3';

const LandingPage = lazy(() => import('../pages/LandingPage.jsx'));
const Company_Dashboard = lazy(() => import('../pages/Company_Dashboard'));
const User_Dashboard = lazy(() => import('../pages/User_Dashboard'));

const App = () => {
  const [state, setState] = useState({
    web3: null,
    contract: null,
    email: '',
    account: '',
    accountId: '',
    signedIn: false,
    loaded: false,
  });

  const initWeb3 = useCallback(async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      try {
        const web3 = new Web3(window.ethereum);
        const account = (await web3.eth.getAccounts())[0];
        const netId = await web3.eth.net.getId();
        const address = SmartContract.networks[netId].address;
        const contract = new web3.eth.Contract(SmartContract.abi, address);
        const accountId = await contract.methods.address_to_id(account).call();
        setState({
          ...state,
          web3,
          account,
          contract,
          accountId,
          loaded: true,
        });
        console.log('setup complete');
      } catch (e) {
        alert(e);
      }
    } else {
      alert('web3 not detected');
    }
  }, []);

  useEffect(() => {
    initWeb3();
  }, [initWeb3]);

  return (
    <Web3Context.Provider value={{ state, setState }}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/company' component={Company_Dashboard} />
            <Route exact path='/user' component={User_Dashboard} />
          </Switch>
        </Suspense>
      </Router>
    </Web3Context.Provider>
  );
};

export default App;

import React, {Suspense, lazy} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import loading from 'assets/img/loading.svg';
import LoadingIndicator from "components/LoadingIndicator";
import MixLayout from 'containers/MixLayout';
import GlobalStyle from './style/Global'
import Home from "pages/Home";
// import useEagerConnect from 'hooks/useEagerConnect'

declare global {
    interface Window {
        ethereum: any;
    }
}

//Test page
// const Home = lazy(() => import('pages/Home'));
//Test Components UI
// const Test = lazy(() => import('tests/test.ui'));


// const renderLoader = () => <div className='loading'><img className='icon-loading' src={loading} alt='loading' /></div>;
const renderLoader = () => <div className='loading'><LoadingIndicator/></div>;
const R2 = () => <div className='loading'>XXX</div>;

function App() {

    // useEagerConnect()
    // const web3: any = getWeb3()
    // const web3: any = useWeb3()


    return (
        <div className="App">
            <GlobalStyle/>
            <Router>
                {/*<Routes>*/}
                    <Suspense fallback={R2()}>
                    <MixLayout>
                      <Routes>
                        {/*    <SecurityRoute exact path="/test" component={r2} />*/}
                        {/*    <PublicRoute exact path="/" element={R2} />*/}
                        <Route path="/" element={<Home/>}/>
                        </Routes>
                    </MixLayout>

                    </Suspense>
                {/*</Routes>*/}
            </Router>
        </div>
    );
}

function PublicRoute({
                         component: TargetPage,
                         ...rest
                     }: any): React.ReactElement {
    return (
        <Route {...rest} element={(props) => <TargetPage {...props} />}/>
    );
}


function SecurityRoute({
                           component: TargetPage,
                           ...rest
                       }: any): React.ReactElement {
    return (
        <Route {...rest} render={(props) => <TargetPage {...props} />}/>
    );
}

export default App;

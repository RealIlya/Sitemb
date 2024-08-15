import { ArrowRight } from 'lucide-react';

function ButtonUsual({ text }) {
    return (
        <button className="TopBar-ButtonUsual">
            <i>{text}</i>
        </button>
    );
}

function ButtonArrow({ text }) {
    return (
        <button className="ButtonArrow">
            <i>{text}</i>
            <ArrowRight className="ButtonArrow-Arrow" />
        </button>
    );
}

function TopBar() {
    return (
        <div className="TopBar">
            <div className="TopBar-Navigation">
                <ButtonUsual text="Cards" />
                <ButtonUsual text="About" />
                <ButtonUsual text="App" />
            </div>
            <div className="TopBar-Extra">
                <ButtonUsual text="Login" />
                <ButtonArrow text="Apply Now" />
            </div>
        </div>);
}

function Introduction() {
    return (
        <div className="Introduction">
            <div className="Introduction-LeftSide">
                <h1>Making <span className="Introduction-Span">your</span> credit history.</h1>
                <i className="Welcome">Welcome to credit, no experience necessary.</i>
                <ButtonArrow text="Apply Now" />
                <i className="Info">Variable APR range from 17.24% – 34.74%</i>
            </div>
            <div className="Introduction-RightSide">
                <div className="Introduction-Card" />
            </div>
        </div>
    )
}

export default function App() {
    return (
        <div>
            <TopBar />
            <Introduction />
        </div>)
}
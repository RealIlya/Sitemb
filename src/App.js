import { ArrowRight } from 'lucide-react';

function TopBar() {
    return (
        <div className="TopBar">
            <div className="TopBar-Navigation">
                <button className="TopBar-ButtonUsual">Cards</button>
                <button className="TopBar-ButtonUsual">About</button>
                <button className="TopBar-ButtonUsual">App</button>
            </div>
            <div className="TopBar-Extra">
                <button className="TopBar-ButtonUsual">Login</button>
                <button className="TopBar-ButtonArrow">
                    Apply now
                    <ArrowRight />
                </button>
            </div>
        </div>);
}

export default function App() {
    return (<div>
        <TopBar />
    </div>)
}
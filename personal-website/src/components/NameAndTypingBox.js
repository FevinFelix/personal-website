import './NameAndTypingBox.css'
import NameBox from './NameBox';
import TypingTextBox from './TypingTextBox';

function NameAndTypingBox() {
    return (
        <div className="home-first">
            <NameBox />
            <TypingTextBox />
        </div>
    );
}

export default NameAndTypingBox
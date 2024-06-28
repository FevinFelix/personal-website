import './NameAndTypingBox.css'
import NameBox from './NameBox';
import TypingTextBox from './TypingTextBox';

function NameAndTypingBox() {
    return (
        <div className="home-first">
            <NameBox className="name-box"/>
            <TypingTextBox className="typing-text-box"/>
        </div>
    );
}

export default NameAndTypingBox